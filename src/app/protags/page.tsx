import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { SiYoutubestudio } from 'react-icons/si';
import { PiFireSimpleDuotone, PiTagSimpleDuotone } from 'react-icons/pi';
import { LiaSlackHash } from 'react-icons/lia';
import { AiFillTags } from 'react-icons/ai';
import { BsClipboardDataFill } from 'react-icons/bs';
import GetStarted from './GetStarted';

const NewsLetter = dynamic(() => import('~/widgets'), { ssr: false });

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.hightool.net/protags'
  },
  title: 'ProTags - Tag Generator for YouTube and Instagram',
  description: "ProTags offers YouTube tag generator and Instagram Hashtag generator that helps you create effective tags for your YouTube videos and Instagram posts.",
  keywords: 'ProTags, protag, hightool, Tag generator, YouTube tags, Instagram hashtags, youtube tag generator, tag generator for youtube, Keyword research, Content marketing',
  applicationName: 'HighTool',
  verification: {
    other: {
      ['google-site-verification']: 'vH97xdO0p3T4lidmLNaW6w05iWQKG9mqo2ZjUc7Sd0w'
    }
  },
  openGraph: {
    type: 'website',
    siteName: 'hightool.net',
    title: 'ProTags - HighTool.net',
    images: '/fav/maskable_icon_x512.png',
    url: 'https://www.hightool.net/protags',
    description: 'ProTags offers YouTube tag generator and Instagram Hashtag generator that helps you create effective tags for your YouTube videos and Instagram posts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProTags - HighTool.net',
    images: '/fav/maskable_icon_x512.png',
    site: 'https://www.hightool.net/protags',
    description: 'ProTags offers YouTube tag generator and Instagram Hashtag generator that helps you create effective tags for your YouTube videos and Instagram posts.',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
    title: 'ProTags - HighTool.net',
    startupImage: {
      url: '/fav/maskable_icon_x512.png',
    },
  }
};

const ProTags = () => {
  return (
    <div>
      <section className="flex dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="/protags/youtube" title="View the new YouTube Tag Generator"  className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">YouTube Tag Generator is out! See what's new</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          {/* <div className='w-full flex justify-center'><PiTagSimpleDuotone fontSize={150} /></div> */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className='text-blue-600'>ProTags</span> - Tag Generator</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            The powerful online tag generator that delivers relevant and effective keyword suggestions based on your title. And helps you to
            elevate your content and drive traffic. Make use of ProTags and get full potential of your SEO.
          </p>

          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-xl lg:px-36 mt-12 lg:flex md:flex hidden flex-wrap justify-center">
            <span className="font-semibold text-gray-400 uppercase">Powered by</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between gap-10">
              <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex items-center cursor-default">
                <PiFireSimpleDuotone fontSize={45} /> <span className='font-bold text-2xl ml-2'>Pro Algorithm</span>
              </span>
              <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex items-center cursor-default">
                <BsClipboardDataFill fontSize={35} /> <span className='font-bold text-2xl ml-2'>Data Analysis</span>
              </span>
              <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 flex items-center cursor-default">
                <AiFillTags fontSize={35} /> <span className='font-bold text-2xl ml-2'>Keyword Research</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-wrap justify-center dark:bg-gray-900 lg:px-20 md:px-10 px-5 pt-16 pb-16'>
        <div className='flex flex-wrap lg:w-8/12 md:w-full w-full lg:pt-16 pb-8'>
          <span className="w-full text-center text-4xl font-extrabold leading-none text-gray-900 mb-4 md:text-4xl lg:text-4xl dark:text-white">
            What's in ProTags?
          </span>
          <p className="w-full text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400 text-center ">
            ProTags is a popular hashtag generation algorithm. Let's begin with some of the popular ProTags-powered tools, such as the YouTube tag generator and the Instagram hashtag generator.
          </p>
        </div>

        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">YouTube <span className='text-red-600'>Tag</span> Generator</h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Our YouTube tag generator is a valuable tool that helps you in finding relevant tags for your videos based on the given title. ProTags analyze your video's content and provide suggestions for tags that align with your video's topic, increasing the chances of it being discovered by the right audience.
            </p>

            <GetStarted path={'/protags/youtube'} disabled={false} />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
            <SiYoutubestudio fontSize={200} className='text-red-600 bg-gray-100 rounded-md p-5 shadow-inner' />
          </div>
        </div>

        <div className="grid max-w-screen-xl px-4 pt-8 lg:pb-8 md:pb-8 pb-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
            <LiaSlackHash fontSize={200} className='text-violet-700 bg-gray-100 rounded-md p-5 shadow-inner' />
          </div>

          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white">Instagram <span className='text-violet-700'>HashTag</span> Generator</h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Instagram hashtags are a great way to get your content seen by more people. When you use relevant hashtags, your posts will show up in the search results for those hashtags, which means that people who are interested in those topics are more likely to see your content.
            </p>

            <GetStarted path={'/protags/instagram'} disabled={true} />
          </div>
        </div>
      </section>

      <div className='flex mt-16'>
        <NewsLetter />
      </div>
    </div>
  );
};

export default ProTags;