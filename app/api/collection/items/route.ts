import { NextResponse } from 'next/server';
import { AUTH_TOKEN, COLLECTION_ID } from '../../../../config';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('Received request body:', JSON.stringify(body, null, 2));
    
    // Validate required fields
    if (!body.fieldData) {
      return NextResponse.json(
        { error: 'fieldData is required' },
        { status: 400 }
      );
    }
    
    // Prepare the request body for Webflow API
    const webflowBody: any = {
      fieldData: body.fieldData,
      isArchived: true,
      isDraft: true
    };

    console.log('Sending to Webflow API:', JSON.stringify(webflowBody, null, 2));

    // Use the /items/live endpoint to create live items directly
    const response = await fetch(`https://api.webflow.com/v2/collections/${COLLECTION_ID}/items/live`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AUTH_TOKEN}`,
        'accept-version': '2.0.0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webflowBody)
    });

    console.log('Webflow API response status:', response.status);
    console.log('Webflow API response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Webflow API error response:', errorData);
      console.error('Webflow API error status:', response.status);
      console.error('Webflow API error status text:', response.statusText);
      
      return NextResponse.json(
        { 
          error: `Webflow API error: ${response.status} ${response.statusText}`,
          details: errorData
        },
        { status: response.status }
      );
    }

    const newItem = await response.json();
    console.log('Successfully created live item:', newItem);
    return NextResponse.json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create collection item',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 