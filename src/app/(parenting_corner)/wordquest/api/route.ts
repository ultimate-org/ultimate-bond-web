import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const age_category_id = searchParams.get("age_category_id");
  const time_period = searchParams.get("time_period") || "weekly";

  const baseUrl =process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    return NextResponse.json(
      { code: 500, message: "API_URL environment variable is not set" },
      { status: 500 }
    );
  }

  if (!age_category_id) {
    return NextResponse.json(
      { code: 400, message: "age_category_id is required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${baseUrl}/wordle/leaderboard?age_category_id=${age_category_id}&time_period=${time_period}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json(
        { code: res.status, message: "Failed to fetch from backend" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error proxying wordle leaderboard:", err);
    return NextResponse.json(
      { code: 500, message: "Internal server error" },
      { status: 500 }
    );
  }
}