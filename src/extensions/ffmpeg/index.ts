import { useEffect, useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { Config } from './type';

const ffmpeg = new FFmpeg();
const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd';

export function useFFmpeg() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [progress, setProgress] = useState<number | null>(0);

    useEffect(() => {
        const loadFFmpeg = async () => {
            try {
                await ffmpeg.load({
                    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
                });

                setIsLoaded(true);
            } catch (error) {
                setIsLoaded(false);
            }
        };

        loadFFmpeg();
    }, []);

    const loadFile = async (file: File) => {
        if (!isLoaded) throw new Error('FFmpeg is not loaded');
        const fileExtension = file?.name?.split('.').pop() || 'unknown';

        await ffmpeg.writeFile(fileExtension, await fetchFile(file));
    };

    const execute = async (config: Config) => {
        if (!isLoaded) throw new Error('FFmpeg is not loaded');
        const { commands, outputPath, file } = config;

        await loadFile(file);
        await ffmpeg.exec(commands);

        const result = await ffmpeg.readFile(outputPath);
        return result;
    };


    ffmpeg.on('progress', ({ progress }: any) => {
        // time also there in argument
        setProgress(Math.floor(progress * 100));
    });

    return { isLoaded, progress, ffmpeg, loadFile, execute };
}
