import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch country data from the external API
    const countryDataResponse = await fetch('http://192.168.29.64:8000/api/country');
    if (!countryDataResponse.ok) {
      throw new Error('Failed to fetch country data');
    }
    const countryData = await countryDataResponse.json();

    return NextResponse.json(countryData);
  } catch (error) {
    console.error('Error in GET /signup/api:', error);
    return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Call the external API to sign up the user using fetch
    const response = await fetch(`http://192.168.29.64:8000/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();

    // Handle response based on status code
    if (responseData.code === 201) {
      // User signed up successfully
      return NextResponse.json({ message: "Sign up successful!", data: responseData.data }, { status: 201 });
    } else if (responseData.code === 409) {
      // User already exists
      return NextResponse.json({ error: "User already exists." }, { status: 409 });
    } else {
      // Handle other status codes if needed
      return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in POST /signup/api:', error);

    // Generic error response
    return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
  }
}