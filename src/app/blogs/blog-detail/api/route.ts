import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Extract searchParams from the request URL
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    if (!name) {
      return NextResponse.json(
        { error: "Missing search parameter: name" },
        { status: 400 }
      );
    }

    const blogDetailsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?name=${encodeURIComponent(name)}`
    );

    if (!blogDetailsResponse.ok) {
      throw new Error("Failed to fetch blog details");
    }

    const blogDetails = await blogDetailsResponse.json();

    return NextResponse.json({
      blogData: blogDetails.data,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}