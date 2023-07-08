import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { IoIosCut } from 'react-icons/io';
import NewsLetter from '~/widgets/NewsLetter';

export default function Home() {

  const tools = [
    {
      name: 'YouTube Tag Generator',
      icon: <AiFillYoutube fontSize={30} color='red' />,
      description: 'Our YouTube tag generator provides you with effective tags based on your title and helps your content to be more recommended across YouTube.',
      available: true
    },
    {
      name: 'Instagram Hashtag Generator',
      icon: <AiFillInstagram fontSize={30} color='violet' />,
      description: 'Our Instagram hashtag generator provides you with effective hashtags that help your content reach your targeted audience beyond your followers.',
      available: true
    },
    {
      name: 'Video and Audio Trimmer',
      icon: <IoIosCut fontSize={30} color='blue' />,
      description: 'Find the start and end time of the video or audio part you want to cut. Then enter the timecode of the required duration to get the selected area from the video or audio file.',
      available: true
    }
  ];

//  [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]

  return (
    <main className="flex flex-wrap items-center justify-center">

      <section className="flex justify-center items-center min-h-screen dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className='flex flex-wrap justify-center items-center'>
          <a
            target='_blank'
            href="https://www.instagram.com/jeeva_b_/"
            className="flex justify-center items-center py-1 px-4 pr-4 mb-7 text-sm text-blue-600 bg-blue-5 border-dashed border border-blue-600 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-sm font-medium mr-2">
              Designed by Jee6
            </span>
            <BsArrowRight />
          </a>

          <h1 className="w-full text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 mb-4 md:text-5xl lg:text-7xl dark:text-white">HighTool.net</h1>

          <p className="mb-8 lg:max-w-7xl md:max-w-7xl px-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            We provide you with powerful tools such as YouTube tag generator, Instagram hashtag generator and so on which helps you to grow your online presence. Not only the tools to improve your online presence but also help you to make your task easier
          </p>
        </div>
      </section>

      <section className="flex bg-white dark:bg-gray-900">
        <div className="py-8 px-10 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
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
              </div>
            )}

          </div>
        </div>
      </section>

      <section>
        <NewsLetter />
      </section>

    </main>
  );
}