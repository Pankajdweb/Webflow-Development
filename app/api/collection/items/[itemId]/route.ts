import { NextResponse } from 'next/server';

const COLLECTION_ID = '6835ac0e320162939cd9c8d1';

interface RouteParams {
  params: Promise<{
    itemId: string;
  }>;
}

export async function PATCH(
  request: Request,
  { params }: RouteParams
) {
  try {
    const resolvedParams = await params;
    const body = await request.json();
    
    // Prepare the request body for Webflow API
    const webflowBody: any = {
      fieldData: body.fieldData,
      isArchived: false,
      isDraft: false
    };

    const response = await fetch(`https://api.webflow.com/v2/collections/${COLLECTION_ID}/items/${resolvedParams.itemId}/live`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer 1170be024f7d8c57831207c329a081b478cd9126d9297881e4c10653d0ab8b03',
        'accept-version': '2.0.0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webflowBody)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Webflow API error:', errorData);
      throw new Error(`Failed to update item: ${response.status} ${response.statusText}`);
    }

    const updatedItem = await response.json();
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json(
      { error: 'Failed to update collection item' },
      { status: 500 }
    );
  }
} 