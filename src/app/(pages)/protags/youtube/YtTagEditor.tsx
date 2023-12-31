'use client';

import React, { useCallback, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { LuCopyPlus, LuCopyMinus, LuCopyCheck } from 'react-icons/lu';
import { MdClear } from 'react-icons/md';
import { services } from '~/services';
import PopOver from '~/widgets/PopOver';

const YtTagEditor = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRefSm = useRef<HTMLInputElement>(null);

    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

    const handleCopy = () => {
        const selectedTags: any = tags.filter((_tags: any, index: number) => selectedIndex.includes(index));
        navigator.clipboard.writeText(selectedTags);
        setIsCopied(true);
    };

    const handleSearch = async (e: any) => {
        e.preventDefault();
        const isInputValid = (inputRef.current?.value?.trim() || inputRefSm.current?.value?.trim()) !== '';

        if (isInputValid) {
            setLoading(true);

            const title = (inputRef.current?.value || inputRefSm.current?.value) || '';
            const { data }: any = await services.proTags.getYtTags({ title });
            const tags: string[] = data.data.slice(0, 20);

            if (Array.isArray(tags)) {
                setTags(tags);
                setSelectedIndex(() => tags.map((_tag: any, i: number) => i));
            }
            else setTags([]);

            setLoading(false);
        }
    };

    const handleSelect = useCallback((index: number) => {
        const elementIndex: number = selectedIndex.indexOf(index);

        if (elementIndex >= 0) return setSelectedIndex((prev: number[]) => prev.filter((_e: any, i: number) => i !== elementIndex));
        else setSelectedIndex((prev: any) => [...prev, index]);
    }, [selectedIndex]);

    const selectAll = useCallback(() => setSelectedIndex(() => tags.map((_tag: any, i: number) => i)), [tags]);

    const unSlectAll = useCallback(() => setSelectedIndex([]), []);

    const clearTags = useCallback(() => setTags([]), []);

    return (
        <>
            <section className="w-full relative justify-center lg:flex md:flex hidden">
                <form className='xl:w-6/12 lg:w-7/12 md:w-11/12 w-11/12' onSubmit={(e) => handleSearch(e)}>
                    <label htmlFor="large-device-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {loading ?
                                <span className="relative flex h-3 w-3 ml-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                                :
                                <CiSearch fontSize={25} className='w-5 h-5 text-gray-500 dark:text-gray-400 ml-1' />}
                        </div>

                        <input
                            type="search"
                            ref={inputRef}
                            id="large-device-search"
                            placeholder="Enter your video title or keyword to get started"
                            className="lg:block md:block hidden w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-gray-50 focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">
                            Search
                        </button>
                    </div>
                </form>
            </section>


            <section className="w-full flex justify-center lg:hidden md:hidden relative">
                <form className='lg:w-7/12 md:w-11/12 w-11/12' onSubmit={(e) => handleSearch(e)}>
                    <label htmlFor="small-device-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="lg:hidden md:hidden relative">
                        <div className="absolute top-4 left-0 flex items-center pl-3 pointer-events-none">

                            {loading ?
                                <span className="relative flex h-3 w-3 ml-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                </span>
                                :
                                <CiSearch fontSize={25} className='w-5 h-5 text-gray-500 dark:text-gray-400 ml-1' />}
                        </div>

                        <input
                            type="search"
                            ref={inputRefSm}
                            id="small-device-search"
                            placeholder="Enter your video title or keyword to get started"
                            className="block lg:hidden md:hidden w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-gray-50 focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                        <button
                            type="submit"
                            className="text-white w-full mt-3 bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">
                            Search
                        </button>
                    </div>

                </form>
            </section>

            <section className='w-full flex justify-center min-h-[500px]'>
                <div className='flex flex-wrap h-auto xl:w-6/12 lg:w-7/12 md:w-11/12 w-11/12'>
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 min-h-6/12">
                        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600 bg-gray-50 rounded-t-lg">
                            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                <div className="flex items-center space-x-1 sm:pr-4">
                                    <button onClick={() => selectAll()} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <LuCopyPlus className="w-5 h-5" title='Select All' />
                                        <span className="sr-only">Select All</span>
                                    </button>
                                    <button onClick={() => unSlectAll()} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <LuCopyMinus title='Unselect All' fontSize={23} />
                                        <span className="sr-only">Unselect All</span>
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                                    <button onClick={() => handleCopy()} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <LuCopyCheck className="w-5 h-5" title='Copy Selected Tags' />
                                        <span className="sr-only">Copy Tags</span>
                                    </button>
                                    <PopOver setShow={setIsCopied} show={isCopied} text={tags?.length > 0 ? 'Tags Copied!' : 'Tag not found'} />
                                </div>
                            </div>
                            <button onClick={() => clearTags()} type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <MdClear className="w-5 h-5" title='Clear Tags' />
                                <span className="sr-only">Clear Tags</span>
                            </button>
                            <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Show full screen
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>

                        <div className="px-4 py-5 rounded-b-lg dark:bg-gray-800 flex">
                            <label htmlFor="editor" className="sr-only">Keywords</label>
                            <div id="editor" className="flex flex-wrap items-center justify-center gap-2 py-5 w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
                                {tags.map((tag: string, index: number) => {
                                    return (
                                        <div key={index} onClick={() => handleSelect(index)} className='p-2 bg-white rounded-md select-none cursor-pointer shadow-md border border-gray-200 w-auto flex gap-2 items-center'>
                                            <input type='checkbox' className='h-4' onChange={() => () => handleSelect(index)} checked={selectedIndex.includes(index)} />
                                            <div className='text-base'>{tag}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default YtTagEditor;