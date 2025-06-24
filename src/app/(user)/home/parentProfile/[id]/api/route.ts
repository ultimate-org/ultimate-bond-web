/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        
        // Get the FormData from the request
        const formData = await request.formData();
        
        // Convert FormData to a plain object
        const bodyData: Record<string, any> = {};
        for (const [key, value] of formData.entries()) {
            // Handle file uploads differently if needed
            if (value instanceof Blob) {
                // For files, you might want to handle them differently
                bodyData[key] = value;
            } else {
                bodyData[key] = value;
            }
        }

        // If you need to send this as JSON to your external API
        const jsonBody = JSON.stringify(bodyData);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/parent/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: jsonBody
        });

        // Handle non-successful responses
        if (!response.ok) {
            const errorData = await response.text();
            console.error('API Error:', errorData);
            return NextResponse.json(
                { error: 'Failed to update parent profile', details: errorData },
                { status: response.status }
            );
        }

        const responseData = await response.json();
        return NextResponse.json(responseData);

    } catch (error) {
        console.error('Update Parent Profile Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        

        const response = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}parent/${id}?type=${'trial'}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        });

        // Handle non-successful responses
        if (!response.ok) {
            const errorData = await response.text();
            console.error('API Error:', errorData);
            return NextResponse.json(
                { error: 'Failed to update parent trail count', details: errorData },
                { status: response.status }
            );
        }

        const responseData = await response.json();
        return NextResponse.json(responseData);

    } catch (error) {
        console.error('Update Parent trail count:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}