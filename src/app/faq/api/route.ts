import { NextResponse } from "next/server";

export async function GET() {
  try {
      // Fetch data from the state endpoint
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faq`);
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch faq data: ${response.statusText}`);
    }

    // Parse the JSON data from the response
    const faqData = await response.json();
    
    // Return the state data as JSON
    return NextResponse.json(faqData, { status: 200 });

  } catch (err) {
    console.error('Error while fetching faq data:', err);
    return NextResponse.json(
      { error: "Failed to fetch faq data" }, 
      { status: 500 }
    );
  }
}