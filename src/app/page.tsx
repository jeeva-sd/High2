import React from 'react';
import { WhatsInHightool, Introduction } from '~/components';
import { FaDiscord } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-background">
            <header className="flex flex-col items-center justify-center min-h-[80vh] px-4">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center h-full transform -skew-y-3">
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-foreground mb-4">
                        <span className="relative inline-block">
                            <span className="absolute text-shadow-lg text-primary -translate-x-1 -translate-y-1">
                                HIGHTOOL.net
                            </span>
                            HIGHTOOL.net
                        </span>
                    </h1>
                    <span className="block text-2xl sm:text-3xl font-semibold text-success mt-2">
                        Online productivity tools
                    </span>
                    <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
                        No need to be a pro; our tools make it simple for everyone!
                    </p>
                </div>
            </header>

            <Introduction />
            <WhatsInHightool />

            <section className="relative bg-background">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="flex items-center justify-between">
                        <div className="max-w-screen-md lg:w-3/4 md:w-3/4 w-full">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground">
                                Let's find more that brings us together.
                            </h2>
                            <p className="mb-8 font-light text-muted-foreground sm:text-xl">
                                Join our community on Discord to stay connected with like-minded individuals. Whether you're seeking support, sharing ideas, or exploring new tools, our Discord server is the perfect place to engage and grow together.
                            </p>

                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <button className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary-300">
                                    Get started
                                </button>
                            </div>
                        </div>

                        <div className="w-1/4 lg:flex md:flex hidden justify-center">
                            <FaDiscord fontSize={180} />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
