import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch data from the state endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/state`);
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch state data: ${response.statusText}`);
    }

    // Parse the JSON data from the response
    const stateData = await response.json();
    
    // Return the state data as JSON
    return NextResponse.json(stateData, { status: 200 });

  } catch (err) {
    console.error('Error while fetching state data:', err);
    return NextResponse.json(
      { error: "Failed to fetch state data" }, 
      { status: 500 }
    );
  }
}