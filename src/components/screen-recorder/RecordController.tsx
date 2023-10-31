'use client';

import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

export default function RecordController({ options, onChange }: any) {
    const [selected, setSelected] = useState(options[0]);

    useEffect(() => {
        onChange(selected);
    }, [selected, onChange]);

    return (
        <div className="flex w-full flex-wrap gap-2 justify-center">
            <RadioGroup value={selected} onChange={setSelected} className='w-full flex gap-3'>
                {options.map((plan: any) => (
                    <RadioGroup.Option
                        key={plan.value}
                        value={plan}
                        className={({ active, checked }) => {
                            return (`
                                     ${options?.length === 1 ? 'w-full' : 'w-6/12'}
                                     flex justify-center cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none
                                     ${active && 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'}
                                     ${checked ? 'bg-blue-600 text-black' : 'bg-white'}
                                `);
                        }}
                    >
                        {({ checked }) => (
                            <>
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                                            >
                                                {plan.label}
                                            </RadioGroup.Label>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="shrink-0 text-white">
                                            <CheckIcon className="h-6 w-6" />
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
        </div>
    );
}

function CheckIcon(props: any) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
