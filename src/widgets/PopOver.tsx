'use client';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect } from 'react';

function PopOver({ show, setShow, text }: any) {

    useEffect(() => {
        if (show) {
            const timeoutId = setTimeout(() => {
                setShow(false);
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [show, setShow]);

    return (
        <Popover>
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
                    <Popover.Panel>
                        <div className="bg-white border p-2 rounded shadow-lg text-sm font-mono">
                            <p>{text}</p>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        </Popover>
    );
}

export default PopOver;
