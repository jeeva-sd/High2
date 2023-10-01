'use client';

import { useRouter } from 'next/navigation';

const Footer = () => {
    const { push } = useRouter();

    return (
        <footer className='relative bottom-0 h-40 w-full bg-white border-t flex items-center'>
            <div className='absolute inset-x-0 h-full flex flex-wrap justify-center items-center mt-2'>
                <div className='text-center lg:w-6/12 w-full flex justify-center items-center flex-wrap'>
                    <div className='font-semibold w-full tracking-wide'>HighTool.net</div>
                    <div className='text-gray-600 w-full text-[15px] my-2'>© 2023 Hightool. All rights reserved.</div>

                    <div className='flex justify-center items-center gap-5 lg:w-auto md:w-full w-full flex-wrap'>
                        <div
                            className='cursor-pointer text-[15px] text-gray-600 hover:text-blue-600 select-none'
                            onClick={() => push('/legal/privacy')}
                        >
              Privacy
                        </div>

                        <div className='font-thin opacity-50'> | </div>

                        <div
                            className=' cursor-pointer text-[15px] text-gray-600  hover:text-blue-600 select-none'
                            onClick={() => push('/legal/terms')}
                        >
              Terms
                        </div>

                        <div className='font-thin opacity-50'> | </div>


                        <div
                            className=' cursor-pointer text-[15px] text-gray-600  hover:text-blue-600 select-none'
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

export default Footer;