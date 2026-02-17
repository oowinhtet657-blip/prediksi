'use client';

interface PredictionGuideProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PredictionGuide({ isOpen = true, onClose }: PredictionGuideProps) {
  if (!isOpen) return null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="border rounded-2xl p-5 backdrop-blur-xl" style={{ background: '#000000', borderColor: 'rgba(255, 140, 0, 0.3)' }}>
        
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-black text-white mb-1" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #D97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>PANDUAN PENGGUNAAN PREDIKSI</h2>
          <p className="text-xs font-medium" style={{ color: '#FF8C00' }}>Memahami setiap elemen prediksi dengan mudah</p>
          <div className="w-16 h-0.5 mx-auto mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, #FF8C00 0%, #D97706 100%)' }}></div>
        </div>

        {/* Grid Panduan - Compact */}
        <div className="space-y-3">
          
          {/* 1. BBFS 5D */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <div className="flex items-start gap-2 mb-2">
              <div className="text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)' }}>1</div>
              <h3 className="text-sm font-bold text-white">BBFS 5D</h3>
            </div>
            <p className="text-slate-100 text-xs leading-tight">
              <strong>BBFS</strong> adalah 5 digit angka dasar untuk analisis yang bisa digunakan untuk mencari shio, analisis pola, dan referensi angka main.
            </p>
          </div>

          {/* 2. ANGKA MAIN */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <div className="flex items-start gap-2 mb-2">
              <div className="text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)' }}>2</div>
              <h3 className="text-sm font-bold text-white">ANGKA MAIN</h3>
            </div>
            <p className="text-slate-100 text-xs leading-tight">
              <strong>ANGKA MAIN</strong> adalah 4 digit angka fokus hasil analisis dengan probabilitas lebih tinggi berdasarkan statistik historis, pola permutasi, dan analisis tren.
            </p>
          </div>

          {/* 3. SHIO TERHUBUNG */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <div className="flex items-start gap-2 mb-2">
              <div className="text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)' }}>3</div>
              <h3 className="text-sm font-bold text-white">SHIO TERHUBUNG</h3>
            </div>
            <p className="text-slate-100 text-xs leading-tight">
              <strong>SHIO</strong> adalah 12 karakter hewan (masing-masing 9 angka) yang digunakan untuk verifikasi angka main, analisis komplementer, dan prediksi alternatif.
            </p>
          </div>

          {/* 4. LEFT & RIGHT NUMBERS */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <div className="flex items-start gap-2 mb-2">
              <div className="text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)' }}>4</div>
              <h3 className="text-sm font-bold text-white">LEFT & RIGHT NUMBERS</h3>
            </div>
            <p className="text-slate-100 text-xs leading-tight">
              <strong>Angka Kiri & Kanan</strong> adalah pasangan 4x2 digit (TOP & BOTTOM) yang merupakan ekspansi dari angka main untuk kemungkinan alternatif permainan.
            </p>
          </div>

          {/* 5. FORMULA TABLE */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <div className="flex items-start gap-2 mb-2">
              <div className="text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)' }}>5</div>
              <h3 className="text-sm font-bold text-white">FORMULA TABLE</h3>
            </div>
            <p className="text-slate-100 text-xs leading-tight">
              <strong>Tabel Formula</strong> adalah breakdown 4D ke AS (ribuan), KOP (ratusan), KEPALA (puluhan), dan EKOR (satuan) dengan 5 alternatif angka untuk setiap posisi.
            </p>
          </div>
        </div>

        {/* Disclaimer & Tips */}
        <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255, 140, 0, 0.2)' }}>
          <p className="text-xs text-center" style={{ color: '#FF8C00' }}>
            ⚠️ Untuk hiburan dan analisis statistik. Kombinasikan semua elemen untuk hasil terbaik.
          </p>
        </div>
      </div>
    </div>
  );
}
