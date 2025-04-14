import { NextResponse } from 'next/server';

let counter = 0;

export async function GET() {
    counter += 1;
    return NextResponse.json({ count: counter });
}
