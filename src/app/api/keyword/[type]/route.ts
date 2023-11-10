
import { NextRequest, NextResponse } from 'next/server';
import { getYoutubeTags } from './youtube';

const getType = (url: string) => {
    if (url.includes('youtube')) return 'youtube';
    else return null;
};

export async function GET(request: NextRequest) {
    const { searchParams, pathname }: any = request.nextUrl;
    const query: string = searchParams.get('q');
    let response: any;

    switch (getType(pathname)) {
    case 'youtube':
        response = await getYoutubeTags(query);
        break;

    default:
        break;
    }

    return NextResponse.json(response);
}