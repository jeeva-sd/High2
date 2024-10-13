import React from 'react';
import { WhatHightool, WhyHightool } from '~/components';

export default function Home() {
    return (
        <div className="bg-background">
            {/* Full-Screen Header Section */}
            <header className="flex flex-col items-center justify-center min-h-[80vh]">
                <div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center h-full text-center transform -skew-y-3">
                    <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-tighter text-foreground mb-4">
                        <span className="relative inline-block">
                            <span className="absolute text-shadow-lg text-primary -translate-x-1 -translate-y-1">
                                HIGHTOOL.net
                            </span>
                            HIGHTOOL.net
                        </span>
                    </h1>
                    <span className="block text-3xl font-semibold text-success mt-2">
                        Online productivity tools
                    </span>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
                        No need to be a pro; our tools make it simple for everyone!
                    </p>
                </div>
            </header>

            <WhatHightool />

            {/* Why Choose HIGHTOOL Section */}
            <section className="flex flex-col items-center justify-center bg-background p-4">
                <div className="max-w-7xl mx-auto text-center py-8">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose HIGHTOOL?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Our tools are designed with simplicity and speed in mind. You don&#39;t need to be a tech expert to get the most out of our features. Explore how we empower you to get more done in less time:
                    </p>
                </div>
            </section>

            <WhyHightool />
        </div>
    );
}
