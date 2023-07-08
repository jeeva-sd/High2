'use client';

import { useRouter } from 'next/navigation';
import React, { memo, useCallback, useRef, useState } from 'react';
import { services } from '~/services';

const NewsLetter = () => {
    const { push } = useRouter();
    const emailRef = useRef(null);
    const [subscribed, setSubscribed] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = useCallback(async (e: any) => {
        e.preventDefault();
        const emailInput: any = emailRef.current;
        const value = emailInput['emailInput'].value;
        const params = { email: value };

        const subscribe = await services.common.subscribeEmail(params);
        setMessage(subscribe.message);

        if (subscribe.code === 504) setSubscribed(true);
    }, [emailRef]);

    return (
        <section className='dark:bg-gray-900 w-full pb-24 px-5'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='mx-auto max-w-screen-md sm:text-center'>
                    <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white'>Sign up for our <span className='text-blue-600'>newsletter</span></h2>
                    <p className='mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl lg:text-lg dark:text-gray-400'>Stay up to date with the latest posts, announcements and exclusive discounts feel free to sign up with your email.</p>
                    <form ref={emailRef} onSubmit={(e: any) => handleSubmit(e)}>
                        <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
                            <div className='relative w-full'>
                                {subscribed && <div className='bg-sky-300 p-3 rounded-md text-white'>{message}</div>}
                                <label htmlFor='email' className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Email address</label>
                                {!subscribed && <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path></svg>
                                </div>}
                                {!subscribed && <input name='emailInput' className='block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border outline-none border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-blue-600 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500' placeholder='Enter your email' type='email' id='email' required={true} />}
                            </div>
                            <div>
                                {!subscribed && <button type='submit' className='disabled:bg-cyan-300  py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-600 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:sky-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Subscribe</button>}
                            </div>
                        </div>
                        <div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>We care about the protection of your data. <span className='font-medium text-cyan-600 cursor-pointer dark:text-primary-500 hover:underline' onClick={() => push('/legal/privacy')}>Read our Privacy Policy</span>.</div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default memo(NewsLetter);