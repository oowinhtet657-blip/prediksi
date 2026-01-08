import { NextResponse } from 'next/server';

// Fallback data untuk demo
const generateDemoData = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Generate 4 digit angka berdasarkan jam untuk konsistensi
  const seed = (hours + minutes) * 456; // Different seed
  const digits = [
    String((seed % 10)).padStart(1, '0'),
    String((Math.floor(seed / 10) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 100) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 1000) % 10)).padStart(1, '0'),
  ];
  
  return {
    numbers: digits,
    result: digits.join('')
  };
};

export async function GET() {
  try {
    // Fetch dari website Taiping Pools
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch('https://www.taipingpools.com/results/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    const html = await response.text();
    console.log('Taiping HTML fetched, length:', html.length);

    // Parse 1st Prize dari struktur: <span class="box-number">DIGIT</span>
    // Cari section "1st Prize" dan extract digit dari span tags
    const firstPrizeMatch = html.match(/1st\s+Prize[\s\S]*?(<span class="box-number">[\s\S]*?<\/span>[\s\S]{0,200}?)(?=<div|<\/div>)/i);
    
    let taipingNumbers: string[] = [];
    
    if (firstPrizeMatch) {
      // Extract semua digit dari <span class="box-number">DIGIT</span>
      const digitMatches = firstPrizeMatch[1].match(/<span class="box-number">(\d)<\/span>/g);
      if (digitMatches) {
        taipingNumbers = digitMatches.map(match => {
          const digit = match.match(/>(\d)</);
          return digit ? digit[1] : '';
        }).filter(d => d !== '');
      }
    }

    console.log('Parsed taiping numbers:', taipingNumbers);

    // Gunakan demo data sebagai fallback jika parsing gagal
    const demoData = generateDemoData();
    
    // Format hasil - gunakan 4 digit lengkap
    const taipingResult = {
      result: taipingNumbers.length >= 4 ? taipingNumbers.join('') : demoData.result,
      numbers: taipingNumbers,
      fullResult: taipingNumbers.join(''),
      date: new Date().toISOString().split('T')[0],
      source: 'taipingpools.com',
      isFallback: taipingNumbers.length === 0
    };

    return NextResponse.json({
      taiping: taipingResult,
      timestamp: new Date().toISOString(),
      debug: {
        taipingFound: taipingNumbers.length > 0,
        taipingCount: taipingNumbers.length
      }
    }, {
      headers: {
        'Cache-Control': 'public, max-age=30, s-maxage=30'
      }
    });
  } catch (error) {
    console.error('Error fetching Taiping Pools data:', error);
    
    // Return fallback data jika fetch gagal
    const demoData = generateDemoData();
    return NextResponse.json({
      taiping: {
        result: demoData.result,
        numbers: demoData.numbers,
        fullResult: demoData.result,
        date: new Date().toISOString().split('T')[0],
        source: 'taipingpools.com (fallback)',
        isFallback: true
      },
      timestamp: new Date().toISOString(),
      error: 'Using fallback data - fetch failed'
    }, {
      headers: {
        'Cache-Control': 'public, max-age=30, s-maxage=30'
      }
    });
  }
}
