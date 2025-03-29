import { NextResponse,NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
  
      // Call the external API to sign up the user using fetch
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}register-workshops`, {
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
        return NextResponse.json({ message: "Workshop Registration Successfull!", data: responseData.data }, { status: 201 });
      } else if (responseData.code === 409) {
        // User already exists
        return NextResponse.json({ error: "No more registration accepted." }, { status: 409 });
      } else if (responseData.code === 410 ) { 
          return NextResponse.json({error:"Already Registered"},{status:410})
      } else {
        // Handle other status codes if needed
        return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
      }
    } catch (error) {
      console.error('Error in POST /workshops/id/api:', error);
  
      // Generic error response
      return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
  }

export async function GET(request:Request, {params}:{params:Promise<{id: string}>}) {
    try {
        const { id } = await params;
        // Fetch upcoming workshops from the first API
        const workshopDetailsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/workshop/${id}`);
        if (!workshopDetailsResponse.ok) {
            throw new Error('Failed to fetch upcoming workshops');
        }
        const workshopDetails = await workshopDetailsResponse.json();
        // Combine both datasets into a single response
        return NextResponse.json({
            workshopData: workshopDetails.data, // assuming upcomingData has a 'data' field
        });
        
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
}