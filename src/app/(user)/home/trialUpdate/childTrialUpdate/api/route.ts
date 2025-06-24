import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function PUT(request: Request) {
  try {
    const { child_ids } = await request.json();
    const response = await axios.put(`${BASE_URL}/child-trial-update`, {
      child_ids
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in child trial update:', error);
    return NextResponse.json(
      { error: 'Failed to update child trial count' },
      { status: 500 }
    );
  }
}