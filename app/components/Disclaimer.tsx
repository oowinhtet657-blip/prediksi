'use client';

import { useState } from 'react';

interface DisclaimerProps {
  showDetailed?: boolean;
}

export default function Disclaimer({ showDetailed = false }: DisclaimerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="backdrop-blur-lg border-l-4 rounded-xl p-6 mb-8 shadow-2xl relative" style={{ borderLeftColor: '#FF8C00', background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(217, 119, 6, 0.1) 100%)', borderColor: 'rgba(255, 140, 0, 0.3)' }}>
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:scale-110"
<<<<<<< HEAD
        style={{ background: 'rgba(255, 140, 0, 0.3)', border: '1px solid rgba(255, 140, 0, 0.5)' }}
=======
        style={{ background: '#198f95', border: '1px solid #198f9533', color: '#fff' }}
>>>>>>> d9b09ce (Initial commit)
        aria-label="Close disclaimer"
      >
        ×
      </button>

      <div className="flex gap-4 pr-6">
        <div className="text-2xl flex-shrink-0">⚠️</div>
        <div className="flex-1">
          <h3 className="font-bold text-white mb-2" style={{ color: '#FF8C00' }}>Penting: Pengingat Tanggung Jawab</h3>
          <p className="text-slate-300 text-sm mb-3">
            Aplikasi ini adalah <strong>alat hiburan dan analisis statistik</strong> berbasis data historis semata.
          </p>
          {showDetailed && (
            <>
              <ul className="text-sm text-slate-300 space-y-1 mb-3 list-disc list-inside">
                <li>Data merupakan simulasi dan statistik dari histori</li>
                <li>Keputusan berdasarkan data ini sepenuhnya di tangan Anda</li>
                <li>Penggunaan bertanggung jawab adalah kewajiban pengguna</li>
              </ul>
            </>
          )}
          <p className="text-xs text-slate-400 font-semibold">
            Gunakan aplikasi ini dengan bijak dan bertanggung jawab.
          </p>
        </div>
      </div>
    </div>
  );
}
