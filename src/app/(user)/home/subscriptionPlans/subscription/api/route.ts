

import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest)  {
    try {
        const bodyData = await request.json();

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/add-subscription`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        const responseData = await response.json();

      return NextResponse.json(responseData);
  } catch (error) {
    console.error('Add Subscription Error:', error);
        return NextResponse.json(
          { error: 'Internal server error' },
          { status: 500 }
        );
  }
};