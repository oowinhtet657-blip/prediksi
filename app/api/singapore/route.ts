import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch dari website Singapore Pools
    const response = await fetch('https://www.singaporepools.com.sg/en/product/Pages/4d_results.aspx', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const html = await response.text();

    // Parse Singapore result - mencari angka hasil draw terbaru
    const resultMatch = html.match(/\d{4}\s*(?:SG|Singapore)/i) || html.match(/(?:SG|Singapore)[\s\S]*?(\d{4})/i);
    
    const result = resultMatch ? resultMatch[1] || resultMatch[0] : 'N/A';
    const numbers = result !== 'N/A' ? result.match(/\d/g) || [] : [];

    const singaporeResult = {
      result: result,
      numbers: numbers,
      date: new Date().toISOString().split('T')[0],
      source: 'singaporepools.com.sg'
    };

    return NextResponse.json({
      singapore: singaporeResult,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Singapore Pools data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Singapore Pools' },
      { status: 500 }
    );
  }
}
