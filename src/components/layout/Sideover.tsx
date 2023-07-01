'use client';

import { Fragment, memo, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { FaNewspaper } from 'react-icons/fa';
import { MdPrivacyTip } from 'react-icons/md';
import { BiCookie, BiHash } from 'react-icons/bi';
import { AiFillHome, AiFillTag, AiOutlineClose } from 'react-icons/ai';
import { MobileNavProps } from './types';

const SideOver = ({ isOpen, setIsOpen }: any) => {
    const { push } = useRouter();
    const pathname = usePathname();
    const open = useMemo(() => isOpen, [isOpen]);

    const navs: MobileNavProps[] = [
        { title: 'Home', selected: false, icon: <AiFillHome />, path: '/' },
        { title: 'ProTags', selected: false, icon: <BiHash />, path: '/protags' },
        { title: 'YouTube Tag Generator', selected: false, icon: <AiFillTag />, path: '/protags/youtube' },
        { title: 'Terms and Conditions', selected: false, icon: <FaNewspaper />, path: '/legal/terms' },
        { title: 'Privacy Policy', selected: false, icon: <MdPrivacyTip />, path: '/legal/privacy' },
        { title: 'Cookie Policy', selected: false, icon: <BiCookie />, path: '/legal/cookies' },
    ];

    const sideBarNavs = useMemo(() => {
        return navs.map((nav: MobileNavProps) => {
            if (pathname === nav.path) return { ...nav, selected: true };
            return nav;
        });
    }, [pathname]);

    return (
        <Fragment>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='relative z-50' onClose={setIsOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-in-out duration-500'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in-out duration-500'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-hidden'>
                        <div className='absolute inset-0 overflow-hidden'>
                            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='transform transition ease-in-out duration-500 sm:duration-700'
                                    enterFrom='translate-x-full'
                                    enterTo='translate-x-0'
                                    leave='transform transition ease-in-out duration-500 sm:duration-700'
                                    leaveFrom='translate-x-0'
                                    leaveTo='translate-x-full'
                                >
                                    <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                                        <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                                            <div className='px-4 sm:px-6 flex justify-between border-b pb-5'>
                                                <Dialog.Title className='text-lg font-bold'>HighTool</Dialog.Title>
                                                <Dialog.Title className='text-lg font-medium text-gray-900 cursor-pointer'
                                                    onClick={() => setIsOpen(false)}>
                                                    <AiOutlineClose />
                                                </Dialog.Title>
                                            </div>

                                            <div className='lg:hidden' id='mobile-menu'>
                                                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                                                    {sideBarNavs.map((nav: MobileNavProps, index) => {
                                                        return <span
                                                            key={index}
                                                            onClick={() => {
                                                                push(nav.path);
                                                                setIsOpen(false);
                                                            }}
                                                            className={`${nav.selected ? 'bg-gray-900 text-white' : 'text-gray-600'} ${index === 3 && 'border-t rounded-none hover:rounded-md'}  hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium cursor-pointer flex items-center`}
                                                        >
                                                            <span className='mx-1'>{nav.icon}</span>
                                                            <span className='mx-1'>{nav.title}</span>
                                                        </span>;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </Fragment>
    );
};

export default memo(SideOver);