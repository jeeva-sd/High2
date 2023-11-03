'use client';

import React, { useState } from 'react';
import { faqAccordionItems } from './Content';

interface AccordionItemProps {
    id: string;
    title: string;
    content: string;
    isActive: boolean;
    toggleAccordion: () => void;
}

const Accordion: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeAccordion === index) setActiveAccordion(null);
        else setActiveAccordion(index);
    };

    return (
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
            <div className="mx-auto lg:text-center">
                <h2 className="mt-2 font-bold tracking-tight text-gray-900 md:text-4xl lg:text-4xl text-2xl lg:text-center md:text-center text-start">
                    <span className='text-red-500'>FAQ's</span> about Hightool Screen Recorder
                </h2>
                <p className="mt-4 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Here are some of the most frequently asked questions about Hightool Screen Recorder
                </p>
            </div>
            <div id="accordion-collapse"
                data-accordion="collapse"
                className='mx-auto lg:text-center bg-white rounded-md p-2 border'
            >
                {faqAccordionItems.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        isActive={activeAccordion === index}
                        toggleAccordion={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content, isActive, toggleAccordion }) => {
    return (
        <h2 id={id}>
            <button
                type="button"
                data-accordion-target={id}
                aria-expanded={isActive}
                aria-controls={id}
                onClick={toggleAccordion}

                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 
                border border-b-0 border-gray-200 rounded-t-xl 
                focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 
                dark:text-gray-400 hover:bg-gray-100 dark:hover-bg-gray-800`}
            >
                <span>{title}</span>
                <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${isActive ? '180' : '0'} shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
            </button>

            {isActive && (
                <div
                    id={id}
                    aria-labelledby={id}
                    className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-gray-50 shadow-inner w-auto">

                    <p
                        className="mb-2 text-gray-500 dark:text-gray-400">
                        {content}
                    </p>

                </div>
            )}
        </h2>
    );
};

export default Accordion;
