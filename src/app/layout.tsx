import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Header from '~/components/layout/Header';
import 'tailwindcss/tailwind.css';
import './global.css';

const Footer = dynamic(() => import('~/components/layout/Footer'), { ssr: false });
const NewsLetter = dynamic(() => import('~/widgets'), { ssr: false });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    viewport: {
        initialScale: 1,
        width: 'device-width'
    },
    themeColor: '#000000',
    icons: [
        {
            url: '/fav/favicon-32x32.png',
            type: 'image/png',
            sizes: '32x32',
            fetchPriority: 'auto',
        },
        {
            url: '/fav/favicon-16x16.png',
            type: 'image/png',
            sizes: '16x16',
            fetchPriority: 'auto',
        },
        {
            url: '/fav/maskable_icon_x512.png',
            type: 'image/png',
            sizes: '512x512',
            fetchPriority: 'auto',
        }
    ],
    manifest: '/manifest.json',
    applicationName: 'HighTool',
    verification: {
        other: {
            ['google-site-verification']: 'vH97xdO0p3T4lidmLNaW6w05iWQKG9mqo2ZjUc7Sd0w'
        }
    },
    appleWebApp: {
        capable: true,
        title: 'hightool.net',
        statusBarStyle: 'black',
        startupImage: {
            url: '/fav/maskable_icon_x512.png',
        },
    }
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en" style={{ overflowX: 'hidden' }}>
            <body className={`${inter.className}`}>
                <Header />

                <div className='lg:pt-20 md:pt-24 pt-28 bg-[url("/heroPattern.svg")]'>
                    {children}
                    <section className='mt-16'>
                        <NewsLetter />
                    </section>
                </div>

                <Footer />
            </body>
        </html>
    );
}