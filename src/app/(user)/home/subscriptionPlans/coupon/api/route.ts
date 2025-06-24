import { NextRequest, NextResponse } from 'next/server';

// interface ValidateCouponParams {
//   coupon_code: string;
//   user_id: string;
//   subscription_plan_id: number;
// }

export async function POST(request: NextRequest)  {
    try {
        const bodyData = await request.json();

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/coupon`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData)
        });

        const responseData = await response.json();

      return NextResponse.json(responseData);
  } catch (error) {
    console.error('Coupon validation error:', error);
        return NextResponse.json(
          { error: 'Internal server error' },
          { status: 500 }
        );
  }
};

// src/app/api/coupon/route.ts
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const bodyData = await request.json();

//     // Input validation
//     if (!bodyData.coupon_code || !bodyData.user_id || !bodyData.subscription_plan_id) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const response = await fetch(`${process.env.BACKEND_API_URL}/coupon`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(bodyData)
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return NextResponse.json(
//         { error: errorData.message || 'Coupon validation failed' },
//         { status: response.status }
//       );
//     }

//     const responseData = await response.json();
//     return NextResponse.json(responseData);

//   } catch (error) {
//     console.error('Coupon validation error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }