import Wrapper from '../Wrapper';

const page = () => {
    return (
        <Wrapper>
            <div className='bg-white py-8 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <h1 className='text-3xl leading-9 font-extrabold text-gray-900'>
                        Terms of Service
                    </h1>
                    <p className='mt-6 text-lg leading-7 text-gray-500'>
                        By accessing and using HighTool.net, you agree to comply with these Terms of Service. If you do not agree with any of the terms mentioned below, please leave our website.
                    </p>

                    <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
                        Intellectual Property
                    </h2>
                    <p className='mt-4 text-lg leading-7 text-gray-500'>
                        All contents including text, images, graphics, logos, and audio or video materials found on this website are the intellectual property of HighTool.net and protected by applicable copyright laws. You may not reproduce, distribute, or modify any content without our prior written consent.
                    </p>

                    <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
                        User Conduct
                    </h2>
                    <div className='mt-4 text-lg leading-7 text-gray-500'>
                        When using HighTool.net, you agree to abide by the following guidelines:
                        <ul className='list-disc list-inside'>
                            <li>Do not engage in any illegal or unauthorized activities.</li>
                            <li>Do not disrupt or interfere with the functioning of the website.</li>
                            <li>Do not attempt to get any unauthorized access to any part of the website.</li>
                            <li>Do not post or share any content in HighTool.net that is offensive, defamatory, or violates the rights of others.</li>
                            <li>Do not use the website to promote or distribute spam, viruses, or any malicious software.</li>
                        </ul>
                    </div>

                    <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
                        Limitation of Liability
                    </h2>
                    <p className='mt-4 text-lg leading-7 text-gray-500'>
                        HighTool.net and its owners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use the website. We do not guarantee the accuracy, completeness, or timeliness of the content provided on the website.
                    </p>

                    <h2 className='text-2xl leading-8 font-bold text-gray-900 mt-8'>
                        Changes to the Terms
                    </h2>
                    <p className='mt-4 text-lg leading-7 text-gray-500'>
                        We reserve the right to modify or update these Terms of Service at any time without prior notice. It is your responsibility to review these terms periodically. Your continued use of the website after any modifications signifies your acceptance of the revised terms.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default page;