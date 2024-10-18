'use client';

import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Switch } from "../ui/switch";
import { BitrateSelector } from "./BitrateSelector";
import { FpsSelector } from "./FpsSelector";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { ModelSelector } from "./model-selector";
import { Input } from "../ui/input";

const ScreenRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
    const [mirrorCamera, setMirrorCamera] = useState(false);
    const [microphoneEnabled, setMicrophoneEnabled] = useState(false);
    const [isAudioMuted, setIsAudioMuted] = useState(false);
    const [recordingType, setRecordingType] = useState("Screen");
    const [videoQuality, setVideoQuality] = useState([4]);
    const [videoFps, setVideoFps] = useState([30]);
    const [recordingDuration, setRecordingDuration] = useState(0);
    const [recordedFileSize, setRecordedFileSize] = useState('0');
    const [fileName, setFileName] = useState<string | null>(null);

    const screenStreamRef = useRef<MediaStream | null>(null);
    const cameraStreamRef = useRef<MediaStream | null>(null);
    const audioStreamRef = useRef<MediaStream | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const screenVideoRef = useRef<HTMLVideoElement | null>(null);
    const cameraVideoRef = useRef<HTMLVideoElement | null>(null);
    const isDrawingRef = useRef(false);
    const drawIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startRecording = async () => {
        try {
            const audioStream = microphoneEnabled ? await navigator.mediaDevices.getUserMedia({ audio: { sampleRate: 44100 } }) : null;
            const cameraStream = recordingType.includes("Camera") ? await navigator.mediaDevices.getUserMedia({ video: true }) : null;
            const screenStream = recordingType.includes("Screen") ? await navigator.mediaDevices.getDisplayMedia({ video: { frameRate: videoFps[0] } }) : null;

            screenStreamRef.current = screenStream;
            cameraStreamRef.current = cameraStream;
            audioStreamRef.current = audioStream;

            if (screenVideoRef.current && screenStream) {
                screenVideoRef.current.srcObject = screenStream;
                screenVideoRef.current.play();
            }
            if (cameraVideoRef.current && cameraStream) {
                cameraVideoRef.current.srcObject = cameraStream;
                cameraVideoRef.current.play();
            }

            screenStream?.getTracks().forEach((track) => track.addEventListener('ended', stopRecording));
            cameraStream?.getTracks().forEach((track) => track.addEventListener('ended', stopRecording));

            const canvas = canvasRef.current;
            const canvasContext = canvas?.getContext("2d");
            const screenSettings = screenStream?.getVideoTracks()[0]?.getSettings();

            if (canvas) {
                canvas.width = screenSettings?.width || 1920;
                canvas.height = screenSettings?.height || 1080;
            }

            const drawVideoStreams = () => {
                if (!isDrawingRef.current) return;

                if (canvas && canvasContext && cameraVideoRef.current) {
                    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

                    // If screenStream exists, draw it on the canvas
                    if (screenStream && screenVideoRef.current) {
                        canvasContext.drawImage(screenVideoRef.current, 0, 0, canvas.width, canvas.height);

                        // Draw the camera stream in a smaller position
                        const cameraSize = 240;
                        const cameraX = canvas.width - cameraSize - 20;
                        const cameraY = canvas.height - cameraSize - 20;
                        const radius = cameraSize / 2;

                        canvasContext.save();
                        canvasContext.beginPath();
                        canvasContext.arc(cameraX + radius, cameraY + radius, radius, 0, Math.PI * 2);
                        canvasContext.clip();

                        if (mirrorCamera) {
                            canvasContext.translate(cameraX + cameraSize, cameraY);
                            canvasContext.scale(-1, 1);
                            canvasContext.drawImage(cameraVideoRef.current, 0, 0, cameraSize, cameraSize);
                            canvasContext.scale(-1, 1);
                            canvasContext.translate(-(cameraX + cameraSize), -cameraY);
                        } else {
                            canvasContext.drawImage(cameraVideoRef.current, cameraX, cameraY, cameraSize, cameraSize);
                        }

                        canvasContext.restore();
                    }
                    // If only the camera is recording, show it full-screen
                    else if (cameraStream) {
                        if (mirrorCamera) {
                            canvasContext.translate(canvas.width, 0);
                            canvasContext.scale(-1, 1);
                            canvasContext.drawImage(cameraVideoRef.current, 0, 0, canvas.width, canvas.height);
                            canvasContext.scale(-1, 1);
                            canvasContext.translate(-canvas.width, 0);
                        } else {
                            canvasContext.drawImage(cameraVideoRef.current, 0, 0, canvas.width, canvas.height);
                        }
                    }
                }
            };

            isDrawingRef.current = true;
            drawIntervalRef.current = setInterval(drawVideoStreams, 10);

            const canvasStream: MediaStream = canvas?.captureStream(60) as MediaStream;
            const combinedAudioStream = new MediaStream([
                ...screenStream?.getAudioTracks() || [],
                ...cameraStream?.getAudioTracks() || [],
                ...(audioStream?.getAudioTracks() || []),
            ]);

            combinedAudioStream.getAudioTracks().forEach((track) => canvasStream.addTrack(track));
            const mergedStream = new MediaStream([...canvasStream.getTracks()]);

            const bitrate = videoQuality[0] * 1000000;
            mediaRecorderRef.current = new MediaRecorder(mergedStream, {
                videoBitsPerSecond: bitrate,
                audioBitsPerSecond: 128000,
                mimeType: "video/webm; codecs=vp8, opus",
            });

            chunksRef.current = [];

            const calculateFileSize = (chunks: BlobPart[]) => {
                const blob = new Blob(chunks);
                const totalSize = blob.size;

                if (totalSize < 1024) {
                    return `${totalSize} bytes`;
                } else if (totalSize < 1024 * 1024) {
                    return `${(totalSize / 1024).toFixed(2)} KB`;
                } else if (totalSize < 1024 * 1024 * 1024) {
                    return `${(totalSize / (1024 * 1024)).toFixed(2)} MB`;
                } else {
                    return `${(totalSize / (1024 * 1024 * 1024)).toFixed(2)} GB`;
                }
            };

            mediaRecorderRef.current.ondataavailable = (e) => {
                chunksRef.current.push(e.data);
                const recordedFileSize = calculateFileSize(chunksRef.current);
                setRecordedFileSize(recordedFileSize);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: "video/webm" });
                setMediaBlobUrl(URL.createObjectURL(blob));

                screenStream?.getTracks().forEach(track => track.stop());
                cameraStream?.getTracks().forEach(track => track.stop());
                audioStream?.getTracks().forEach(track => track.stop()); // Stop the audio stream

                if (canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                }

                isDrawingRef.current = false;
                if (drawIntervalRef.current) {
                    clearInterval(drawIntervalRef.current);
                }

                if (durationIntervalRef.current) {
                    clearInterval(durationIntervalRef.current);
                }
            };

            mediaRecorderRef.current.start(1000);
            setRecording(true);

            durationIntervalRef.current = setInterval(() => {
                setRecordingDuration(prev => prev + 1);
            }, 1000);
        } catch (err) {
            console.error("Error starting recording:", err);
            alert("Failed to start recording. Please ensure you have granted the necessary permissions.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setRecording(false);
        isDrawingRef.current = false;
        if (drawIntervalRef.current) {
            clearInterval(drawIntervalRef.current);
        }
    };

    const pauseRecording = () => {
        if (mediaRecorderRef.current && recording && !paused) {
            mediaRecorderRef.current.pause();
            setPaused(true);
            if (durationIntervalRef.current) {
                clearInterval(durationIntervalRef.current);
            }
        }
    };

    const resumeRecording = () => {
        if (mediaRecorderRef.current && recording && paused) {
            mediaRecorderRef.current.resume();
            setPaused(false);

            // Resume duration increment
            durationIntervalRef.current = setInterval(() => {
                setRecordingDuration(prev => prev + 1);
            }, 1000);
        }
    };

    const toggleAudioMute = () => {
        const isMuted = !isAudioMuted;
        setIsAudioMuted(isMuted);

        audioStreamRef.current?.getAudioTracks().forEach(track => {
            track.enabled = !isMuted;
        });
    };

    const handleDownload = () => {
        if (mediaBlobUrl) {
            const a = document.createElement('a');
            a.href = mediaBlobUrl;
            a.download = fileName || 'Hightool.net_recording'; // Specify the file name
            document.body.appendChild(a); // Append link to the document
            a.click(); // Programmatically click the link to trigger the download
            document.body.removeChild(a); // Remove link after downloading
        }
    };

    useEffect(() => {
        return () => {
            stopRecording();
        };
    }, []);

    const formatDuration = (durationInSeconds: number) => {
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        } else {
            return `${seconds}s`;
        }
    };

    const clearToStart = () => { };

    return (
        <div className="bg-background flex flex-wrap justify-center w-full">
            <section className="flex lg:w-8/12 w-11/12 justify-center py-20 my-20">
                <div className="flex flex-wrap w-8/12 bg-muted p-2">
                    <AspectRatio ratio={16 / 9}>
                        {!recording && (
                            <video autoPlay autoSave="true" controls src={mediaBlobUrl ?? undefined} className="w-full h-full bg-muted-foreground"></video>
                        )}
                        <canvas ref={canvasRef} className={`w-full h-full bg-muted-foreground ${recording ? 'flex' : 'hidden'}`} />
                        <video ref={screenVideoRef} muted className="hidden"></video>
                        <video ref={cameraVideoRef} muted className="hidden"></video>
                    </AspectRatio>
                </div>
                <div className="flex flex-wrap w-4/12 justify-center border-border bg-background m-2 border">
                    <div className="flex flex-wrap w-full justify-center items-start h-full gap-1 py-5">
                        <div className="font-bold text-lg uppercase justify-center flex w-11/12">Options</div>
                        {(!recording && !mediaBlobUrl) ?
                            <>
                                <ModelSelector onSelectMode={setRecordingType} />
                                <BitrateSelector defaultValue={videoQuality} setVideoQuality={setVideoQuality} />
                                <FpsSelector defaultValue={videoFps} setVideoFps={setVideoFps} />
                                <div className="w-11/12 flex justify-between">
                                    <Label htmlFor="recorder-mode" className="">Microphone</Label>
                                    <Switch
                                        checked={microphoneEnabled}
                                        onCheckedChange={setMicrophoneEnabled}
                                    />
                                </div>
                                <div className="w-11/12 flex justify-between">
                                    <Label htmlFor="recorder-mode">Mirror Camera</Label>
                                    <Switch
                                        checked={mirrorCamera}
                                        onCheckedChange={setMirrorCamera}
                                    />
                                </div>
                                <Button className="w-11/12" onClick={startRecording}>Start Recording</Button>
                            </> :
                            <>
                                <div className={`w-11/12 flex justify-between ${!recording ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={paused ? resumeRecording : pauseRecording}>
                                    <Label htmlFor="recorder-mode" className="select-none">Pause</Label>
                                    <Switch
                                        disabled={!recording}
                                        checked={paused}
                                        onCheckedChange={paused ? resumeRecording : pauseRecording}
                                    />
                                </div>
                                <div className="w-11/12 flex justify-between cursor-pointer" onClick={toggleAudioMute}>
                                    <Label className="select-none">Mute</Label>
                                    <Switch
                                        id="mute-switch"
                                        checked={isAudioMuted}
                                        onCheckedChange={toggleAudioMute}
                                    />
                                </div>
                                <div className="w-11/12 flex justify-between cursor-pointer">
                                    <Label className="select-none">Mirror Camera</Label>
                                    <Switch
                                        id="mute-switch"
                                        disabled
                                    />
                                </div>
                                <div className="w-11/12 flex justify-between cursor-pointer select-none">
                                    <Label className="select-none">File size</Label>
                                    {recordedFileSize}
                                </div>
                                <div className="w-11/12 flex justify-between cursor-pointer select-none">
                                    <Label className="select-none">Record duration</Label>
                                    {formatDuration(recordingDuration)}
                                </div>
                                <Button className={`w-11/12 ${recording ? 'bg-destructive text-destructive-foreground hover:bg-destructive/80' : 'bg-chart-2 text-destructive-foreground'}`} onClick={recording ? stopRecording : clearToStart}>{recording ? "Stop" : "New"} Recording</Button>
                                <div className="flex flex-wrap w-11/12 gap-3 border-t pt-5 border-border border-dashed">
                                    <Input className="w-full" onChange={e => setFileName(e.target.value)} value={fileName || ''} placeholder="Export file name (optional)" />
                                    <Button disabled={!mediaBlobUrl} className={`w-full select-none`} onClick={handleDownload}>Download</Button>
                                </div>
                            </>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export { ScreenRecorder };
