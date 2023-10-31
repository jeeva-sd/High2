import ScreenRecorder from './ScreenRecorder';
import FAQ from './FAQ';
import Features from './Features';

const Index = () => {

    return (
        <section className="flex flex-wrap justify-center gap-5 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
                <span className="inline-flex justify-between items-center py-1 px-4 pr-4 mb-7 shadow-inner text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-sm font-medium">Record upto 4K 60 FPS for free</span>
                </span>
                <h1 className="mb-4 md:text-4xl lg:text-6xl text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
                    Online <span className='text-red-600'>Screen</span> Recorder
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    {/* <sub className='my-10'>Want a simple screen recorder for quick video tutorials and product demos?</sub><br /> */}
                    HighTool Online Screen Recorder is a free, easy-to-use tool that allows you to record your computer screen and audio without having to download or install any software.
                    It is perfect for creating screencasts, video tutorials, and product demos.
                </p>
            </div>

            <section className='w-full flex justify-center'>
                <div className='lg:w-9/12 md:w-10/12 w-full'>
                    <ScreenRecorder />
                </div>
            </section>

            <section className="lg:py-0 mt-10 py-0 w-full">
                <Features />
            </section>

            <section className="lg:py-0 mt-10 py-0 w-full bg-slate-50 border shadow-inner">
                <FAQ />
            </section>
        </section>
    );
};

export default Index;