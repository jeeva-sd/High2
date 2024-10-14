import { FaDiscord } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";

const DiscardConnect = () => {
    return (
        <section className="relative flex items-center justify-between bg-background my-20 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md lg:w-3/4 md:w-3/4 w-full">
                <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    Let's find more that brings us together
                </h2>
                <p className="text-lg leading-8 text-muted-foreground">
                    Join our community on Discord to stay connected with like-minded individuals. Whether you're seeking support, sharing ideas, or exploring new tools, our Discord server is the perfect place to engage and grow together.
                </p>

                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button className="flex text-sm gap-2 items-center py-2 font-semibold  text-center text-primary hover:text-primary/70 hover:underline">
                        Connect now
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div className="w-1/4 lg:flex md:flex hidden justify-center">
                <FaDiscord fontSize={180} />
            </div>
        </section>
    );
};

export { DiscardConnect };
