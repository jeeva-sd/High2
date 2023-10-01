import { Metadata } from 'next';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowRoundForward, IoIosCut } from 'react-icons/io';
import { MdMovieFilter } from 'react-icons/md';
import { PiTagSimpleDuotone } from 'react-icons/pi';
import { HeadOne, ParaOne } from '~/widgets';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.hightool.net'
    },
    title: 'HighTool',
    description: 'We offer you a powerful tools that can help you grow your online presence, including a YouTube tag generator, Instagram hashtag generator, and video trimmer. These tools can help you save time and effort, so you can focus on creating great content.',
    keywords: 'HighTool, youtube tag generator, tag generator for youtube, protags, instagram hashtag generator',
    applicationName: 'HighTool',
    openGraph: {
        type: 'website',
        siteName: 'hightool.net',
        title: 'HighTool',
        url: 'https://www.hightool.net',
        images: '/fav/maskable_icon_x512.png',
        description: 'We offer you a powerful tools that can help you grow your online presence, including a YouTube tag generator, Instagram hashtag generator, and video trimmer. These tools can help you save time and effort, so you can focus on creating great content.',
    },
    twitter: {
        card: 'summary_large_image',
        site: 'https://www.hightool.net',
        title: 'HighTool',
        images: '/fav/maskable_icon_x512.png',
        description: 'We offer you a powerful tools that can help you grow your online presence, including a YouTube tag generator, Instagram hashtag generator, and video trimmer. These tools can help you save time and effort, so you can focus on creating great content.',
    },
    appleWebApp: {
        capable: true,
        title: 'hightool.net',
        statusBarStyle: 'black',
        startupImage: {
            url: '/fav/maskable_icon_x512.png',
        },
    }
};

const Home = () => {

    const tools = [
        {
            name: 'ProTags',
            icon: <PiTagSimpleDuotone fontSize={30} color='red' />,
            description: 'The tag generator provides you with effective tags based on your title and helps your content to be more recommended on your platform beyond your followers.',
            available: true,
            path: '/protags',
            position: 'lg:drop-shadow-md shadow-none'
        },
        {
            name: 'Media Filter\'s',
            icon: <MdMovieFilter fontSize={30} color='orange' />,
            description: 'This tool provide you with the different kind of filters available for your audio and video files. By using this tool you can make your raw footages to the next level.',
            available: false,
            path: '/protags',
            position: 'lg:origin-top lg:rotate-12 lg:translate-x-12 md:origin-top md:rotate-12 md:translate-x-12 origin-center rotate-0 translate-0'
        },
        {
            name: 'Video and Audio Trimmer',
            icon: <IoIosCut fontSize={30} color='green' />,
            description: 'Find the start and end time of the video or audio part you want to cut. Then enter the timecode of the required duration to get the selected area from the video or audio file.',
            available: false,
            path: '/protags',
            position: 'lg:origin-top-right lg:-rotate-12 lg:-translate-y-12 lg:-translate-x-12 lg:shadow-md origin-center rotate-0 translate-y-0 translate-x-0 shadow-none'
        }
    ];

    return (
        <main className="flex flex-wrap items-center justify-center">
            <section className="flex justify-center items-center lg:min-h-[85vh] md:min-h-[90vh] min-h-[60vh] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div className='flex flex-wrap justify-center items-center'>
                    <a
                        target='_blank'
                        href="https://www.instagram.com/jeeva_b_/"
                        className="flex justify-center items-center py-1 px-4 pr-4 mb-7 text-sm text-cyan-600 bg-blue-5 border-dashed border border-cyan-600 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:border-solid dark:hover:bg-blue-800"
                    >
                        <span className="text-sm font-medium mr-2"> Designed by Jee6 </span>
                        <BsArrowRight />
                    </a>

                    <HeadOne>HighTool.net</HeadOne>
                    <ParaOne className="mb-8 lg:max-w-7xl md:max-w-7xl px-6 text-center sm:px-16 lg:px-48">
						We offer you a powerful tools that can help you grow your online presence, including a YouTube tag generator, Instagram hashtag generator, and video trimmer.
						These tools can help you save time and effort, so you can focus on creating great content.
                    </ParaOne>
                </div>
            </section>

            <section className="flex dark:bg-gray-900">
                <div className="py-8 px-5 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 lg:text-3xl md:text-3xl text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							What&apos;s in <span className='text-blue-600'>HighTool</span>.net?
                        </h2>
                        <ParaOne className="lg:text-start md:text-start text-start">
							Here are the tools you need to make your life easier, more efficient, and more enjoyable on a daily basis.
                        </ParaOne>
                    </div>

                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        {tools.map((tool: any, index: number) =>
                            <div key={index} className={`lg:bg-white lg:p-5 lg:border lg:border-gray-200 lg:rounded-md ${tool.position}`}>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-slate-10 shadow-md border border-gray-200  lg:h-12 lg:w-12 dark:bg-primary-900">
                                    {tool.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white"> {tool.name} </h3>
                                <p className="text-gray-500 dark:text-gray-400"> {tool.description} </p>
                                <div className='mt-4'>
                                    {tool.available ?
                                        <a href={tool.path} className='text-cyan-600 w-fit flex items-center text-sm tracking-tight mt-2 hover:underline cursor-pointer'>
											Get Started <IoIosArrowRoundForward className='ml-1' />
                                        </a>
                                        :
                                        <span className='text-gray-500 w-fit flex items-center text-sm tracking-tight mt-2 hover:underline cursor-not-allowed'>
											Coming soon
                                        </span>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;