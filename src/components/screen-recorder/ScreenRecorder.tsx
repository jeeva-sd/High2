'use client';

import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { Switch } from '@headlessui/react';
import RecordController from './RecordController';

const videoOptions = [
    { label: '4K UHD', value: '4K' },
    { label: '1080P', value: '1080P' },
];

const ScreenRecorder = () => {
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const screenChunksRef = useRef<Blob[]>([]);
    const audioChunksRef = useRef<Blob[]>([]);

    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [resolution, setResolution] = useState<'1080p' | '4k'>('1080p');
    const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>('');

    const downloadMedia = useCallback(() => {
        const webmBlob = new Blob(screenChunksRef.current, { type: 'video/mp4' });
        const url = URL.createObjectURL(webmBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName?.trim().length > 0 ? `${fileName}` : 'Hightool_Recording.mp4';
        a.click();
        URL.revokeObjectURL(url);
    }, [screenChunksRef, fileName]);

    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            if (mediaStream) {
                mediaStream.getTracks().forEach((track) => track.stop());
            }
            setIsRecording(false);
        }
    }, [mediaStream]);

    const startRecording = useCallback(async () => {
        try {
            setIsRecording(true);

            let combinedStream: MediaStream;
            const audioConstraints: MediaStreamConstraints = { audio: true };
            const screenConstraints: MediaStreamConstraints = {
                video: {
                    width: { ideal: resolution === '4k' ? 3840 : 1920 },
                    height: { ideal: resolution === '4k' ? 2160 : 1080 },
                    frameRate: { ideal: 60 },
                },
                audio: audioEnabled
            };

            const screenStream = await navigator.mediaDevices.getDisplayMedia(screenConstraints);

            if (audioEnabled) {
                const audioStream = await navigator.mediaDevices.getUserMedia(audioConstraints);

                combinedStream = new MediaStream([
                    ...screenStream.getTracks(),
                    ...audioStream.getTracks()
                ]);
            } else {
                combinedStream = screenStream;
            }

            const mediaRecorder = new MediaRecorder(combinedStream, {
                mimeType: 'video/webm',
            });

            videoRef.current!.srcObject = combinedStream;
            mediaRecorderRef.current = mediaRecorder;
            setMediaStream(combinedStream);

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    screenChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                stopRecording();
            };

            if (audioEnabled) {
                audioChunksRef.current = [];
            }

            mediaRecorder.start();
        } catch (error) {
            setIsRecording(false);
            console.error('Error starting recording:', error);
        }
    }, [audioEnabled, resolution, stopRecording]);

    useEffect(() => {
        return () => {
            if (mediaStream) {
                mediaStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, [mediaStream]);

    const handleResolution = useCallback(({ value }: any) => {
        setResolution(value);
    }, []);

    return (
        <div className="flex flex-column flex-wrap justify-center bg-slate-50 rounded-md border shadow-sm p-3 lg:gap-0 md:gap-0 gap-3">
            <div className="lg:w-8/12 md:w-6/12 w-full flex justify-center bg-gray-900 lg:rounded-l-md rounded-md">
                <video ref={videoRef} autoPlay playsInline muted className="lg:w-full md:w-full lg:h-full md:h-full w-full p-2" />
            </div>

            <div className="lg:w-4/12 md:w-6/12 w-full flex flex-wrap justify-center items-center gap-3 lg:pl-3 pl-0 flex-wrap: wrap">
                <div className="w-full flex flex-wrap items-center gap-3 bg-sky-100 p-5 rounded-md border">
                    <div className="font-bold text-2xl uppercase w-full text-center pb-3">
                        Record Options
                    </div>

                    <RecordController
                        options={videoOptions}
                        onChange={handleResolution}
                        className="w-full"
                    />

                    <div
                        className="flex justify-center items-center cursor-pointer select-none pt-3 gap-3"
                        onClick={() => setAudioEnabled(!audioEnabled)}
                    >
                        <Switch checked={audioEnabled} onChange={() => setAudioEnabled(!audioEnabled)} as={Fragment}>
                            {({ checked }) => (
                                <button
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${checked ? 'bg-blue-600' : 'bg-gray-200'}`}
                                >
                                    <span
                                        className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                    />
                                </button>
                            )}
                        </Switch>
                        <span>Record Audio</span>
                    </div>

                    <div className="flex justify-center items-center gap-3 w-full">
                        {!isRecording ? (
                            <button
                                onClick={startRecording}
                                className="border p-2 bg-black rounded-md text-white w-full hover:bg-gray-900 focus:bg-gray-800 mt-4"
                            >
                                Start Recording
                            </button>
                        ) : (
                            <button
                                onClick={stopRecording}
                                className="border transition-colors border-red-600 p-2 bg-red-600 rounded-md text-white w-full hover:bg-transparent hover:text-red-600 focus:bg-red-500 mt-4"
                            >
                                Stop Recording
                            </button>
                        )}
                    </div>
                </div>

                <div className="w-full flex flex-wrap items-center bg-sky-100 p-5 rounded-md border gap-3 flex-wrap: wrap">
                    <div className="font-bold w-full text-center text-2xl uppercase pb-3">
                        Export Options
                    </div>

                    <input className='w-full p-3 rounded-md outline-none focus:border-gray-500 border' onChange={(e: any) => setFileName(e.target.value)} value={fileName} placeholder='File name (optional)' />

                    <button
                        disabled={!mediaStream || isRecording}
                        onClick={downloadMedia}
                        className="border p-2 bg-black rounded-md text-white w-full hover:bg-gray-900 focus:bg-gray-800 mt-4 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ScreenRecorder;
