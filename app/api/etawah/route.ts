import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch dari website Etawah Pools
    const response = await fetch('https://www.etawahpools.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    const html = await response.text();

    // Parse Etawah result - mencari angka hasil draw terbaru
    const resultMatch = html.match(/\d{4}\s*(?:ET|Etawah)/i) || html.match(/(?:ET|Etawah)[\s\S]*?(\d{4})/i);
    
    const result = resultMatch ? resultMatch[1] || resultMatch[0] : 'N/A';
    const numbers = result !== 'N/A' ? result.match(/\d/g) || [] : [];

    const etawahResult = {
      result: result,
      numbers: numbers,
      date: new Date().toISOString().split('T')[0],
      source: 'etawahpools.com'
    };

    return NextResponse.json({
      etawah: etawahResult,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching Etawah Pools data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from Etawah Pools' },
      { status: 500 }
    );
  }
}
