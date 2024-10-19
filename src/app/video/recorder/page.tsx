import React from 'react';
import { DiscardConnect, ScreenRecorder } from '~/components';
import { RecorderHeader } from '~/components';
import { IoMdCamera } from "react-icons/io";
import { LuScreenShare } from "react-icons/lu";
import { FaMicrophoneLines } from "react-icons/fa6";
import { MdFitScreen } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";

const page = () => {

    const StepCard = ({
        step,
        title,
        description,
        extraDescription,
    }: {
        step: string;
        title: string;
        description: string;
        extraDescription: string;
    }) => (
<div className="relative p-6 bg-secondary rounded-xl shadow-md group hover:shadow-lg hover:scale-105 transition-all duration-300">
  <div className="absolute -inset-5 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
    <span className="text-2xl font-bold">{step}</span>
  </div>
  <h3 className="text-xl font-semibold text-primary">{title}</h3>
  <p className="mt-2 text-gray-500">{description}</p>
  <p className="mt-2 text-gray-400 text-sm">{extraDescription}</p>
</div>


    );

    return (
        <div>
            <RecorderHeader />
            <ScreenRecorder />

            <main className="bg-background text-foreground min-h-screen">
                <section className="bg-background py-16 my-10">
                    <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
                        <div className="content-center justify-self-start md:col-span-7 md:text-start">
                            <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                                Your All-in-One Recording Solution
                            </h2>
                            <p className="text-lg leading-8 text-muted-foreground">
                                Create professional-quality videos effortlessly. Record your screen, camera, or both in high-definition. Customize your recordings with flexible settings and advanced features.
                                And share your knowledge, skills, and creativity with the world.
                            </p>
                        </div>
                        <div className="hidden md:col-span-5 md:mt-0 md:flex justify-center">
                            <GiSoundWaves fontSize={200} className='text-muted-foreground'/>
                        </div>
                    </div>

                    <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 text-gray-500 dark:text-gray-400 sm:grid-cols-3 sm:gap-12 lg:grid-cols-4 px-4">
                        <div className="hover:text-gray-800 dark:hover:text-gray-400 flex items-center gap-4">
                            <IoMdCamera fontSize={50} />
                            <span className='font-semibold text-2xl'>Camera</span>
                        </div>
                        <div className="hover:text-gray-800 dark:hover:text-gray-400 flex items-center gap-4">
                            <LuScreenShare fontSize={40} />
                            <span className='font-semibold text-2xl'>Screen</span>
                        </div>
                        <div className="hover:text-gray-800 dark:hover:text-gray-400 flex items-center gap-4">
                            <FaMicrophoneLines fontSize={40} />
                            <span className='font-semibold text-2xl'>Microphone</span>
                        </div>
                        <div className="hover:text-gray-800 dark:hover:text-gray-400 flex items-center gap-4">
                            <MdFitScreen fontSize={50} />
                            <span className='font-semibold text-2xl'>Dual Recording</span>
                        </div>
                    </div>

                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                        <div className="grid gap-4 lg:mb-12 lg:grid-cols-2">
                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-muted border-b">
                                <blockquote className="mx-auto max-w-2xl">
                                    <h3 className="text-lg font-semibold text-primary">Highly Customizable</h3>
                                    <p className="my-4 text-muted-foreground">Choose the perfect frame rate, video resolution, and quality based on your needs. Monitor live file size to ensure your recording stays within your desired limits without sacrificing quality.</p>

                                </blockquote>
                            </figure>

                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-muted border-b">
                                <blockquote className="mx-auto max-w-2xl">
                                    <h3 className="text-lg font-semibold text-primary">Screen + Camera Recording</h3>
                                    <p className="my-4 text-muted-foreground">Easily record both your screen and camera at the same time. Ideal for creating dynamic presentations, product demos, or instructional videos where both you and the content you're showcasing need to be seen.</p>
                                </blockquote>
                            </figure>

                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-muted border-b">
                                <blockquote className="mx-auto max-w-2xl">
                                    <h3 className="text-lg font-semibold text-primary">Real-Time Control</h3>
                                    <p className="my-4 text-muted-foreground">Stay in control of your recording session with real-time pause, resume, and mute options. Adjust your settings on the fly without interrupting your work.</p>
                                </blockquote>
                            </figure>

                            <figure className="flex flex-col justify-center items-center p-8 text-center bg-muted">
                                <blockquote className="mx-auto max-w-2xl">
                                    <h3 className="text-lg font-semibold text-primary">No Download Needed</h3>
                                    <p className="my-4 text-muted-foreground">Start recording right in your browser. No need to download or install any software. Simply open the site, adjust your settings, and hit record in seconds.</p>
                                </blockquote>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 my-10 px-8 bg-background text-primary">
                    <h2 className="text-4xl text-primary font-bold text-center">How It Works?</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <StepCard
                            step="1"
                            title="Choose What to Record"
                            description="Select whether you want to record the screen, camera, or both."
                            extraDescription="You can record presentations, tutorials, or even just your webcam feed. Choose wisely!"
                        />
                        <StepCard
                            step="2"
                            title="Set Your Preferences"
                            description="Adjust settings like FPS, bitrate, and more for an optimized recording."
                            extraDescription="Higher FPS and bitrate will give you better quality but may increase file size."
                        />
                        <StepCard
                            step="3"
                            title="Start & Control Recording"
                            description="Start recording, and use controls to pause, mute, or stop anytime."
                            extraDescription="Feel free to pause or mute during your recording for a smoother experience."
                        />
                    </div>
                </section>

                <section className="py-16 my-10 bg-background">
                    <div className="py-16 px-4 mx-auto max-w-screen-xl">
                        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                            <div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                                        </svg>
                                        Is my recording data secure?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Yes, your recordings are processed locally on your device and are not stored on our servers. We prioritize user privacy and data security. This guarantees maximum security and peace of mind for all users.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        Is the screen recorder really free?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Yes, our screen recorder is 100% free to use with no hidden fees or premium features. You can access all settings and customization options without any cost.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        Can I record both my screen and camera at the same time?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Absolutely! Our recorder supports simultaneous screen and camera recording, making it perfect for creating high-quality demos, tutorials, or presentations with ease and professionalism.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        Will there be any watermarks on my recordings?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        No, your recordings will be completely watermark-free. We believe in providing a professional, unrestricted recording experience for all users.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        What devices and browsers are supported?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Our recorder is compatible with most modern web browsers, including Chrome, Firefox, Safari, and Edge, on desktop and tablet devices. However, it is currently not supported on mobile devices.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        Can I customize the recording quality?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Yes, you can adjust the frame rate and bitrate to control the video quality and file size of your recordings. By increasing the frame rate or bitrate, you’ll achieve higher video quality, but this will also result in larger file sizes.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        Can I pause and resume my recordings?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Absolutely! You can easily pause and resume your recordings as needed, giving you the flexibility to take breaks during your sessions without needing to start over.
                                    </p>
                                </div>
                                <div className="mb-10">
                                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                        Do I need to download any software to use the recorder?
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">No downloads are required. You can start recording directly from your browser without any installations, making it quick and hassle-free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DiscardConnect />
            </main>
        </div>
    );
};

export default page;
