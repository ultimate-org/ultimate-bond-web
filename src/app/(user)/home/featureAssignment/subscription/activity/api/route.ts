import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL =process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(request: Request) {
  try {
    const { child_ids, is_trial } = await request.json();
    const response = await axios.post(`${BASE_URL}assignment-activity`, {
      child_ids,
      is_trial
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in assignment-activity:', error);
    return NextResponse.json(
      { error: 'Failed to assign activities' },
      { status: 500 }
    );
  }
}