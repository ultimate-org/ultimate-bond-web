import {  NextResponse } from "next/server";



export async function GET(request: Request,{params}:{params:Promise<{id:string}>}) {
    const { id } = await params;
    
    try {
        // Fetch data from both endpoints in parallel
        const parentDetailsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/parent/${id}`);
        // Check if both responses are successful
        if (!parentDetailsResponse.ok) {
            throw new Error('Failed to fetch parent data');
        }

        // Parse the JSON data from both responses
        const parentDetailsData = await parentDetailsResponse.json();
        
        return NextResponse.json(parentDetailsData);
    } catch (err) {
        console.error('Error while fetching parent data', err);
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}
