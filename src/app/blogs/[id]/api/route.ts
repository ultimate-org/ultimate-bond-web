import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params:Promise<{id: string}>}) {
    try {
        const { id } = await params;
        const blogDetailsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carousel-data/${id}`);
        if (!blogDetailsResponse.ok) {
            throw new Error('Failed to fetch blog details');
        }
        const blogDetails = await blogDetailsResponse.json();
        return NextResponse.json({
            blogData: blogDetails.data, 
        });
        
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}