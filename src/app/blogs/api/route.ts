import { NextResponse } from "next/server";

export async function GET() {
    try {
        const blogsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}carousel-content?type=BLOGS`);
        if (!blogsResponse.ok) {
            throw new Error('Failed to fetch blogs');
        }
        const blogsData = await blogsResponse.json();
        return NextResponse.json({
            blogsData: blogsData.data, 
        });
        
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}

