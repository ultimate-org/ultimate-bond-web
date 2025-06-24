/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse} from 'next/server';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id'); // For fetching parent details by ID
  try {
    // Fetch all data concurrently using Promise.all
    const [rolesResponse, gendersResponse, religionsResponse, languagesResponse, statesResponse, parentResponse] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/parent-role`).then((res) => res.json()),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gender`).then((res) => res.json()),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/religion`).then((res) => res.json()),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/language`).then((res) => res.json()),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/state`).then((res) => res.json()),
        id ? fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/parent/${id}`).then((res) => res.json()) : Promise.resolve(null), // Fetch parent details only if ID is provided
      ]);

    // Transform role data
    const roleArr = rolesResponse.code === 200
      ? rolesResponse.data.map((val: any) => ({
          label: val.name,
          value: val.parent_role_id,
        }))
      : [];

    // Transform gender data (excluding gender with ID 3)
    const genderArr = gendersResponse.code === 200
      ? gendersResponse.data
          .filter((val: any) => val.gender_id !== 3)
          .map((val: any) => ({
            label: val.name,
            value: val.gender_id,
          }))
      : [];

    // Transform religion data
    const religionArr = religionsResponse.code === 200
      ? religionsResponse.data.map((val: any) => ({
          label: val.name,
          value: val.religion_id,
        }))
      : [];

    // Transform language data
    const languageArr = languagesResponse.code === 200
      ? languagesResponse.data.map((val: any) => ({
          label: val.name,
          value: val.language_id,
        }))
      : [];

    // Transform state data
    const stateArr = statesResponse.code === 200
      ? statesResponse.data.map((val: any) => ({
          label: val.name,
          value: val.state_id,
        }))
      : [];

    // Transform parent details (if ID is provided)
    let parentData = null;
      if (id && parentResponse?.code === 200) {
      parentData = {
        firstName: parentResponse.data.first_name || '',
        lastName: parentResponse.data.last_name || '',
        countryCode: parentResponse.data.user?.country?.phone_code || '',
        contactNumber: parentResponse.data.contact_number || '',
        userName: parentResponse.data.user?.username || '',
        role: parseInt(parentResponse.data.parent_role_id) || '',
        gender: parseInt(parentResponse.data.gender_id) || '',
        dateOfBirth: new Date(parentResponse.data.birth_date) || new Date(),
        religion: parseInt(parentResponse.data.religion_id) || '',
        motherTongue: parseInt(parentResponse.data.mother_tounge_id) || '',
        pincode: parentResponse.data.pincode || '',
        state: parseInt(parentResponse.data.state_id) || '',
        address: parentResponse.data.address || '',
        profileImagePath: parentResponse.data.profile_image_url || '',
        userId: parentResponse.data.user?.user_id || '',
      };
    }

    // Return unified response
    return NextResponse.json(
      {
        roles: roleArr,
        genders: genderArr,
        religions: religionArr,
        languages: languageArr,
        states: stateArr,
        parent: parentData,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error while fetching data:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}


