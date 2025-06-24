import {  NextResponse } from "next/server";



export async function GET(request: Request,{ params }: { params: { userid: string } }) {
    const { userid } = await params;
    try {
        // Fetch data from both endpoints in parallel
        const subscriptionResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}subscription-history/${userid}`);
        // Check if both responses are successful
        if (!subscriptionResponse.ok) {
            throw new Error('Failed to subscription history data');
        }

        // Parse the JSON data from both responses
        const subscriptionData = await subscriptionResponse.json();
        
        return NextResponse.json(subscriptionData);
    } catch (err) {
        console.error('Error while fetching subscription history', err);
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}
