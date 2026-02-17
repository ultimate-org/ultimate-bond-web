import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    try {
        // Fetch data from both endpoints in parallel
        const [avatarResponse, standardResponse] = await Promise.all([
            fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}avatar`),
            fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}standard`),
        ]);

        // Check if both responses are successful
        if (!avatarResponse.ok || !standardResponse.ok) {
            throw new Error('Failed to fetch data from one or more endpoints');
        }

        // Parse the JSON data from both responses
        const avatarData = await avatarResponse.json();
        const standardData = await standardResponse.json();

        // Combine the data into a single response
        const combinedData = {
            avatar: avatarData,
            standard: standardData,
        };

        // Return the combined data
        return NextResponse.json(combinedData);
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
            is_trial: true,
        };
        
        const childCaseStudyData = {
          child_ids: [responseData?.data?.child?.child_id],
          is_trial: true,
        };

        const kycData = {
          parent_id: responseData?.data?.child?.parent_id,
          child_ids: [responseData?.data?.child?.child_id],
          is_trial: true,
        };

        const wonderchatData = {
          parent_id: responseData?.data?.child?.parent_id,
          child_ids: [responseData?.data?.child?.child_id],
          is_trial: true,
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
                `${ process.env.NEXT_PUBLIC_BASE_URL}wordle`,
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
            fetch(
              `${ process.env.NEXT_PUBLIC_BASE_URL}case-study/assignment`,
                {
                  method:'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(childCaseStudyData)
              }
            ),
            fetch(
              `${ process.env.NEXT_PUBLIC_BASE_URL}riddles/assignment/${body?.user_id}`,
                {
                  method:'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body : JSON.stringify({child_ids: [responseData?.data?.child?.child_id]})
              }
            ),
             fetch(
              `${ process.env.NEXT_PUBLIC_BASE_URL}/ultimate/kyc/assign-kyc`,
                {
                  method:'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body : JSON.stringify(kycData)
              }
            ),
            fetch(
              `${ process.env.NEXT_PUBLIC_BASE_URL}/ultimate/wonderchat/assign-wonderchat`,
                {
                  method:'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body : JSON.stringify(wonderchatData)
              }
            ),
              // fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}parent/${body.parent_id}?type=${'trial'}`,{method:'PUT'}),
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
      console.error('Error in adding child:', error);
  
      // Generic error response
      return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 });
    }
  }