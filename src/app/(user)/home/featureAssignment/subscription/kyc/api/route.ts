import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL =process.env.NEXT_PUBLIC_BASE_URL;

export async function POST(request: Request) {
  try {
    const {parent_id, child_ids, is_trial } = await request.json();
    const response = await axios.post(`${BASE_URL}/ultimate/kyc/assign-kyc`, {
    parent_id,
      child_ids,
      is_trial
    }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error in assignment-kyc:', error);
    return NextResponse.json(
      { error: 'Failed to assign kyc' },
      { status: 500 }
    );
  }
}