import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    try {
        // Fetch data from both endpoints in parallel
        const [avatarResponse, standardResponse] = await Promise.all([
            fetch(`http://192.168.29.64:8000/api/avatar`),
            fetch(`http://192.168.29.64:8000/api/standard`),
        ]);

        // Check if both responses are successful
        if (!avatarResponse.ok || !standardResponse.ok) {
            throw new Error('Failed to fetch data from one or more endpoints');
        }

        // Parse the JSON data from both responses
        const avatarData = await avatarResponse.json();
        const standardData = await standardResponse.json();

        // Combine the data into a single response
        const combinedData = {
            avatar: avatarData,
            standard: standardData,
        };

        // Return the combined data
        return NextResponse.json(combinedData);
    } catch (err) {
        console.error('Error while fetching data', err);
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const childBody = {
            first_name: body?.first_name || '',
            standard_id: body?.standard_id || '',
            parent_id: body?.parent_id || '',
            gender_id: body?.gender_id,
            password: body?.password,
            avatar_id: body?.avatar_id
        }
  
        // Call the external API to sign up the user using fetch
      const response = await fetch(`http://192.168.29.64:8000/api/add-child`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(childBody),
      });
      const responseData = await response.json();
  
      // Handle response based on status code
      if (responseData.code === 201) {
        // User signed up successfully
        return NextResponse.json({ message: "Child Added Successfully!" }, { status: 201 });
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