'use client';

import { ShioName, shioData } from '@/app/utils/shio';

interface ShioDisplayProps {
  shios: ShioName[];
  title?: string;
}

export default function ShioDisplay({ shios, title = "SHIO YANG TERLIBAT" }: ShioDisplayProps) {
  if (shios.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 bg-blue-50 rounded-lg overflow-hidden border-2 border-primary">
      <div className="bg-primary text-white px-4 py-3">
        <p className="text-sm font-bold">🐉 {title}</p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {shios.map((shio) => {
            const imagePath = `/images/shio/${shio.toLowerCase()}.webp`;
            return (
            <div 
              key={shio} 
              className="bg-white border-2 border-primary rounded-lg p-4 relative overflow-hidden min-h-32 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
              style={{
                backgroundImage: `url('${imagePath}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay'
              }}
            >
              {/* Overlay yang lebih tipis untuk readability */}
              <div className="absolute inset-0 bg-white/60"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center w-full">
                <div className="font-bold text-primary text-center mb-2 text-lg">{shio}</div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {shioData[shio].map((num) => (
                    <span
                      key={num}
                      className="bg-primary text-white text-xs font-bold px-2 py-1 rounded"
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
