import { NextResponse,  } from "next/server";

export async function GET(request:Request, {params}:{params:Promise<{id: string}>}) {
    try {
        const { id } = await params;
        console.log("ID IN THE BACKEND", id);
        // Fetch upcoming workshops from the first API
        const upcomingResponse = await fetch(`${process.env.BASE_URL}/workshop/${id}`);
        if (!upcomingResponse.ok) {
            throw new Error('Failed to fetch upcoming workshops');
        }
        const upcomingData = await upcomingResponse.json();

        // Combine both datasets into a single response
        return NextResponse.json({
            upcomingWorkshops: upcomingData.data, // assuming upcomingData has a 'data' field
        });
        
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}