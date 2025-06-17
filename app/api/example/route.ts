import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.webflow.com/v2/sites/6835ac0e320162939cd9c7ad/collections', {
      headers: {
        'Authorization': 'Bearer d8f6b3d6366234de65f89f363c9f110a218b02014496727d73ebe14a675213d9',
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
      { error: 'Failed to fetch data from Webflow' },
      { status: 500 }
    );
  }
} 