import React from 'react';
import { WhatsInHightool, Introduction, DiscardConnect } from '~/components';

export default function Home() {
    return (
        <main className="bg-background">
            <section className="flex flex-col items-center justify-center min-h-[80vh]">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center h-full transform -skew-y-3">
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-foreground mb-4">
                        <span className="relative inline-block">
                            <span className="absolute lg:flex md:flex hidden text-shadow-lg text-primary -translate-x-1 -translate-y-1">
                                HIGHTOOL.net
                            </span>
                            <span className='lg:text-muted-foreground/40 mg:text-muted-foreground/40 text-primary'>HIGHTOOL.net</span>
                        </span>
                    </h1>
                    <span className="block text-2xl sm:text-3xl font-semibold text-success mt-2">
                        Online multimedia productivity tools
                    </span>
                    <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
                        Edit, Create, Share in Seconds!
                    </p>
                </div>
            </section>

            <Introduction />
            <WhatsInHightool />
            <DiscardConnect />
        </main>
    );
}
