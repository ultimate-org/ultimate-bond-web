import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Fetch upcoming workshops from the first API
        const upcomingResponse = await fetch(`https://backend.ultimate-bond.com/api/upcoming-workshops`);
        if (!upcomingResponse.ok) {
            throw new Error('Failed to fetch upcoming workshops');
        }
        const upcomingData = await upcomingResponse.json();

        // Fetch previous workshops from the second API
        const previousResponse = await fetch(`https://backend.ultimate-bond.com/api/previous-workshops`);
        if (!previousResponse.ok) {
            throw new Error('Failed to fetch previous workshops');
        }
        const previousData = await previousResponse.json();

        // Combine both datasets into a single response
        return NextResponse.json({
            upcomingWorkshops: upcomingData.data, // assuming upcomingData has a 'data' field
            previousWorkshops: previousData.data, // assuming previousData has a 'data' field
        });
        
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}
