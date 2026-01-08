import { NextResponse } from 'next/server';

// Fallback data untuk demo
const generateDemoData = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Generate 6 digit angka berdasarkan jam untuk konsistensi
  const seed = (hours + minutes) * 123; // Different seed than HK
  const digits = [
    String((seed % 10)).padStart(1, '0'),
    String((Math.floor(seed / 10) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 100) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 1000) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 10000) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 100000) % 10)).padStart(1, '0'),
  ];
  
  return {
    numbers: digits,
    result: digits.join('')
  };
};

export async function GET() {
  try {
    // Fetch dari website Sydney Pools
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch('https://www.sydneypoolstoday.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    const html = await response.text();
    console.log('Sydney HTML fetched, length:', html.length);

    // Parse 1st Prize dari img tag dengan pattern: bola2/[warna]_[digit].jpg
    // Cari section "1st Prize" dan extract semua digit dari img tags
    const firstPrizeMatch = html.match(/1st\s+Prize[\s\S]*?<td[\s\S]*?<\/td>/i);
    
    let sydneyNumbers: string[] = [];
    
    if (firstPrizeMatch) {
      // Extract semua digit dari URL img: bola2/[color]_[digit].jpg
      const imgMatches = firstPrizeMatch[0].match(/bola2\/[a-z]+_(\d)\.jpg/gi);
      if (imgMatches) {
        sydneyNumbers = imgMatches.map(match => {
          const digit = match.match(/_(\d)\./);
          return digit ? digit[1] : '';
        }).filter(d => d !== '');
      }
    }

    console.log('Parsed sydney numbers:', sydneyNumbers);

    // Gunakan demo data sebagai fallback jika parsing gagal
    const demoData = generateDemoData();
    
    // Format hasil - gunakan 6 digit lengkap
    const sydneyResult = {
      result: sydneyNumbers.length >= 4 ? sydneyNumbers.join('') : demoData.result,
      numbers: sydneyNumbers,
      fullResult: sydneyNumbers.join(''),
      date: new Date().toISOString().split('T')[0],
      source: 'sydneypoolstoday.com',
      isFallback: sydneyNumbers.length === 0
    };

    return NextResponse.json({
      sydney: sydneyResult,
      timestamp: new Date().toISOString(),
      debug: {
        sydneyFound: sydneyNumbers.length > 0,
        sydneyCount: sydneyNumbers.length
      }
    }, {
      headers: {
        'Cache-Control': 'public, max-age=30, s-maxage=30'
      }
    });
  } catch (error) {
    console.error('Error fetching Sydney Pools data:', error);
    
    // Return fallback data jika fetch gagal
    const demoData = generateDemoData();
    return NextResponse.json({
      sydney: {
        result: demoData.result,
        numbers: demoData.numbers,
        fullResult: demoData.result,
        date: new Date().toISOString().split('T')[0],
        source: 'sydneypoolstoday.com (fallback)',
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
