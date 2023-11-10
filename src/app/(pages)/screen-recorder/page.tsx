import { Metadata } from 'next';
import ScreenRecorder from '~/components/screen-recorder';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.hightool.net/screen-recorder'
    },
    title: 'Online Screen Recorder - Hightool.net',
    description: 'HighTool Online Screen Recorder allows you to record your screen and audio without having to download or install any software. It is perfect for creating screencasts, video tutorials, and product demos.',
    keywords: 'Online Screen Recorder, screen recorder, record screen',
    applicationName: 'HighTool',
    robots: 'index, follow',
    metadataBase: new URL('https://www.hightool.net'),
    openGraph: {
        type: 'website',
        siteName: 'hightool.net',
        title: 'Online Screen Recorder',
        images: '/fav/maskable_icon_x512.png',
        url: 'https://www.hightool.net/screen-recorder',
        description: 'A perfect screen recording site for creating screencasts, video tutorials, and product demos.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Online Screen Recorder',
        images: '/fav/maskable_icon_x512.png',
        site: 'https://www.hightool.net/screen-recorder',
        description: 'A perfect screen recording site for creating screencasts, video tutorials, and product demos.',
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

const Page = () => {
    return (
        <ScreenRecorder />
    );
};

export default Page;