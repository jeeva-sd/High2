import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosArrowRoundForward, IoIosCut } from 'react-icons/io';
import { MdMovieFilter } from 'react-icons/md';
import { PiTagSimpleDuotone } from 'react-icons/pi';

const NewsLetter = dynamic(() => import('~/widgets'), { ssr: false });

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.hightool.net'
  },
  title: 'HighTool',
  description: "We offer you a powerful tools that can help you grow your online presence, including a YouTube tag generator, Instagram hashtag generator, and video trimmer. These tools can help you save time and effort, so you can focus on creating great content.",
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
    // {
    //   name: 'YouTube Tag Generator',
    //   icon: <AiFillYoutube fontSize={30} color='red' />,
    //   description: 'Our YouTube tag generator provides you with effective tags based on your title and helps your content to be more recommended across YouTube.',
    //   available: true,
    //   path: '/protags'
    // },
    {
      name: 'ProTags',
      icon: <PiTagSimpleDuotone fontSize={30} color='red' />,
      description: 'The tag generator provides you with effective tags based on your title and helps your content to be more recommended on your platform beyond your followers.',
      available: true,
      path: '/protags'
    },
    // {
    //   name: 'Instagram Hashtag Generator',
    //   icon: <AiFillInstagram fontSize={30} color='violet' />,
    //   description: 'Our Instagram hashtag generator provides you with effective hashtags that help your content reach your targeted audience beyond your followers.',
    //   available: false,
    //   path: '/protags'
    // },
    {
      name: "Media Filter's",
      icon: <MdMovieFilter fontSize={30} color='orange' />,
      description: 'This tool provide you with the different kind of filters available for your audio and video files. By using this tool you can make your raw footages to the next level.',
      available: false,
      path: '/protags'
    },
    {
      name: 'Video and Audio Trimmer',
      icon: <IoIosCut fontSize={30} color='green' />,
      description: 'Find the start and end time of the video or audio part you want to cut. Then enter the timecode of the required duration to get the selected area from the video or audio file.',
      available: false,
      path: '/protags'
    }
  ];

  return (
    <main className="flex flex-wrap items-center justify-center">

      <section className="flex justify-center items-center lg:min-h-[90vh] md:min-h-[90vh] min-h-[60vh] dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className='flex flex-wrap justify-center items-center'>
          <a
            target='_blank'
            href="https://www.instagram.com/jeeva_b_/"
            className="flex justify-center items-center py-1 px-4 pr-4 mb-7 text-sm text-cyan-600 bg-blue-5 border-dashed border border-cyan-600 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-800"
          >
            <span className="text-sm font-medium mr-2">
              Designed by Jee6
            </span>
            <BsArrowRight />
          </a>

          <h1 className="w-full text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 mb-4 md:text-5xl lg:text-7xl dark:text-white">HighTool.net</h1>

          <p className="mb-8 lg:max-w-7xl md:max-w-7xl px-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            We offer you a powerful tools that can help you grow your online presence, including a YouTube tag generator, Instagram hashtag generator, and video trimmer. These tools can help you save time and effort, so you can focus on creating great content.
          </p>
        </div>
      </section>

      <section className="flex dark:bg-gray-900">
        <div className="py-8 px-5 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What's in HighTool.net?
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Here are the tools you need to make your life easier, more efficient, and more enjoyable on a daily basis.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {tools.map((tool: any, index: number) =>
              <div key={index}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-slate-10 shadow-md border border-gray-200  lg:h-12 lg:w-12 dark:bg-primary-900">
                  {tool.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{tool.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
                <div className='mt-4'>
                  {tool.available ?
                    <a href={tool.path} className='text-cyan-600 flex items-center text-sm tracking-tight mt-2 hover:underline cursor-pointer'>
                      Get Started <IoIosArrowRoundForward className='ml-1' />
                    </a>
                    :
                    <span className='text-gray-500 flex items-center text-sm tracking-tight mt-2 hover:underline cursor-not-allowed'>
                      Coming soon
                    </span>}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='mt-16'>
        <NewsLetter />
      </section>

    </main>
  );
};

export default Home;