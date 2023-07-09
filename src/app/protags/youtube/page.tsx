import { Metadata } from 'next';
import YtTagEditor from './YtTagEditor';
import { employYtt, faqListOne, faqListTwo } from './content';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.hightool.net/protags/youtube'
    },
    title: 'YouTube Tag Generator',
    description: "Start using our tag generator for YouTube and start getting more views for your YouTube videos!",
    keywords: 'youtube tag generator, tag generator for youtube, tag generator yt, youtube title tag generator, ProTags, hightool',
    applicationName: 'HighTool',
    openGraph: {
        type: 'website',
        siteName: 'hightool.net',
        title: 'YouTube Tag Generator',
        images: '/fav/maskable_icon_x512.png',
        url: 'https://www.hightool.net/protags/youtube',
        description: 'Start using our tag generator for YouTube and start getting more views for your YouTube videos!',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YouTube Tag Generator',
        images: '/fav/maskable_icon_x512.png',
        site: 'https://www.hightool.net/protags/youtube',
        description: 'Start using our tag generator for YouTube and start getting more views for your YouTube videos!',
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

const YouTubeTags = () => {
    return (
        <div className="flex flex-wrap justify-center gap-5">

            <section className="flex flex-wrap justify-center gap-5 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
                    <span className="inline-flex justify-between items-center py-1 px-4 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span className="text-sm font-medium">Powered by ProTags</span>
                    </span>
                    <h1 className="mb-4 md:text-4xl lg:text-6xl text-2xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
                        YouTube <span className='text-red-600'>Tag</span> Generator
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Want your YouTube content to reach your target audience? <br />
                        Use our powerful tag generator to get more views and subscribers!
                        Our tag generator is easy to use and it's completely free. So what are you waiting for? Start using our tag generator today and start getting more views for your YouTube videos!
                    </p>
                </div>

                <YtTagEditor />
            </section>

            <section className="lg:py-8 mt-10 py-0">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="mx-auto lg:text-center">
                        <h2 className="mt-2 font-bold tracking-tight text-gray-900 md:text-4xl lg:text-4xl text-2xl lg:text-center md:text-center text-start">
                            Maximize Your YouTube Views with <span className='text-blue-600'>our Tag Generator</span>
                        </h2>
                        <p className="mt-4 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            Our tag generator uses a variety of factors to determine which YouTube tags are most relevant to your content. These factors include the keywords in your title, the popularity of the tags, and the competition for those tags. We also use advanced algorithms to ensure that your tags are relevant, attention-grabbing, and likely to get you more views.
                        </p>

                        <p className="mt-4 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            Follow the following steps to get more views on youtube
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-full">
                        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-full lg:grid-cols-3 lg:gap-y-16 mx-auto">
                            {employYtt.map((feature: any, index: number) => (
                                <div key={index} className="relative shadow-md border border-t-1 border-gray-200 bg-white rounded-md p-5">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className={`absolute top-[-20px] left-[-20px] flex h-10 w-10 items-center justify-center rounded-lg  shadow-lg ${index === 1 ? 'bg-blue-600' : 'bg-black'}`}>
                                            {feature.icon}
                                        </div>
                                        <span className='flex justify-start text-lg tracking-tight'>{feature.title}</span>
                                    </dt>
                                    <dd className="mt-2 leading-7 text-gray-600 text-sm">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <section className="dark:bg-gray-900">
                <div className="px-4 mx-auto max-w-screen-xl pb-8 pt-16 lg:px-6">
                    <h2 className="lg:mb-8 md:mb-8 mb-4 lg:text-4xl md:text-4xl text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked <span className='text-red-600'>questions</span></h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                            {faqListOne.map((faq: any, index: number) => {
                                return (
                                    <div className="mb-10 border p-5 rounded-md bg-white">
                                        <h3 className="flex items-center mb-4 text-lg tracking-tighter font-bold text-gray-900 dark:text-white">
                                            {faq.qn}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {faq.ans}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            {faqListTwo.map((faq: any, index: number) => {
                                return (
                                    <div className="mb-10 border p-5 rounded-md bg-white">
                                        <h3 className="flex items-center mb-4 text-lg tracking-tighter font-bold text-gray-900 dark:text-white">
                                            {faq.qn}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {faq.ans}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YouTubeTags;