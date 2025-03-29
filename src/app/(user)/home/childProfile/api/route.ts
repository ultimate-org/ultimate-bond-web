import { NextRequest , NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: "Parent ID is required" }, { status: 400 });
    }

        try {
          const childResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}parent/child/${id}`);
          const response = await childResponse.json();
            if (response.code === 200) {
               return NextResponse.json({data: response.data, message:"Child Information Fetched Successfully!"})
            } else {
                return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
              }

        } catch (err) {
          console.error('Error while getting children in child account', err);
        } 
    
}