import React from 'react';
import { WhatsInHightool, Introduction } from '~/components';

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
        </div>
    );
}
