'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';

function PopoverComponent({ show, setShow, text }: any) {

    useEffect(() => {
        if (show) {
            const timeoutId = setTimeout(() => {
                setShow(false);
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [show, setShow]);

    return (
        <Popover className={'relative'}>
            <>
                <Transition
                    as={Fragment}
                    show={show}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Panel
                        static
                    // className="fixed inset-0 flex items-center justify-center"
                    >
                        <div className="bg-white border p-2 rounded shadow-lg text-sm font-mono">
                            <p>{text}</p>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        </Popover>
    );
}

export default PopoverComponent;
