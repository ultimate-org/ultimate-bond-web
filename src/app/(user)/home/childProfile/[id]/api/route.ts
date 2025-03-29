
import { NextRequest, NextResponse } from 'next/server';

interface Gender {
  gender_id: number;
  name: string;
}

interface Standard {
  standard_id: number;
  name: string;
}

interface Child {
  first_name: string;
  last_name: string;
  gender_id: number;
  standard_id: number;
  birth_date: string;
  profile_image_url: string;
  user?: {
    user_id: number;
  };
}

interface ApiResponse<T> {
  code: number;
  data: T;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return NextResponse.json({ error: 'BASE_URL is not defined' }, { status: 500 });
  }

  try {
    const [gendersResponse, standardResponse, childResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}gender`).then((res) => res.json() as Promise<ApiResponse<Gender[]>>),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}standard`).then((res) => res.json() as Promise<ApiResponse<Standard[]>>),
      id ? fetch(`${process.env.NEXT_PUBLIC_BASE_URL}child/${id}`).then((res) => res.json() as Promise<ApiResponse<Child>>) : Promise.resolve(null),
    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transformData = <T>(data: T[], filterFn?: (val: T) => boolean, mapFn: (val: T) => any = (val) => val) => {
      return data.filter(filterFn || (() => true)).map(mapFn);
    };

    const genderArr = gendersResponse.code === 200
      ? transformData(gendersResponse.data, (val) => val.gender_id !== 3, (val) => ({ label: val.name, value: val.gender_id }))
      : [];

    const standardArr = standardResponse.code === 200
      ? transformData(standardResponse.data, undefined, (val) => ({ label: val.name, value: val.standard_id }))
      : [];

    let childData = null;
    if (id && childResponse?.code === 200 && childResponse.data) {
      childData = {
        firstName: childResponse.data.first_name || '',
        lastName: childResponse.data.last_name || '',
        gender: parseInt(childResponse.data.gender_id.toString()) || 0,
        standard: parseInt(childResponse.data.standard_id.toString()) || 0,
        dateOfBirth: new Date(childResponse.data.birth_date) || new Date(),
        profileImagePath: childResponse.data.profile_image_url || '',
        userId: childResponse.data.user?.user_id || 0,
      };
    }

    return NextResponse.json(
      {
        genders: genderArr,
        standard: standardArr,
        child: childData,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error while fetching data:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const body = await request.json();
    console.log("ID", id);
    console.log("BODY DATA", body)

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}child/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const responseData = await response.json();
    // Handle response based on status code
    if (responseData.code === 200) {
      // User signed up successfully
      return NextResponse.json({ message: "Profile updated successfully!", data: responseData.data }, { status: 200 });
    } else {
      // Handle other status codes if needed
      return NextResponse.json({ error: "Unexpected response from the server." }, { status: 500 });
    }
   } catch (err) {
    console.error('Error while fetching data:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}