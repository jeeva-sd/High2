import React from 'react';

const RecorderHeader = () => {
    return (
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#" className="inline-flex justify-between items-center py-1 px-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span className="text-sm font-medium line-through mr-2">DAILY LIMIT \ WATERMARKS </span> <span className="text-sm font-medium">- All for Free!</span>
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Record Screen, Camera & Audio</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Highly customizable online recorder that lets you control everything from FPS to bitrate and view live file size during recording. Perfect for demos, tutorials, and more</p>

        </section>
    );
};

export { RecorderHeader };
