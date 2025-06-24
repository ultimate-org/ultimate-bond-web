import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const countryCode = searchParams.get('country_code');
  const platForm = searchParams.get('platform');

  try {
    // Fetch subscription plan data
    const subscriptionPlanResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/subscription-plan?platform=${platForm}&country_id=${countryCode}`
    );
    if (!subscriptionPlanResponse.ok) {
      throw new Error('Failed to fetch subscription plan data');
    }

    // Parse JSON response
    const subscriptionPlansData = await subscriptionPlanResponse.json();

    // Return the parsed data
    return NextResponse.json(subscriptionPlansData, { status: 200 });

  } catch (err) {
    console.error('Error while fetching data', err);
    return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
  }
}






export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const childBody = {
            first_name: body?.first_name || '',
            standard_id: body?.standard_id || '',
            parent_id: body?.parent_id || '',
            gender_id: body?.gender_id,
            password: body?.password,
            avatar_id: body?.avatar_id
        }
  
        // Call the external API to sign up the user using fetch
      const response = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}add-child`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(childBody),
      });
      const responseData = await response.json();
  
      // Handle response based on status code
      if (responseData.code === 201) {
          // User signed up successfully

          const assignmentData = {
            child_ids: [responseData?.data?.child?.child_id],
            is_trial: true,
          }

          const virtueData = {
            user_id: body?.user_id,
            is_trial: true,
          };
    
          const storyData = {
            child_ids: [responseData?.data?.child?.child_id],
            is_trial: false,
          };

    
          // Call the two APIs in parallel
          await Promise.all([
             fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}assignment-activity`, {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(assignmentData)
            }),
             fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}virtue/assignment`, {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(virtueData)
            }),
             fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}child/story`, {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(storyData)
            }),
            fetch(
                `${ process.env.NEXT_PUBLIC_BASE_URL}api/wordle`,
                {
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify({child_ids: [responseData?.data?.child?.child_id]})
                }
              ),
              fetch(
                `${ process.env.NEXT_PUBLIC_BASE_URL}shlok/trial`,
                  {
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify({child_ids: [responseData?.data?.child?.child_id]})
                }
              ),
              fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}parent/${body.parent_id}?type=${'trial'}`,{method:'PUT'}),
              fetch(
                `${ process.env.NEXT_PUBLIC_BASE_URL}child-trial-update`,
                  {
                    method:'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify({child_ids: [responseData?.data?.child?.child_id]})
                }
              ),

         ]);
        return NextResponse.json({ message: "Child Added Successfully!" }, { status: 201 });
      } else {
        // Handle other status codes if needed
        return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
      }
    } catch (error) {
      console.error('Error in POST /signup/api:', error);
  
      // Generic error response
      return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
  }