import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function PUT(request: Request) {
  try {
    const { parentId } = await request.json();
    
    if (!parentId) {
      return NextResponse.json(
        { error: 'parentId is required' },
        { status: 400 }
      );
    }

    const response = await axios.put(`${BASE_URL}/parent/${parentId}?type=trial`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in parent trial count update:', error);
    return NextResponse.json(
      { error: 'Failed to update parent trial count' },
      { status: 500 }
    );
  }
}