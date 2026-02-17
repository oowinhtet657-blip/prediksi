import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch dari website Malaysia Lottery
    const response = await fetch('https://www.malaysialottery.net/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const html = await response.text();

    // Parse Malaysia result - mencari angka hasil draw terbaru
    const resultMatch = html.match(/\d{4}\s*(?:MY|Malaysia)/i) || html.match(/(?:MY|Malaysia)[\s\S]*?(\d{4})/i);
    
    const result = resultMatch ? resultMatch[1] || resultMatch[0] : 'N/A';
    const numbers = result !== 'N/A' ? result.match(/\d/g) || [] : [];

    const malaysiaResult = {
      result: result,
      numbers: numbers,
      date: new Date().toISOString().split('T')[0],
      source: 'malaysialottery.net'
    };

    return NextResponse.json({
      malaysia: malaysiaResult,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Malaysia Lottery data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Malaysia Lottery' },
      { status: 500 }
    );
  }
}
