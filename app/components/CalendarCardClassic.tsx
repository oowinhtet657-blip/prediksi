'use client';

import type { CalendarData } from '@/app/types/calendar';
import { getAllShiosFromAngka } from '@/app/utils/shio';

interface CalendarCardClassicProps {
  data: CalendarData;
}

// Jadwal Pasaran
const scheduleData: Record<string, { link: string; closingTime: string; drawTime: string; holidays?: number[] }> = {
  'hongkong-siang': {
    link: 'https://www.hkpools1.com/',
    closingTime: '10:30 WIB',
    drawTime: '11:00 WIB'
  },
  'sydney': {
    link: 'https://www.sydneypoolstoday.com/',
    closingTime: '13:00 WIB',
    drawTime: '14:00 WIB'
  },
  'taiping': {
    link: 'https://www.taipingpools.com/results/',
    closingTime: '14:30 WIB',
    drawTime: '15:00 WIB'
  },
  'singapore': {
    link: 'https://www.singaporepools.com.sg/en/product/Pages/4d_results.aspx',
    closingTime: '17:25 WIB',
    drawTime: '17:45 WIB',
    holidays: [2, 5] // Tuesday (2) and Friday (5) - 0=Sunday, 1=Monday, etc.
  },
  'malaysia': {
    link: 'https://www.malaysialottery.net/',
    closingTime: '18:30 WIB',
    drawTime: '19:00 WIB'
  },
  'etawah': {
    link: 'https://www.etawahpools.com/',
    closingTime: '19:00 WIB',
    drawTime: '19:30 WIB'
  },
  'hongkong': {
    link: 'https://www.hongkongpools.com/',
    closingTime: '22:15 WIB',
    drawTime: '23:00 WIB'
  },
  'totowuhan': {
    link: 'https://www.totowuhan.com/',
    closingTime: 'Tiap 3 jam',
    drawTime: 'Tiap 3 jam'
  }
};

export default function CalendarCardClassic({ data }: CalendarCardClassicProps) {
  const shios = getAllShiosFromAngka(data.angkaMain);
  const schedule = scheduleData[data.pasaran];
  
  // Check if today is a holiday for this pasaran
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sunday, 1=Monday, 2=Tuesday, etc.
  const isHoliday = schedule?.holidays?.includes(dayOfWeek);

  return (
    <div className="w-full mx-auto px-2">
      {/* Holiday Notice for Singapore */}
      {isHoliday && data.pasaran === 'singapore' && (
        <div className="mb-4 p-3 bg-yellow-100 border-2 border-yellow-600 rounded-lg text-center">
          <p className="text-yellow-800 font-bold text-sm">⚠️ PASARAN TUTUP</p>
          <p className="text-yellow-700 text-xs">Pasaran Singapore tidak beroperasi pada hari Selasa dan Jumat</p>
          <p className="text-yellow-700 text-xs mt-1">Prediksi tidak tersedia hari ini</p>
        </div>
      )}
      
      {/* Main Card - Border Tebal */}
      <div className={`border-4 bg-white rounded-lg shadow-2xl ${isHoliday && data.pasaran === 'singapore' ? 'opacity-50 pointer-events-none' : ''}`}
        style={{ borderColor: '#001F73' }}>
        
        {/* Header */}
        <div className="text-center bg-white border-b-4 p-3"
          style={{ borderColor: '#001F73' }}>
          <p className="font-bold text-xs tracking-wider" style={{ color: '#001F73' }}>HENING4D PREDIKSI</p>
          <h1 className="text-xl font-black leading-tight" style={{ color: '#001F73' }}>KALENDER TOGEL</h1>
          <h2 className="text-lg font-black mt-0.5" style={{ color: '#001F73' }}>{data.market}</h2>
        </div>

        {/* Main Content - Side by Side */}
        <div className="flex flex-row">
          
          {/* Left Side - Numbers & Date */}
          <div className="w-1/2 p-3 border-r-4 flex flex-col items-center justify-center"
            style={{ borderColor: '#001F73' }}>
            <div className="flex items-center justify-center gap-1.5 flex-wrap w-full">
              {/* Top 2D Label */}
              <div className="w-full text-center mb-1.5">
                <p className="font-black text-sm tracking-widest" style={{ color: '#001F73' }}>TOP 2D</p>
              </div>
              
              {/* Left Numbers Grid */}
              <div className="flex flex-col gap-0.5">
                {data.leftNumbers.map((num, idx) => (
                  <div key={idx} className="flex gap-0.5">
                    <div className="w-8 h-8 border-2 text-white flex items-center justify-center font-black text-xs rounded" style={{ borderColor: '#001F73', backgroundColor: '#001F73' }}>
                      {num.top}
                    </div>
                    <div className="w-8 h-8 border-2 text-white flex items-center justify-center font-black text-xs rounded" style={{ borderColor: '#001F73', backgroundColor: '#001F73' }}>
                      {num.bottom}
                    </div>
                  </div>
                ))}
              </div>

              {/* Large Center Date */}
              <div className="text-center px-1.5">
                <div className="text-4xl font-black leading-none" style={{ color: '#001F73' }}>
                  {data.displayDate}
                </div>
              </div>

              {/* Right Numbers Grid */}
              <div className="flex flex-col gap-0.5">
                {data.rightNumbers.map((num, idx) => (
                  <div key={idx} className="flex gap-0.5">
                    <div className="w-8 h-8 border-2 text-white flex items-center justify-center font-black text-xs rounded" style={{ borderColor: '#001F73', backgroundColor: '#001F73' }}>
                      {num.top}
                    </div>
                    <div className="w-8 h-8 border-2 text-white flex items-center justify-center font-black text-xs rounded" style={{ borderColor: '#001F73', backgroundColor: '#001F73' }}>
                      {num.bottom}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Below */}
            <div className="text-center mt-3 w-full">
              <p className="font-black text-xs tracking-widest" style={{ color: '#001F73' }}>
                {data.day.toUpperCase()}
              </p>
              <p className="font-black text-xs tracking-widest" style={{ color: '#001F73' }}>
                {data.month}, {data.year}
              </p>

              {/* Source Links with Schedule */}
              {schedule && (
                <div className="mt-2 pt-2 w-full" style={{ borderTop: '1px solid #00B8E6' }}>
                  <a 
                    href={schedule.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-white font-bold text-xs px-2 py-0.5 rounded transition mb-1.5 hover:opacity-80" 
                    style={{ backgroundColor: '#08246fff' }}
                  >
                     Kunjungi Website
                  </a>
                  
                  <div className="mt-1.5 text-xs font-semibold space-y-0.5" style={{ color: '#001F73' }}>
                    <div className="flex justify-center gap-0.5">
                      <span className="px-1.5 py-0.5 rounded border text-xs whitespace-nowrap" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
                         Tutup: <strong>{schedule.closingTime}</strong>
                      </span>
                    </div>
                    <div className="flex justify-center gap-0.5">
                      <span className="px-1.5 py-0.5 rounded border text-xs whitespace-nowrap" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
                         Diundi: <strong>{schedule.drawTime}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="w-1/2 p-3 flex flex-col justify-between">
            {/* BBFS & ANGKA MAIN */}
            <div className="grid grid-cols-1 gap-1.5 mb-2">
              <div className="text-white p-2 rounded text-center" style={{ backgroundColor: '#001F73' }}>
                <p className="text-xs font-bold tracking-wider mb-0.5">BBFS 5D</p>
                <p className="text-lg font-black tracking-wider">{data.bbfs}</p>
              </div>
              <div className="text-white p-2 rounded text-center" style={{ backgroundColor: '#001F73' }}>
                <p className="text-xs font-bold tracking-wider mb-0.5">ANGKA MAIN</p>
                <p className="text-lg font-black tracking-wider">{data.angkaMain}</p>
              </div>
            </div>

            {/* Shio Display */}
            {shios.length > 0 && (
              <div className="mb-3 p-1.5 rounded" style={{ backgroundColor: '#E6F2FF' }}>
                <p className="text-xs font-bold mb-1.5 tracking-wider text-center" style={{ color: '#001F73' }}>SHIO TERHUBUNG</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {shios.map((shio) => (
                    <div 
                      key={shio} 
                      className="relative overflow-hidden rounded-lg border-2 flex flex-col"
                      style={{ width: '75px', borderColor: '#001F73' }}
                    >
                      {/* Image Container */}
                      <div 
                        className="relative flex-1"
                        style={{
                          minHeight: '60px',
                          backgroundImage: `url('/images/shio/${shio.toLowerCase()}.webp')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        {/* Light overlay to enhance visibility */}
                        <div className="absolute inset-0 bg-white/10"></div>
                      </div>
                      
                      {/* Text at bottom - with semi-transparent background */}
                      <div className="px-1 py-0.5 text-center" style={{ backgroundColor: 'rgba(0, 31, 115, 0.9)' }}>
                        <p className="text-xs font-bold text-white">{shio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formula Table */}
            <div className="mb-0">
              <p className="text-xs font-bold text-white px-2 py-1 rounded-t text-center tracking-wider mb-0" style={{ backgroundColor: '#001F73' }}>
                ANGKA TARUNG
              </p>
              <div className="border-2 border-t-0 overflow-x-auto" style={{ borderColor: '#001F73' }}>
                <table className="w-full text-xs">
                  <tbody>
                    {['as', 'kop', 'kepala', 'ekor'].map((row, rowIdx) => (
                      <tr key={row} className={rowIdx < 3 ? 'border-b-2' : ''} style={rowIdx < 3 ? { borderColor: '#001F73' } : {}}>
                        <td className="text-white font-black w-10 p-0.5 text-center border-r-2 text-xs" style={{ backgroundColor: '#001F73', borderColor: '#001F73' }}>
                          {row.toUpperCase()}
                        </td>
                        {data.formulaTable[row as keyof typeof data.formulaTable].map((num, colIdx) => (
                          <td 
                            key={colIdx} 
                            className={`p-0.5 text-center font-bold border-r-2 text-xs ${
                              colIdx === 4 ? 'border-r-0' : ''
                            }`}
                            style={{ borderColor: '#001F73', color: '#001F73' }}
                          >
                            {num}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
