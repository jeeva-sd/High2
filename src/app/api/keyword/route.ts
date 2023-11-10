import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, res: Response) {
    const cookies = request.cookies.getAll();


    return new Response('Hello, Next.js!', {
        status: 200
    });
}