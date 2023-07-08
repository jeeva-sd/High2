'use client';

import { useRouter } from 'next/navigation';
import Wrapper from '../Wrapper';

const page = () => {
    const { push } = useRouter();

    return (
        <Wrapper>
            <div className="py-8 overflow-hidden">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
                    <p className="mb-4">Effective Date: 08 July 2023</p>
                    <p className="mb-4">
                        This Cookie Policy explains how Favinsta.com uses cookies and similar tracking technologies on our website. By accessing or using our website, you consent to the use of cookies as described in this policy.
                    </p>

                    <h3 className="text-xl font-bold mb-2">What are Cookies?</h3>
                    <p className="mb-4">
                        Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. These files enable the website to recognize your device and remember certain information about your preferences or past actions.
                    </p>

                    <h3 className="text-xl font-bold mb-2">Why Do We Use Cookies?</h3>
                    <p className="mb-4">
                        We use cookies for various purposes, including:
                    </p>

                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website. They enable you to navigate our site and use its features.
                        </li>
                        <li>
                            <strong>Analytical Cookies:</strong> We use these cookies to gather information about how visitors interact with our website, such as which pages are visited most frequently. This data helps us improve the user experience and optimize our website&apos;s performance.
                        </li>
                        <li>
                            <strong>Functionality Cookies:</strong> These cookies allow us to remember your preferences and provide personalized features when you return to our website. For example, they may remember your language preference or display settings.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> We may partner with third-party advertising networks that use cookies to deliver relevant advertisements to you based on your interests. These cookies collect information about your browsing activities on our website and other sites to provide you with targeted advertising.
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mb-2">Types of Cookies We Use</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Session Cookies:</strong> These cookies are temporary and are erased when you close your browser. They are essential for the proper functioning of certain features on our website.
                        </li>
                        <li>
                            <strong>Persistent Cookies:</strong> These cookies remain on your device even after you close your browser. They help us remember your preferences and provide a personalized experience during future visits.
                        </li>
                        <li>
                            <strong>Third-Party Cookies:</strong> We may allow third-party service providers to place cookies on our website to perform certain functions. These cookies are subject to the respective privacy policies of these third parties.
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mb-2">Managing and Controlling Cookies</h3>
                    <p className="mb-4">
                        You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may impact your experience on our website and limit certain features.
                    </p>
                    <p className="mb-4">
                        To manage cookies, you can:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            Adjust your browser settings to block or delete cookies.
                        </li>
                        <li>
                            Use browser extensions or plugins to control cookie behavior.
                        </li>
                        <li>
                            Opt-out of targeted advertising by visiting the Digital Advertising Alliance&apos;s opt-out page (<a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices</a>) or the Network Advertising Initiative&apos;s opt-out page (<a href="http://www.networkadvertising.org/choices" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/choices</a>).
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                    <p className="mb-4">
                        If you have any questions or concerns about our use of cookies or this Cookie Policy, <span onClick={() => push('/legal/contact-us')} className='text-indigo-600 underline cursor-pointer'>please contact us here.</span>
                    </p>

                    <h3 className="text-xl font-bold mb-2">Updates to this Cookie Policy</h3>
                    <p className="mb-4">
                        We may update this Cookie Policy from time to time to reflect changes in our cookie practices or legal obligations. We encourage you to review this page periodically for the latest information on our use of cookies.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default page;