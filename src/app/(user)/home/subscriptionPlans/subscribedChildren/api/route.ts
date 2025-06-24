import {  NextResponse } from "next/server";



export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
    
    try {
        // Fetch data from both endpoints in parallel
        const [subscribedChildrenResponse, parentChildrenResponse] = await Promise.all([ fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/subscription/children/${id}`), fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/parent/child/${id}`) ]);
        // Check if both responses are successful
        if (!subscribedChildrenResponse.ok || !parentChildrenResponse.ok) {
            throw new Error('Failed to fetch subscribed children data or parent children data');
        }

        // Parse the JSON data from both responses
        const subscribedChildrenData = await subscribedChildrenResponse.json();
        const parentChildrenData = await parentChildrenResponse.json();
        // Combine the data into a single response
        if (subscribedChildrenData.code !== 200 || parentChildrenData.code !== 200) {
            return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
        }
        const combinedData = {
            subscribedChildrenData: subscribedChildrenData.data,
            parentChildrenData: parentChildrenData.data,
            status: 200
        };
        
        
        return NextResponse.json(combinedData, { status: 200 });
    } catch (err) {
        console.error('Error while fetching subscribed children data or parent Children data', err);
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}
