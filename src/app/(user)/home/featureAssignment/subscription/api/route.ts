// /* eslint-disable @typescript-eslint/no-explicit-any */
// // app/api/subscription-assignments/route.ts
// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function POST(req: Request) {
//   try {
//       const { child_ids, user_id, parent_id } = await req.json();
      

//     // Validate input
//     if (!child_ids || !user_id || !parent_id) {
//       return NextResponse.json(
//         { error: ' child_ids and user_id and parent_id are required' },
//         { status: 400 }
//       );
//     }

//     // Create all API calls as promises
//     const promises = [
//       // Activity assignment
//       axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/assignment-activity`,
//         { child_ids, is_trial: false },
//         { headers: { 'Content-Type': 'application/json' } }
//       ),

//       // Story assignment
//       axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/child/story`,
//         { child_ids, is_trial: false },
//         { headers: { 'Content-Type': 'application/json' } }
//       ),

//       // Virtue assignment
//       axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/virtue/assignment`,
//         { user_id, is_trial: false },
//         { headers: { 'Content-Type': 'application/json' } }
//       ),

//       // Wordle assignment
//       axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/wordle`,
//         { child_ids },
//         { headers: { 'Content-Type': 'application/json' } }
//       ),

//       // Shlok assignment
//       axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/shlok/subscription`,
//         { child_ids },
//         { headers: { 'Content-Type': 'application/json' } }
//       ),

//       // Parent count update
//       axios.put(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/parent/${parent_id}?type=subscription`
//       )
//     ];

//     // Execute all in parallel
//     const responses = await Promise.all(promises);

//     // Format successful responses
//     const results = responses.map(response => ({
//       status: response.status,
//       data: response.data
//     }));

//     return NextResponse.json(
//       { success: true, results },
//       { status: 200 }
//     );

//   } catch (error: any) {
//     console.error('Error in parallel assignments:', error);
    
//     // Handle both individual errors and aggregate errors
//     if (error instanceof AggregateError) {
//       const errors = error.errors.map((err: any) => ({
//         message: err.message,
//         status: err.response?.status || 500
//       }));
//       return NextResponse.json(
//         { error: 'Some assignments failed', details: errors },
//         { status: 207 } // 207 Multi-Status
//       );
//     }

//     const status = error.response?.status || 500;
//     const message = error.response?.data?.message || 'Internal server error';

//     return NextResponse.json(
//       { error: message },
//       { status }
//     );
//   }
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/subscription-assignments/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { child_ids, user_id, parent_id } = await req.json();

    // Validate input
    if (!child_ids || !user_id || !parent_id) {
      return NextResponse.json(
        { error: 'child_ids, user_id and parent_id are required' },
        { status: 400 }
      );
    }

    // Create all API calls with proper error handling
    const endpoints = [
      {
        name: 'activity-assignment',
        request: axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/assignment-activity`,
          { child_ids, is_trial: false },
          { headers: { 'Content-Type': 'application/json' } }
        )
      },
      {
        name: 'story-assignment',
        request: axios.post(
          `${process.env.NEXT_PLIC_BASE_URL}/child/story`,
          { child_ids, is_trial: false },
          { headers: { 'Content-Type': 'application/json' } }
        )
      },
      {
        name: 'virtue-assignment',
        request: axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/virtue/assignment`,
          { user_id, is_trial: false },
          { headers: { 'Content-Type': 'application/json' } }
        )
      },
      {
        name: 'wordle-assignment',
        request: axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/wordle`,
          { child_ids },
          { headers: { 'Content-Type': 'application/json' } }
        )
      },
      {
        name: 'shlok-assignment',
        request: axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/shlok/subscription`,
          { child_ids },
          { headers: { 'Content-Type': 'application/json' } }
        )
      },
      {
        name: 'parent-count-update',
        request: axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/parent/${parent_id}?type=subscription`
        )
      }
    ];

    // Execute all requests with individual error handling
    const results = await Promise.all(
      endpoints.map(async (endpoint) => {
        try {
          const response = await endpoint.request;
          return {
            name: endpoint.name,
            success: true,
            status: response.status,
            data: response.data
          };
        } catch (error: any) {
          return {
            name: endpoint.name,
            success: false,
            status: error.response?.status || 500,
            error: error.message,
            data: error.response?.data || null
          };
        }
      })
    );

    // Check if all requests failed
    const allFailed = results.every(result => !result.success);
    if (allFailed) {
      return NextResponse.json(
        { 
          success: false,
          message: 'All assignments failed',
          results 
        },
        { status: 500 }
      );
    }

    // Check if some requests failed
    const someFailed = results.some(result => !result.success);
    if (someFailed) {
      return NextResponse.json(
        { 
          success: true,
          message: 'Some assignments failed',
          results 
        },
        { status: 207 } // Multi-status
      );
    }

    // All requests succeeded
    return NextResponse.json(
      { 
        success: true,
        message: 'All assignments completed successfully',
        results 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Unexpected error in subscription assignments:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error.message,
        details: error.response?.data || null
      },
      { status: 500 }
    );
  }
}