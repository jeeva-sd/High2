
const tools = [
    {
        id: 1,
        title: 'Screen Recorder',
        href: '#',
        description:
            'Our free Screen Recorder tool lets you capture your screen activity in real-time. Whether you’re making a tutorial, recording gameplay, or presenting slides, it’s never been easier to record high-quality screen videos directly from your browser.',
        category: { title: 'Screen Recording', href: '#' },
    },
    {
        id: 2,
        title: 'Keyword Generator',
        href: '#',
        description:
            'Boost your website’s SEO performance with our Keyword Generator tool. Whether you\'re running a blog, an online store, or a YouTube channel, finding the right keywords is essential to rank higher in search results. Our tool helps you discover high-traffic, low-competition keywords tailored to your content.',
        category: { title: 'SEO', href: '#' },
    },
    {
        id: 3,
        title: 'Online Video Trimmer',
        href: '#',
        description:
            'Need to cut down your video quickly? Our Online Video Trimmer lets you trim any video file in just a few clicks. Whether you\'re creating content for social media, editing a presentation, or simply trimming a personal video, our tool is here to make it simple and efficient.',
        category: { title: 'Video Editing', href: '#' },
    },
];

export function WhatHightool() {
    return (
        <section className="bg-light py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">What is HIGHTOOL?</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Your all-in-one hub for online productivity tools. Whether you&#39;re trimming videos, generating SEO-friendly keywords, or recording your screen, we’ve got the tools you need to save time and maximize efficiency. No downloads, no hassle—just simple, fast, and effective tools at your fingertips!
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 dark:border-gray-700 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tools.map((tool) => (
                        <article key={tool.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <a
                                    href={tool.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                    {tool.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                                    <a href={tool.href}>
                                        <span className="absolute inset-0" />
                                        {tool.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{tool.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
