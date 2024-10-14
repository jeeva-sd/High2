import { FaDiscord } from 'react-icons/fa';

const DiscardConnect = () => {
    return (
        <section className="relative bg-background">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="flex items-center justify-between">
                    <div className="max-w-screen-md lg:w-3/4 md:w-3/4 w-full">
                        <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            Let's find more that brings us together
                        </h2>
                        <p className="mb-8 text-lg leading-8 text-muted-foreground">
                            Join our community on Discord to stay connected with like-minded individuals. Whether you're seeking support, sharing ideas, or exploring new tools, our Discord server is the perfect place to engage and grow together.
                        </p>

                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 focus:ring-4 focus:ring-primary-300">
                                Connect now
                            </button>
                        </div>
                    </div>

                    <div className="w-1/4 lg:flex md:flex hidden justify-center">
                        <FaDiscord fontSize={180} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { DiscardConnect };
