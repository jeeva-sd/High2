
const tools = [
    {
        id: 1,
        title: 'Screen Recorder',
        href: '#',
        description:
            'This tool lets you capture your screen activity in real-time. Whether you’re making a tutorial, recording gameplay, or presenting slides, it’s never been easier to record high-quality screen videos directly from your browser.',
        category: { title: 'Screen Recording', href: '#' },
    },
    {
        id: 2,
        title: 'Online Video Trimmer',
        href: '#',
        description:
            'This tool lets you trim any video file in just a few clicks. Whether you\'re creating content for social media, editing a presentation, or simply trimming a personal video, our tool is here to make it simple and efficient.',
        category: { title: 'Video Editing', href: '#' },
    },
    {
        id: 3,
        title: 'Keyword Generator',
        href: '#',
        description:
            'Boost your website’s or Youtube’s SEO performance with our Keyword Generator tool. Whether you\'re running a blog, an online store, or a YouTube channel, finding the right keywords is essential to rank higher in search results. Our tool helps you discover high-traffic, low-competition keywords tailored to your content.',
        category: { title: 'SEO', href: '#' },
    },
];

export const WhatsInHightool = () => {
    return (
        <section className="bg-light py-20 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">What&#39;s in HIGHTOOL?</h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        Your all-in-one hub for online productivity tools. Whether you&#39;re trimming videos, generating SEO-friendly keywords, or recording your screen, we’ve got the tools you need to save time and maximize efficiency. No downloads, no hassle—just simple, fast, and effective tools at your fingertips!
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tools.map((tool, index) => (
                        <article key={tool.id} className={`flex flex-col items-start justify-between ${index === 0 ? "lg:mt:0 md:mt-0 mt-10" : ""}`}>
                            <div className="flex items-center gap-x-4 text-xs">
                                <a
                                    href={tool.category.href}
                                    className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground ">{tool.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
