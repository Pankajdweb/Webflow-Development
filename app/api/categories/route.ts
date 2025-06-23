import { NextResponse } from 'next/server';

const CATEGORY_COLLECTION_ID = '68595060392aba7fc8fca05b';

export async function GET() {
  try {
    // Fetch category items from Webflow
    const response = await fetch(`https://api.webflow.com/v2/collections/${CATEGORY_COLLECTION_ID}/items`, {
      headers: {
        'Authorization': 'Bearer 1170be024f7d8c57831207c329a081b478cd9126d9297881e4c10653d0ab8b03',
        'accept-version': '2.0.0'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch categories from Webflow API');
    }

    const data = await response.json();
    return NextResponse.json({ items: data.items || [] });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories from Webflow' },
      { status: 500 }
    );
  }
} 