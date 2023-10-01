'use client';

import React, { useState } from 'react';
import { useFFmpeg } from '~/extensions';
import { downloadContent } from '~/helpers';

const GifConverter = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [gifUrl, setGifUrl] = useState<string | null>(null);
    const { progress, execute } = useFFmpeg();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setSelectedFile(file);
            setGifUrl(null);
        }
    };

    const convertToGif = async () => {
        if (!selectedFile) return;
        const outputPath = 'output.gif';
        const fileExtension = `${selectedFile.name.split('.').pop()}`;

        const config = {
            file: selectedFile,
            outputPath: 'output.gif',
            commands: ['-i', fileExtension, '-vf', 'scale=320:-1', '-t', '10', outputPath],
        };

        const data: any = await execute(config);
        const blob = new Blob([data.buffer], { type: 'image/gif' });
        const url = URL.createObjectURL(blob);

        setGifUrl(url);
        downloadContent(url, config.outputPath);
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-4">Video to GIF Converter</h1>
            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="mb-4"
            />
            <button
                onClick={convertToGif}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                disabled={!selectedFile}
            >
                Convert to GIF
            </button>
            {progress}
            {gifUrl && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Converted GIF</h2>
                    {/* <img src={gifUrl} alt="Converted GIF" /> */}
                </div>
            )}
        </div>
    );
};

export default GifConverter;
