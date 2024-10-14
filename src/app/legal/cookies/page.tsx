import { Metadata } from 'next';
import Wrapper from '../Wrapper';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.hightool.net/legal/cookies'
    },
    title: 'Cookie Policy - HighTool.net',
    description: 'Cookie policy page for hightool',
    keywords: 'Cookie policy, Hightool, protags, cookies',
    applicationName: 'HighTool',
    openGraph: {
        type: 'website',
        siteName: 'hightool.net',
        title: 'Cookie Policy - HighTool.net',
        images: '/fav/maskable_icon_x512.png',
        url: 'https://www.hightool.net/legal/cookies',
        description: 'Cookie policy page for hightool',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cookie Policy - HighTool.net',
        images: '/fav/maskable_icon_x512.png',
        site: 'https://www.hightool.net/legal/cookies',
        description: 'Cookie policy page for hightool',
    },
    appleWebApp: {
        capable: true,
        title: 'Cookie Policy - HighTool.net',
        statusBarStyle: 'black',
        startupImage: {
            url: '/fav/maskable_icon_x512.png',
        },
    }
};

const page = () => {
    return (
        <Wrapper>
            <div className="py-8 overflow-hidden bg-background">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">Cookie Policy</h2>
                    <p className="mb-4 text-muted-foreground">Effective Date: 08 July 2023</p>
                    <p className="mb-4 text-muted-foreground">
                        This Cookie Policy explains how HighTool.net uses cookies and similar tracking technologies on our website. By accessing or using our website, you consent to the use of cookies as described in this policy.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-foreground">What are Cookies?</h3>
                    <p className="mb-4 text-muted-foreground">
                        Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. These files enable the website to recognize your device and remember certain information about your preferences or past actions.
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-foreground">Why Do We Use Cookies?</h3>
                    <p className="mb-4 text-muted-foreground">We use cookies for various purposes, including:</p>

                    <ul className="list-disc list-inside mb-4 text-muted-foreground">
                        <li>
                            <strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website. They enable you to navigate our site and use its features.
                        </li>
                        <li>
                            <strong>Analytical Cookies:</strong> We use these cookies to gather information about how visitors interact with our website, such as which pages are visited most frequently. This data helps us improve the user experience and optimize our website's performance.
                        </li>
                        <li>
                            <strong>Functionality Cookies:</strong> These cookies allow us to remember your preferences and provide personalized features when you return to our website. For example, they may remember your language preference or display settings.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> We may partner with third-party advertising networks that use cookies to deliver relevant advertisements to you based on your interests. These cookies collect information about your browsing activities on our website and other sites to provide you with targeted advertising.
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mb-2 text-foreground">Types of Cookies We Use</h3>
                    <ul className="list-disc list-inside mb-4 text-muted-foreground">
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

                    <h3 className="text-xl font-bold mb-2 text-foreground">Managing and Controlling Cookies</h3>
                    <p className="mb-4 text-muted-foreground">
                        You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may impact your experience on our website and limit certain features.
                    </p>
                    <p className="mb-4 text-muted-foreground">To manage cookies, you can:</p>
                    <ul className="list-disc list-inside mb-4 text-muted-foreground">
                        <li>Adjust your browser settings to block or delete cookies.</li>
                        <li>Use browser extensions or plugins to control cookie behavior.</li>
                        <li>
                            Opt-out of targeted advertising by visiting the Digital Advertising Alliance's opt-out page (
                            <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">http://www.aboutads.info/choices</a>
                            ) or the Network Advertising Initiative's opt-out page (
                            <a href="http://www.networkadvertising.org/choices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">http://www.networkadvertising.org/choices</a>
                            ).
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mb-2 text-foreground">Contact Us</h3>
                    <p className="mb-4 text-muted-foreground">
                        If you have any questions or concerns about our use of cookies or this Cookie Policy, please email us at <span className='text-lg font-bold'>styls360@gmail.com</span>
                    </p>

                    <h3 className="text-xl font-bold mb-2 text-foreground">Updates to this Cookie Policy</h3>
                    <p className="mb-4 text-muted-foreground">
                        We may update this Cookie Policy from time to time to reflect changes in our cookie practices or legal obligations. We encourage you to review this page periodically for the latest information on our use of cookies.
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default page;
