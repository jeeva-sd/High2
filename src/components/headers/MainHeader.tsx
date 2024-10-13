'use client';

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FiSun } from 'react-icons/fi';
import { IoCut } from 'react-icons/io5';
import { MdOutlineTag } from 'react-icons/md';
import { AiOutlineBars } from 'react-icons/ai';
import { BsRecordCircle } from 'react-icons/bs';
import { FaRegMoon, FaLaptop } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerClose, DrawerTitle } from '~/components/ui/drawer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import hightoolLogo from '~/assets/images/logo/hightool_192.png';

const pages = [
    {
        id: 1,
        name: 'Video Trimmer',
        icon: <IoCut color='green' />,
        description: 'Cut and trim your videos with precision using our online video trimmer.',
        route: '/video-trimmer',
    },
    {
        id: 2,
        name: 'Tag Generator',
        icon: <MdOutlineTag color='blue' />,
        description: `The tag generator creates effective tags to increase your content's visibility.`,
        route: '/tag-generator',
    },
    {
        id: 3,
        name: 'Screen Recorder',
        icon: <BsRecordCircle color='red' />,
        description: 'Record your screen and audio instantly, no downloads required. Ideal for students, teachers, and businesses.',
        route: '/screen-recorder',
    },
];

const MainHeader = () => {
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <Fragment>
            <nav style={{ backdropFilter: 'saturate(180%) blur(5px)' }} className='fixed w-full bg-background shadow-sm shadow-border z-10'>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex h-16 items-center justify-between'>
                        {/* Logo */}
                        <div className='flex items-center cursor-pointer select-none' onClick={() => router.push('/')}>
                            <Image
                                width={192}
                                height={192}
                                src={hightoolLogo}
                                draggable={false}
                                className='h-7 w-7 mr-2'
                                alt='Hightool Logo'
                            />
                            <span className='text-xl font-bold whitespace-nowrap tracking-tighter text-foreground'>
                                Hightool
                            </span>
                        </div>

                        {/* Right Section (Menu + Dark Mode Toggle) */}
                        <div className='flex items-center space-x-4'>
                            {/* Menu Items */}
                            <div className='hidden sm:flex space-x-4'>
                                {pages.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.route}
                                        className={`${pathname === item.route
                                            ? 'bg-secondary text-primary font-semibold'
                                            : 'text-muted-foreground hover:bg-muted'}
                                            rounded-md px-3 py-1.5 text-sm font-medium`}
                                        style={{ height: '28px', display: 'flex', alignItems: 'center' }}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className='hidden sm:flex h-7 w-[1px] bg-border mx-4'></div>

                            {/* Dark Mode Toggle */}
                            <div className='hidden sm:flex items-center gap-5'>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant='ghost' size='icon'>
                                            <FiSun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                                            <FaRegMoon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end' className='bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-2'>
                                        <DropdownMenuItem
                                            onClick={() => setTheme('light')}
                                            className={`hover:bg-muted transition-colors duration-200 flex items-center gap-4 p-2 rounded-md ${theme === 'light' ? 'bg-primary text-primary-foreground' : ''}`}
                                        >
                                            <FiSun />
                                            <span>Light</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => setTheme('dark')}
                                            className={`hover:bg-muted transition-colors duration-200 flex items-center gap-4 p-2 rounded-md ${theme === 'dark' ? 'bg-primary text-primary-foreground' : ''}`}
                                        >
                                            <FaRegMoon />
                                            <span>Dark</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => setTheme('system')}
                                            className={`hover:bg-muted transition-colors duration-200 flex items-center gap-4 p-2 rounded-md ${theme === 'system' ? 'bg-primary text-primary-foreground' : ''}`}
                                        >
                                            <FaLaptop />
                                            <span>System</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className='lg:hidden md:hidden w-4/12 flex justify-end'>
                                <button
                                    className='inline-flex items-center p-2 text-muted-foreground rounded-lg hover:bg-muted focus:outline-none transition-colors duration-200'
                                    onClick={() => setIsDrawerOpen(true)}
                                >
                                    <AiOutlineBars fontSize={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Drawer for mobile */}
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Select a Tool</DrawerTitle>
                    </DrawerHeader>
                    <div className='p-4'>
                        {pages.map((page) => (
                            <Link
                                key={page.id}
                                href={page.route}
                                onClick={() => setIsDrawerOpen(false)}
                                className={`flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-muted transition-colors duration-200
                                ${pathname === page.route ? 'bg-primary text-primary-foreground hover:text-popover-foreground' : ''}`}
                            >
                                <div className='flex items-center justify-center text-xl'>{page.icon}</div>
                                <div>
                                    <span className='font-semibold'>{page.name}</span>
                                    <p className='text-sm text-muted-foreground'>
                                        {page.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant='outline' onClick={() => setIsDrawerOpen(false)}>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Fragment>
    );
};

export { MainHeader };
