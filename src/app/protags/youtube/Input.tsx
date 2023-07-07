'use client';

import React, { useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { HiFolderRemove } from 'react-icons/hi';
import { BiCopyAlt, BiSolidSelectMultiple } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { services } from '~/services';

const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

    const handleCopy = () => {
        const selectedTags: any = tags.filter((_tags: any, index: number) => selectedIndex.includes(index));
        navigator.clipboard.writeText(selectedTags);
    };

    const handleSearch = async (e: any) => {
        e.preventDefault();
        if (!inputRef.current || inputRef.current.value.trim().length === 0) return;
        setLoading(true);

        const title = inputRef.current.value;
        const { data }: any = await services.proTags.getYtTags({ title });

        if (Array.isArray(data)) {
            setTags(data as any);
            setSelectedIndex([]);
        }
        else setTags([]);

        setSelectedIndex([]);
        setLoading(false);

    };

    const handleSelect = (index: number) => {
        const elementIndex: number = selectedIndex.indexOf(index);

        if (elementIndex >= 0) return setSelectedIndex((prev: number[]) => prev.filter((_e: any, i: number) => i !== elementIndex));
        else setSelectedIndex((prev: any) => [...prev, index]);
    }

    const selectAll = () => {
        setSelectedIndex(() => tags.map((_tag: any, i: number) => i))
    }

    const clearAll = () => {
        setSelectedIndex([])
    }

    return (
        <>
            <section className='w-full flex justify-center'>
                <form className='lg:w-6/12 md:w-8/12 w-11/12' onSubmit={(e) => handleSearch(e)}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
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

                        <input type="search" id="default-search" ref={inputRef} className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-gray-50 focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here" required />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">
                            Search
                        </button>
                    </div>
                </form>
            </section>

            <section className='w-full flex justify-center'>
                <div className='flex flex-wrap min-h-[400px] h-auto lg:w-6/12 md:w-8/12 w-11/12'>
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 min-h-6/12">
                        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                <div className="flex items-center space-x-1 sm:pr-4">
                                    <button onClick={() => selectAll()} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <BiSolidSelectMultiple className="w-5 h-5" title='Select All' />
                                        <span className="sr-only">Select All</span>
                                    </button>
                                    <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <HiFolderRemove title='Unselect All' fontSize={23} />
                                        <span className="sr-only">Embed map</span>
                                    </button>
                                </div>
                                <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                                    <button onClick={() => handleCopy()} type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <BiCopyAlt className="w-5 h-5" title='Copy Selected Tags' />
                                        <span className="sr-only">Add list</span>
                                    </button>
                                </div>
                            </div>
                            <button onClick={() => clearAll()} type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <MdClear className="w-5 h-5" title='Clear Tags' />
                                <span className="sr-only">Copy</span>
                            </button>
                            <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Show full screen
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>

                        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800 flex min-h-6/12">
                            <label htmlFor="editor" className="sr-only">Publish post</label>
                            <div id="editor" className="flex flex-wrap items-center justify-center gap-2 w-full min-h-6/12 px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
                                {tags.map((tag: string, index: number) => {
                                    return (
                                        <div key={index} onClick={() => handleSelect(index)} className='p-2 bg-white rounded-md select-none cursor-pointer shadow-md border border-gray-200 w-auto flex gap-2 items-center'>
                                            <input type='checkbox' className='h-4' checked={selectedIndex.includes(index)} />
                                            <div className='text-base'>{tag}</div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Input