import Image from "next/image";
import mobilePreview from '../../assets/images/home/mobilePreview.png';
import addFile from '../../assets/images/home/fileUploads.svg';
import { MdMoneyOffCsred } from "react-icons/md";
import { GiExtraTime } from "react-icons/gi";

export const Introduction = () => {
    return (
        <section className="my-20 py-20">
            <div className="flex flex-col items-center justify-center bg-background p-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Introducing HIGHTOOL</h2>
                    <p className="text-lg leading-8 sm:text-xl text-muted-foreground">
                        Hightool is built for simplicity and speed. You don’t need to be a tech expert to maximize its features. Discover how we help you accomplish more in less time:
                    </p>
                </div>
            </div>
            <div className="bg-background mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-4 sm:mt-10 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-card lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                                    Mobile friendly
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-muted-foreground max-lg:text-center">
                                    Optimized for seamless experiences on any device. Access and use our tools easily on smartphones and tablets.
                                </p>
                            </div>

                            <div className="relative min-h-[25rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-background shadow-2xl shadow-slate-500">
                                    <Image
                                        width={200}
                                        height={200}
                                        className="size-full object-cover object-top"
                                        src={mobilePreview}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border lg:rounded-l-[2rem]"></div>
                    </div>

                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">
                                    Free to use
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-muted-foreground max-lg:text-center">
                                    Get instant access to the tools right from your browser—no installations, downloads, or complex setups required. Our tools are completely free to use, providing you with top-tier functionality at no cost.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <MdMoneyOffCsred fontSize={80} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border max-lg:rounded-t-[2rem]"></div>
                    </div>

                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-card"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-primary max-lg:text-center">No Sign-up Required</p>
                                <p className="mt-2 max-w-lg text-sm text-muted-foreground max-lg:text-center">
                                    Get started instantly with no barriers—use our tools right away without the need to sign up or create an account. Enjoy hassle-free access to all features with just a click.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <GiExtraTime fontSize={80} />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border"></div>
                    </div>

                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-primary max-lg:text-center">
                                    Secure & Private
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-muted-foreground max-lg:text-center">
                                    We go the extra mile to protect your files and data, ensuring that everything you upload remains safe and confidential. There’s no tracking, no storing of your personal information, and you have full control over your data at all times.
                                </p>
                            </div>
                            <div className="relative min-h-[25rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-background ">

                                    <div className="px-6 pb-14 pt-6">
                                        <Image
                                            width={200}
                                            height={200}
                                            draggable={false}
                                            className="size-full object-cover object-top drop-shadow-xl"
                                            src={addFile}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-border max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

