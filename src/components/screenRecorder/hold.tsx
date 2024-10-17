"use client";
import React, { useRef, useState, useEffect } from "react";

const ScreenRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
    const [mirrorCamera, setMirrorCamera] = useState(false);
    const [isAudioMuted, setIsAudioMuted] = useState(false);

    const screenStreamRef = useRef<MediaStream | null>(null);
    const cameraStreamRef = useRef<MediaStream | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const screenVideoRef = useRef<HTMLVideoElement | null>(null);
    const cameraVideoRef = useRef<HTMLVideoElement | null>(null);

    const isDrawingRef = useRef(false); // Local ref to control drawing loop

    const startRecording = async () => {
        try {
            const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

            screenStreamRef.current = screenStream;
            cameraStreamRef.current = cameraStream;

            if (screenVideoRef.current) {
                screenVideoRef.current.srcObject = screenStream;
                screenVideoRef.current.play();
            }
            if (cameraVideoRef.current) {
                cameraVideoRef.current.srcObject = cameraStream;
                cameraVideoRef.current.play();
            }

            // Add stop event listener
            screenStream.getTracks().forEach((track) => track.addEventListener('ended', stopRecording));

            const canvas = canvasRef.current;
            const canvasContext = canvas?.getContext("2d");
            const screenSettings = screenStream.getVideoTracks()[0].getSettings();

            if (canvas) {
                canvas.width = screenSettings.width!;
                canvas.height = screenSettings.height!;
            }

            const drawVideoStreams = () => {
                console.log("first video stream")
                if (!isDrawingRef.current) return; // Stop drawing if ref is false

                if (canvas && canvasContext && screenVideoRef.current && cameraVideoRef.current) {
                    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                    canvasContext.drawImage(screenVideoRef.current, 0, 0, canvas.width, canvas.height);

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

                    if (document.visibilityState === "visible") {
                        // Use requestAnimationFrame when tab is active
                        requestAnimationFrame(drawVideoStreams);
                    } else {
                        // Use setTimeout for background drawing
                        setTimeout(drawVideoStreams, 100); // Adjust the interval as needed
                    }
                }
            };


            isDrawingRef.current = true; // Set drawing active
            drawVideoStreams(); // Start drawing

            const canvasStream: MediaStream = canvas?.captureStream(60) as MediaStream;

            // Combine audio
            const combinedAudioStream = new MediaStream([
                ...screenStream.getAudioTracks(),
                ...cameraStream.getAudioTracks(),
            ]);

            combinedAudioStream.getAudioTracks().forEach((track) => canvasStream.addTrack(track));
            const mergedStream = new MediaStream([...canvasStream.getTracks()]);

            mediaRecorderRef.current = new MediaRecorder(mergedStream, {
                videoBitsPerSecond: 2500000,
                mimeType: "video/webm; codecs=vp8, opus",
            });
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                chunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: "video/webm" });
                setMediaBlobUrl(URL.createObjectURL(blob));

                // Clear resources after recording stops
                screenStream.getTracks().forEach(track => track.stop());
                cameraStream.getTracks().forEach(track => track.stop());

                if (canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                }

                isDrawingRef.current = false; // Stop drawing when recording ends
            };

            mediaRecorderRef.current.start();
            setRecording(true);
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
        isDrawingRef.current = false; // Stop drawing immediately
    };

    const toggleAudioMute = () => {
        const isMuted = !isAudioMuted;
        setIsAudioMuted(isMuted);

        // Mute/unmute audio tracks
        if (screenStreamRef.current) {
            screenStreamRef.current.getAudioTracks().forEach(track => {
                track.enabled = !isMuted;
            });
        }
        if (cameraStreamRef.current) {
            cameraStreamRef.current.getAudioTracks().forEach(track => {
                track.enabled = !isMuted;
            });
        }
    };

    useEffect(() => {
        return () => {
            stopRecording();
        };
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Screen and Camera Recorder</h1>
            <div className="mb-4">
                <button onClick={() => setMirrorCamera((prev) => !prev)} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
                    {mirrorCamera ? "Disable Mirror" : "Enable Mirror"}
                </button>
                <button onClick={toggleAudioMute} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
                    {isAudioMuted ? "Unmute Audio" : "Mute Audio"}
                </button>
                {!recording && (
                    <button onClick={startRecording} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Start Recording
                    </button>
                )}
                {recording && (
                    <button onClick={stopRecording} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                        Stop Recording
                    </button>
                )}
                {mediaBlobUrl && (
                    <a href={mediaBlobUrl} download="merged-recording.webm">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                            Download Video
                        </button>
                    </a>
                )}
            </div>

            <div className="relative">
                <canvas className="w-full h-auto" ref={canvasRef} />
            </div>

            <video ref={screenVideoRef} style={{ display: "none" }} />
            <video ref={cameraVideoRef} style={{ display: "none" }} />

            {mediaBlobUrl && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Preview:</h3>
                    <video src={mediaBlobUrl} controls autoPlay className="w-full" />
                </div>
            )}
        </div>
    );
};

export { ScreenRecorder };
