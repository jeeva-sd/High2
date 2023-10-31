'use client';

import { useState, useMemo, Fragment } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { AiOutlineBars } from 'react-icons/ai';
import Sideover from './Sideover';
import hightoolLogo from '~/assets/images/logo/hightool_192.png';
import { NavProps } from './types';

const navs: NavProps[] = [
    { title: 'Home', path: '/', selected: false },
    { title: 'Recorder', path: '/screen-recorder', selected: false },
    { title: 'Tag Generator', path: '/protags/youtube', selected: false }
];

const Header = () => {
    const { push } = useRouter();
    const pathname = usePathname();
    const [showNobileMenu, setShowMobileMenu] = useState<boolean>(false);

    const sideBarNavs = useMemo(() => {
        return navs.map((nav: NavProps) => {
            if (pathname === nav.path) {
                return { ...nav, selected: true };
            }

            return nav;
        });
    }, [pathname]);

    return (
        <Fragment>
            <nav style={{ backdropFilter: 'saturate(180%) blur(5px)' }} className='fixed flex justify-center z-10 bg-[hsla(0,0%,100%,.8)] dark:bg-gray-900 w-full shadow-sm shadow-[#eaeaea]'>
                <div className='flex flex-wrap items-center lg:w-10/12 md:w-10/12 w-full p-4'>
                    <div className='w-8/12'>
                        <button onClick={() => push('/')} className='flex items-center'>
                            <Image
                                width={192}
                                height={192}
                                src={hightoolLogo}
                                draggable={false}
                                className='h-8 w-8 mr-3'
                                alt='Hightool Logo' />
                            <span className='self-center text-2xl font-bold whitespace-nowrap dark:text-white tracking-tighter'>HighTool</span>
                        </button>
                    </div>

                    <div className='w-4/12 lg:flex md:flex hidden justify-end gap-5 text-[14px]'>
                        {sideBarNavs.map((nav: NavProps, index: number) => (
                            <button
                                key={index}
                                onClick={() => push(nav.path)}
                                className={nav.selected ? 'text-blue-600 font-medium tracking-tight' : 'tracking-tight text-[#666666]'}>
                                {nav.title}
                            </button>
                        ))}
                    </div>

                    <div className='lg:hidden md:hidden w-4/12 flex justify-end'>
                        <button
                            onClick={() => setShowMobileMenu((prevShowNobileMenu: boolean) => !prevShowNobileMenu)}
                            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
                            <span className='sr-only'>Open main menu</span>
                            <AiOutlineBars fontSize={25} />
                        </button>
                    </div>
                </div>
            </nav>

            <Sideover isOpen={showNobileMenu} setIsOpen={(e: boolean) => setShowMobileMenu(e)} />
        </Fragment>
    );
};

export default Header;