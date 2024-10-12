'use client';

import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import hightoolLogo from '~/assets/images/logo/hightool_192.png';
import { BsRecordCircle } from 'react-icons/bs';
import { MdOutlineTag } from 'react-icons/md';
import { IoCut } from 'react-icons/io5';
import { FiSun } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerClose, DrawerTitle } from '~/components/ui/drawer'; // Adjust the path as per your setup

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '~/components/ui/navigation-menu';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import { useTheme } from "next-themes";
import { FaRegMoon, FaLaptop } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const pages = [
    {
        id: 1,
        name: 'Video Trimmer',
        icon: <IoCut color='green' />,
        description: 'Cut and trim your videos with precision using our online video trimmer.',
    },
    {
        id: 2,
        name: 'Tag Generator',
        icon: <MdOutlineTag color='blue' />,
        description: `The tag generator creates effective tags to increase your content's visibility.`,
    },
    {
        id: 3,
        name: 'Screen Recorder',
        icon: <BsRecordCircle color='red' />,
        description: 'Record your screen and audio instantly, no downloads required. Ideal for students, teachers, and businesses.',
    },
];

const MainHeader = () => {
    const [selectedPage, setSelectedPerson] = useState(pages[0]);
    const { theme, setTheme } = useTheme();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <Fragment>
            <nav style={{ backdropFilter: 'saturate(180%) blur(5px)' }}
                className='fixed flex justify-center bg-background w-full shadow-sm shadow-border z-10'>
                <div className='flex flex-wrap items-center lg:w-10/12 md:w-10/12 w-full p-4'>
                    <div className='w-8/12 flex items-center'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className='flex mr-2'>
                                    <BreadcrumbLink href="/" className='flex'>
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
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className='hidden md:flex lg:flex' />
                                <BreadcrumbItem className='hidden md:flex lg:flex'>
                                    <BreadcrumbLink href="/components">
                                        <NavigationMenu>
                                            <NavigationMenuList>
                                                <NavigationMenuItem>
                                                    <NavigationMenuTrigger className="flex items-center text-primary hover:bg-primary-foreground transition-colors duration-200">
                                                        <span>{selectedPage.name}</span>
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent>
                                                        <div className="p-4 grid gap-4 bg-popover border border-border rounded-md shadow-lg text-popover-foreground" style={{ width: '350px' }}>
                                                            {pages.map((page) => (
                                                                <div
                                                                    key={page.id}
                                                                    onClick={() => setSelectedPerson(page)}
                                                                    className={`flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-muted transition-colors duration-200
                                                                    ${selectedPage.id === page.id ? 'bg-primary text-primary-foreground hover:text-popover-foreground' : ''}`}
                                                                >
                                                                    <div className="flex items-center justify-center text-xl">{page.icon}</div>
                                                                    <div>
                                                                        <span className="font-semibold">{page.name}</span>
                                                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                                                            {page.description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </NavigationMenuContent>
                                                </NavigationMenuItem>
                                            </NavigationMenuList>
                                        </NavigationMenu>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className='w-4/12 lg:flex md:flex hidden justify-end gap-5 text-[14px]'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className='bg-popover text-popover-foreground border border-border rounded-md shadow-lg p-2'>
                                <DropdownMenuItem
                                    onClick={() => setTheme("light")}
                                    className={`hover:bg-muted transition-colors duration-200 flex items-center gap-4 p-2 rounded-md ${theme === "light" ? "bg-primary text-primary-foreground" : ""
                                        }`}
                                >
                                    <FiSun className={`text-primary ${theme === "light" ? "text-primary-foreground" : ""}`} />
                                    <span>Light</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setTheme("dark")}
                                    className={`hover:bg-muted transition-colors duration-200 flex items-center gap-4 p-2 rounded-md ${theme === "dark" ? "bg-primary text-primary-foreground" : ""
                                        }`}
                                >
                                    <FaRegMoon className={`text-primary ${theme === "dark" ? "text-primary-foreground" : ""}`} />
                                    <span>Dark</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setTheme("system")}
                                    className={`hover:bg-muted transition-colors duration-200 flex items-center gap-4 p-2 rounded-md ${theme === "system" ? "bg-primary text-primary-foreground" : ""
                                        }`}
                                >
                                    <FaLaptop className={`text-primary ${theme === "system" ? "text-primary-foreground" : ""}`} />
                                    <span>System</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden md:hidden w-4/12 flex justify-end'>
                        <button
                            className='inline-flex items-center p-2 ml-1 text-muted-foreground rounded-lg hover:bg-muted focus:outline-none transition-colors duration-200'
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <AiOutlineBars fontSize={25} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Drawer for mobile */}
            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Select a Tool</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4">
                        {pages.map((page) => (
                            <div
                                key={page.id}
                                onClick={() => {
                                    setSelectedPerson(page);
                                    setIsDrawerOpen(false);
                                }}
                                className={`flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-muted transition-colors duration-200
                                ${selectedPage.id === page.id ? 'bg-primary text-primary-foreground hover:text-popover-foreground' : ''}`}
                            >
                                <div className="flex items-center justify-center text-xl">{page.icon}</div>
                                <div>
                                    <span className="font-semibold">{page.name}</span>
                                    <p className="text-sm text-muted-foreground">
                                        {page.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>Close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Fragment>
    );
};

export { MainHeader };
