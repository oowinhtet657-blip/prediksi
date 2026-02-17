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
      <div className="flex flex-col gap-2 p-4 rounded-xl">
    
        <h2 className="text-white font-bold text-lg drop-shadow-lg">Pilih Pasaran:</h2>
        <div className="flex flex-col gap-2.5">
          {pasaranList.map((pasaran) => (
            <Link
              key={pasaran.id}
              href={pasaranRoutes[pasaran.id] || '#'}
              className="p-3 rounded-xl font-bold text-sm transition duration-150 border-2 w-full text-center hover:scale-105 shadow-lg hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 50%, #D97706 100%)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#4b1300',
                
              }}
            >
              <div className="font-bold text-base">{pasaran.code}</div>
              <div className="text-xs opacity-95 mt-1">{pasaran.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
