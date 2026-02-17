import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch dari website Totowuhan
    const response = await fetch('https://www.totowuhan.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const html = await response.text();

    // Parse Totowuhan result - mencari angka hasil draw terbaru
    const resultMatch = html.match(/\d{4}\s*(?:TW|Totowuhan)/i) || html.match(/(?:TW|Totowuhan)[\s\S]*?(\d{4})/i);
    
    const result = resultMatch ? resultMatch[1] || resultMatch[0] : 'N/A';
    const numbers = result !== 'N/A' ? result.match(/\d/g) || [] : [];

    const totowuhanResult = {
      result: result,
      numbers: numbers,
      date: new Date().toISOString().split('T')[0],
      source: 'totowuhan.com'
    };

    return NextResponse.json({
      totowuhan: totowuhanResult,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Totowuhan data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Totowuhan' },
      { status: 500 }
    );
  }
}
