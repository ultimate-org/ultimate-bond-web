import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(request: Request) {
  try {
    const { child_ids } = await request.json();
    const response = await axios.post(`${BASE_URL}wordle`, {
      child_ids
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in wordle assignment:', error);
    return NextResponse.json(
      { error: 'Failed to assign wordle' },
      { status: 500 }
    );
  }
}