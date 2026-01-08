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
    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-8 shadow-md relative">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-200"
        aria-label="Close disclaimer"
      >
        ×
      </button>

      <div className="flex gap-4 pr-6">
        <div className="text-2xl flex-shrink-0">⚠️</div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">Penting: Pengingat Tanggung Jawab</h3>
          <p className="text-gray-800 text-sm mb-3">
            Aplikasi ini adalah <strong>alat hiburan dan analisis statistik</strong> berbasis data historis semata.
          </p>
          {showDetailed && (
            <>
              <ul className="text-sm text-gray-800 space-y-1 mb-3 list-disc list-inside">
                <li>Data merupakan simulasi dan statistik dari histori</li>
                <li>Keputusan berdasarkan data ini sepenuhnya di tangan Anda</li>
                <li>Penggunaan bertanggung jawab adalah kewajiban pengguna</li>
              </ul>
            </>
          )}
          <p className="text-xs text-gray-700 font-semibold">
            Gunakan aplikasi ini dengan bijak dan bertanggung jawab.
          </p>
        </div>
      </div>
    </div>
  );
}
