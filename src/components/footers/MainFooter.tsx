'use client';

import { useRouter } from 'next/navigation';

const ManiFooter = () => {
    const { push } = useRouter();

    return (
        <footer className='relative bottom-0 h-40 w-full bg-background border-t border-border flex items-center'>
            <div className='absolute inset-x-0 h-full flex flex-wrap justify-center items-center mt-2'>
                <div className='text-center lg:w-6/12 w-full flex justify-center items-center flex-wrap'>
                    <div className='font-semibold w-full tracking-wide text-foreground'>Hightool.net</div>
                    <div className='text-muted-foreground w-full text-[15px] my-2'>© 2023 Hightool. All rights reserved.</div>

                    <div className='flex justify-center items-center gap-5 lg:w-auto md:w-full w-full flex-wrap'>
                        <div
                            className='cursor-pointer text-[15px] text-muted-foreground select-none'
                            onClick={() => push('/legal/privacy')}
                        >
                            Privacy
                        </div>

                        <div className='font-thin opacity-50'> | </div>

                        <div
                            className='cursor-pointer text-[15px] text-muted-foreground select-none'
                            onClick={() => push('/legal/terms')}
                        >
                            Terms
                        </div>

                        <div className='font-thin opacity-50'> | </div>

                        <div
                            className='cursor-pointer text-[15px] text-muted-foreground select-none'
                            onClick={() => push('/legal/cookies')}
                        >
                            Cookies
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { ManiFooter };



