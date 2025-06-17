import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
    console.log(params.id);
  try {
    const response = await fetch(`https://api.webflow.com/v2/collections/${params.id}/items`, {
      headers: {
        'Authorization': 'Bearer b7ad64d73b538d78b45df24f402d0ee9c88b9c8f29f124a39ed2173fb36f89c5',
        'accept-version': '2.0.0'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from Webflow API');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching from Webflow:', error);
    return NextResponse.json(
      { error: 'Failed to fetch collection items from Webflow' },
      { status: 500 }
    );
  }
} 