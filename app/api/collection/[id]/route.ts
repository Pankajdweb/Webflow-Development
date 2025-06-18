import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
    console.log(params.id);
  try {
    // Fetch collection metadata
    const collectionResponse = await fetch(`https://api.webflow.com/v2/collections/${params.id}`, {
      headers: {
        'Authorization': 'Bearer 1170be024f7d8c57831207c329a081b478cd9126d9297881e4c10653d0ab8b03',
        'accept-version': '2.0.0'
      }
    });

    // Fetch collection items
    const itemsResponse = await fetch(`https://api.webflow.com/v2/collections/${params.id}/items`, {
      headers: {
        'Authorization': 'Bearer 1170be024f7d8c57831207c329a081b478cd9126d9297881e4c10653d0ab8b03',
        'accept-version': '2.0.0'
      }
    });

    if (!collectionResponse.ok || !itemsResponse.ok) {
      throw new Error('Failed to fetch from Webflow API');
    }

    const collectionData = await collectionResponse.json();
    const itemsData = await itemsResponse.json();

    return NextResponse.json({
      collection: collectionData,
      items: itemsData.items || []
    });
  } catch (error) {
    console.error('Error fetching from Webflow:', error);
    return NextResponse.json(
      { error: 'Failed to fetch collection data from Webflow' },
      { status: 500 }
    );
  }
} 