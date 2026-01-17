'use client';

import Link from 'next/link';
import { pasaranList } from '@/app/utils/shio';

interface PasaranMenuProps {
  selectedPasaran: string;
  onSelectPasaran: (pasaranId: string) => void;
}

const pasaranRoutes: Record<string, string> = {
  'hongkong': '/hongkong',
  'sydney': '/sydney',
  'singapore': '/singapore',
};

export default function PasaranMenu({ selectedPasaran, onSelectPasaran }: PasaranMenuProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-3 p-6 rounded-xl">
    
        <h2 className="text-white font-bold text-lg">Pilih Pasaran:</h2>
        <div className="flex flex-col gap-3">
          {pasaranList.map((pasaran) => (
            <Link
              key={pasaran.id}
              href={pasaranRoutes[pasaran.id] || '#'}
              className="p-2 rounded-lg font-bold text-sm transition duration-200 border-2 w-full text-center hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1049e9 0%, #1a0471 100%)',
                borderColor: '#00d5ffff',
                color: '#ffffff'
              }}
            >
              <div className="font-bold">{pasaran.code}</div>
              <div className="text-xs opacity-90">{pasaran.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
