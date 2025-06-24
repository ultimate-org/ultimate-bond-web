import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(request: Request) {
  try {
    const { user_id } = await request.json();
    const response = await axios.post(`${BASE_URL}riddles/assignment/${user_id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in riddle assignment:', error);
    return NextResponse.json(
      { error: 'Failed to assign riddles' },
      { status: 500 }
    );
  }
}