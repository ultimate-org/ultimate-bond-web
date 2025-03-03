import {NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try { 
        const bodyData = await request.json();

        // Verfying phone number if correct
        const response = await fetch(`http://192.168.29.64:8000/api/user/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({contact_number:bodyData.contact_number})
        });
        
        // console.log("RESPONSE",response.)
    
        const responseData = await response.json();

        if (responseData.code === 200) {
            // now api call to check passcode 
           const data = {
            contact_number: bodyData.contact_number,
                password: bodyData.password,
            };
            const loggingResponse = await fetch(`http://192.168.29.64:8000/api/login`, {
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(data)
            });
            
            const loggedUserData = await loggingResponse.json();
            if (loggedUserData.code === 200) {
                // Getting Logged in user
                const userId = loggedUserData.result.user_id;
                const userInfoResponse = await fetch(`http://192.168.29.64:8000/api/parent/byUser/${userId}`,{method:"GET"});

                const userInfoData = await userInfoResponse.json()

                if (userInfoData.code === 200) {
                    return NextResponse.json({message:"Logged in Successfully", userInfo:userInfoData}, {status:200})
                }

            }
            if (loggedUserData.code === 401) {
                return NextResponse.json({error:"Login Unsuccessfull, please try again"},{status:401})
            }
        }

        if (responseData.code === 404) {
            return NextResponse.json({error:"Invalid Phone number, try again!"},{status:404})
        }
        else {
            // Handle other status codes if needed
            return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
          }

    } catch (error) {
        console.error('Error in POST /login/api:', error);

        // Generic error response
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 }); }
}


export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id')
        const response = await fetch(`http://192.168.29.64:8000/api/parent/child/${Number(id)}`);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        
        const childAvailableResponse = await response.json();

    return NextResponse.json(childAvailableResponse);
           
    } catch (error) {
        console.error('Error in POST /login/api:', error);

        // Generic error response
        return NextResponse.json({ error: "Something Went Wrong!" }, { status: 500 }); }
    
}