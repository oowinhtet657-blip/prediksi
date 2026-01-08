'use client';

import { pasaranList } from '@/app/utils/shio';

interface PasaranMenuProps {
  selectedPasaran: string;
  onSelectPasaran: (pasaranId: string) => void;
}

export default function PasaranMenu({ selectedPasaran, onSelectPasaran }: PasaranMenuProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-3 p-6 rounded-xl">
    
        <h2 className="text-white font-bold text-lg">Pilih Pasaran:</h2>
        <div className="grid grid-cols-2 md:grid-cols-34 gap-3">
          {pasaranList.map((pasaran) => (
            <button
              key={pasaran.id}
              onClick={() => onSelectPasaran(pasaran.id)}
              className={`p-2 rounded-lg font-bold text-sm transition duration-200 border-2 ${
                selectedPasaran === pasaran.id
                  ? 'shadow-lg scale-105'
                  : 'hover:scale-105'
              }`}
              style={selectedPasaran === pasaran.id ? {
                background: 'linear-gradient(135deg, #FFB800 0%, #FF9500 100%)',
                borderColor: 'none',
                color: '#001F73'
              } : {
                background: 'linear-gradient(135deg, #1049e9 0%, #1a0471 100%)',
                borderColor: '#00d5ffff',
                color: '#ffffff'
              }}
            >
              <div className="font-bold">{pasaran.code}</div>
              <div className="text-xs opacity-90">{pasaran.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
