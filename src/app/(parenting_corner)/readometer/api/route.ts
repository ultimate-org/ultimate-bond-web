import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const age_category_id = searchParams.get("age_category_id");
  const time_period = searchParams.get("time_period") || "weekly";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/readometer/leaderboard?age_category_id=${age_category_id}&time_period=${time_period}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return NextResponse.json(data);
}   