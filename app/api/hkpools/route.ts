import { NextResponse } from 'next/server';

// Fallback data untuk demo
const generateDemoData = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Generate 5 digit angka berdasarkan jam untuk konsistensi (BBFS 5D)
  const seed = hours * 100 + minutes;
  const digits = [
    String((seed % 10)).padStart(1, '0'),
    String((Math.floor(seed / 10) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 100) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 1000) % 10)).padStart(1, '0'),
    String((Math.floor(seed / 10000) % 10)).padStart(1, '0'),
  ];
  
  return {
    numbers: digits,
    result: digits.join('')
  };
};

export async function GET() {
  try {
    // Fetch dari website HKpools
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch('https://www.hkpools1.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    const html = await response.text();
    console.log('HTML fetched, length:', html.length);

    // Parse HKPOOLS DAY section - mencari 1ST PRIZE dengan ball-1 class
    // Pattern: mencari semua digit dalam <span class="ball-1">DIGIT</span>
    const dayMatch = html.match(/HKPOOLS\s+DAY[\s\S]*?1ST\s+PRIZE[\s\S]*?(<span class="ball-1">.*?<\/span>[\s\S]{0,200}?(?=<span class="td-2"|<\/td>))/i);
    
    let dayNumbers: string[] = [];
    
    if (dayMatch) {
      // Extract semua digit dari ball-1 spans
      const ballMatches = dayMatch[1].match(/<span class="ball-1">(\d)<\/span>/g);
      if (ballMatches) {
        dayNumbers = ballMatches.map(match => {
          const digit = match.match(/>(\d)</);
          return digit ? digit[1] : '';
        }).filter(d => d !== '');
      }
    }

    console.log('Parsed day numbers:', dayNumbers);

    // Parse HKPOOLS NIGHT section - mencari 1ST PRIZE dengan ball-night class (jika ada)
    const nightMatch = html.match(/HKPOOLS\s+NIGHT[\s\S]*?1ST\s+PRIZE[\s\S]*?(<span class="ball-.*?>.*?<\/span>[\s\S]{0,200}?(?=<span class="td-2"|<\/td>))/i);
    
    let nightNumbers: string[] = [];
    
    if (nightMatch) {
      // Extract semua digit dari ball spans
      const ballMatches = nightMatch[1].match(/<span class="ball-[^"]*">(\d)<\/span>/g);
      if (ballMatches) {
        nightNumbers = ballMatches.map(match => {
          const digit = match.match(/>(\d)</);
          return digit ? digit[1] : '';
        }).filter(d => d !== '');
      }
    }

    // Gunakan demo data sebagai fallback jika parsing gagal
    const demoData = generateDemoData();
    
    // Format hasil - gunakan 6 digit lengkap
    const hkSiangResult = {
      result: dayNumbers.length >= 4 ? dayNumbers.join('') : demoData.result,
      numbers: dayNumbers,
      fullResult: dayNumbers.join(''),
      date: new Date().toISOString().split('T')[0],
      source: 'hkpools1.com',
      isFallback: dayNumbers.length === 0
    };

    const hkMalamResult = {
      result: nightNumbers.length >= 4 ? nightNumbers.join('') : demoData.result,
      numbers: nightNumbers,
      fullResult: nightNumbers.join(''),
      date: new Date().toISOString().split('T')[0],
      source: 'hkpools1.com',
      isFallback: nightNumbers.length === 0
    };

    return NextResponse.json({
      hkSiang: hkSiangResult,
      hkMalam: hkMalamResult,
      timestamp: new Date().toISOString(),
      debug: {
        dayFound: dayNumbers.length > 0,
        nightFound: nightNumbers.length > 0,
        dayCount: dayNumbers.length,
        nightCount: nightNumbers.length
      }
    }, {
      headers: {
        'Cache-Control': 'public, max-age=30, s-maxage=30'
      }
    });
  } catch (error) {
    console.error('Error fetching HKpools data:', error);
    
    // Return fallback data jika fetch gagal
    const demoData = generateDemoData();
    return NextResponse.json({
      hkSiang: {
        result: demoData.result,
        numbers: demoData.numbers,
        fullResult: demoData.result,
        date: new Date().toISOString().split('T')[0],
        source: 'hkpools1.com (fallback)',
        isFallback: true
      },
      hkMalam: {
        result: demoData.result,
        numbers: demoData.numbers,
        fullResult: demoData.result,
        date: new Date().toISOString().split('T')[0],
        source: 'hkpools1.com (fallback)',
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
