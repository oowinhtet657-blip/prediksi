import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch dari website Hongkong Pools
    const response = await fetch('https://www.hongkongpools.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const html = await response.text();

    // Parse Hongkong result - mencari angka hasil draw terbaru
    const resultMatch = html.match(/\d{4}\s*(?:HK|Hongkong)/i) || html.match(/(?:HK|Hongkong)[\s\S]*?(\d{4})/i);
    
    const result = resultMatch ? resultMatch[1] || resultMatch[0] : 'N/A';
    const numbers = result !== 'N/A' ? result.match(/\d/g) || [] : [];

    const hongkongResult = {
      result: result,
      numbers: numbers,
      date: new Date().toISOString().split('T')[0],
      source: 'hongkongpools.com'
    };

    return NextResponse.json({
      hongkong: hongkongResult,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Hongkong Pools data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Hongkong Pools' },
      { status: 500 }
    );
  }
}
