import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const tools = [
    {
        id: 1,
        title: 'Screen Recorder',
        href: '/video/recorder',
        description:
            'This tool lets you capture your screen activity in real-time. Whether you’re making a tutorial, recording gameplay, or presenting slides, it’s never been easier to record high-quality screen videos directly from your browser.',
        category: { title: 'Screen Recording' },
    },
    {
        id: 2,
        title: 'Online Video Trimmer',
        href: '/video/trimmer', // Update with actual route
        description:
            'This tool lets you trim any video file in just a few clicks. Whether you\'re creating content for social media, editing a presentation, or simply trimming a personal video, our tool is here to make it simple and efficient.',
        category: { title: 'Video Editing' },
    },
    {
        id: 3,
        title: 'Keyword Generator',
        href: '/seo/keyword-generator', // Update with actual route
        description:
            'Boost your website’s or Youtube’s SEO performance with our Keyword Generator tool. Whether you\'re running a blog, an online store, or a YouTube channel, finding the right keywords is essential to rank higher in search results. Our tool helps you discover high-traffic, low-competition keywords tailored to your content.',
        category: { title: 'SEO' },
    },
];

export const WhatsInHightool = () => {
    return (
        <section className="bg-background my-20 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        What's in HIGHTOOL?
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground">
                        Your all-in-one hub for online productivity tools. Whether you’re trimming videos, generating SEO-friendly keywords, or recording your screen, we’ve got the tools you need to save time and maximize efficiency.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-border sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tools.map((tool, index) => (
                        <article key={tool.id} className={`flex flex-col items-start justify-between ${index === 0 ? "lg:mt:0 md:mt-0 mt-10" : ""}`}>
                            <div className="flex items-center gap-x-4 text-xs">
                                <span className="relative rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground">
                                    {tool.category.title}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground">
                                    <span className="absolute inset-0" />
                                    {tool.title}
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                    {tool.description}
                                </p>
                            </div>
                            <Link href={tool.href} className="flex text-sm gap-2 items-center py-2 font-mono text-center text-primary hover:underline hover:text-primary/80">
                                Get started
                                <FaArrowRightLong />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
