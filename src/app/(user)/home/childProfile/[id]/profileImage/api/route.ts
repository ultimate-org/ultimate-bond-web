import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    // Get FormData from the request
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Create new FormData for the external API
    const externalFormData = new FormData();
   

    // Get other fields from the original form data
    const userId = formData.get('user_id');
      const parentId = formData.get('parent_id');
      const childId = formData.get('child_id');
    const createdBy = formData.get('created_by');
    
    if (userId) externalFormData.append('user_id', userId.toString());
      if (parentId) externalFormData.append('parent_id', parentId.toString());
        if (childId) externalFormData.append('child_id', childId.toString());
    if (createdBy) externalFormData.append('created_by', createdBy.toString());
    externalFormData.append('file', file);
    // Forward to external API - DON'T set Content-Type header for FormData
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile/picture`,
      {
        method: 'PUT',
        body: externalFormData
        // Let the browser set the Content-Type with boundary automatically
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to update profile picture', details: errorData },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Error uploading profile image:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}