'use client';

export default function PredictionGuide() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-8">
      <div className="border-4 rounded-lg p-8" style={{ background: 'linear-gradient(to bottom, #001F73, #003DA6)', borderColor: '#00B8E6' }}>
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white mb-2">PANDUAN PENGGUNAAN PREDIKSI</h2>
          <p className="text-sm" style={{ color: '#00B8E6' }}>Memahami setiap elemen prediksi</p>
        </div>

        {/* Grid Panduan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. BBFS 5D */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#001F73' }}>1</div>
              <h3 className="text-xl font-black" style={{ color: '#001F73' }}>BBFS 5D</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>BBFS (Bandar Besar Full Set)</strong> adalah 5 digit angka yang merupakan angka dasar untuk analisis. Angka ini bisa digunakan untuk:
              <ul className="list-disc list-inside mt-2 ml-2">
                <li>Mencari shio terkait</li>
                <li>Analisis pola historis</li>
                <li>Referensi angka main</li>
              </ul>
            </p>
          </div>

          {/* 2. ANGKA MAIN */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#001F73' }}>2</div>
              <h3 className="text-xl font-black" style={{ color: '#001F73' }}>ANGKA MAIN</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>ANGKA MAIN</strong> adalah 4 digit angka fokus hasil analisis yang dianggap memiliki probabilitas lebih tinggi berdasarkan:
              <ul className="list-disc list-inside mt-2 ml-2">
                <li>Statistik historis</li>
                <li>Pola permutasi</li>
                <li>Analisis tren</li>
              </ul>
            </p>
          </div>

          {/* 3. SHIO TERHUBUNG */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#001F73' }}>3</div>
              <h3 className="text-xl font-black" style={{ color: '#001F73' }}>SHIO TERHUBUNG</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>SHIO (Zodiak China)</strong> adalah representasi 12 karakter hewan yang terhubung dengan angka. Setiap shio terdiri dari 9 angka spesifik. Gunakan untuk:
              <ul className="list-disc list-inside mt-2 ml-2">
                <li>Verifikasi angka main</li>
                <li>Analisis komplementer</li>
                <li>Prediksi alternatif</li>
              </ul>
            </p>
          </div>

          {/* 4. LEFT & RIGHT NUMBERS */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#001F73' }}>4</div>
              <h3 className="text-xl font-black" style={{ color: '#001F73' }}>LEFT & RIGHT NUMBERS</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Angka Kiri & Kanan</strong> adalah pasangan 4x2 digit yang merupakan ekspansi dari angka main. Masing-masing pasang terdiri dari:
              <ul className="list-disc list-inside mt-2 ml-2">
                <li><strong>TOP</strong>: Angka atas</li>
                <li><strong>BOTTOM</strong>: Angka bawah</li>
              </ul>
              Gunakan untuk kemungkinan alternatif permainan.
            </p>
          </div>

          {/* 5. FORMULA TABLE */}
          <div className="bg-white rounded-lg p-6 md:col-span-2">
            <div className="flex items-start gap-3 mb-4 flex-wrap">
              <div className="text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#001F73' }}>5</div>
              <h3 className="text-lg md:text-xl font-black break-words" style={{ color: '#001F73' }}>FORMULA TABLE</h3>
            </div>
            <p className="text-gray-600 text-xs font-semibold mb-3" style={{ color: '#001F73' }}>(AS/KOP/KEPALA/EKOR)</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              <strong>Tabel Formula</strong> adalah breakdown nilai 4D ke dalam komponen:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 rounded border" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
                <p className="font-bold text-sm mb-1" style={{ color: '#001F73' }}>AS</p>
                <p className="text-xs text-gray-600">Angka pertama (ribuan)</p>
              </div>
              <div className="p-3 rounded border" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
                <p className="font-bold text-sm mb-1" style={{ color: '#001F73' }}>KOP</p>
                <p className="text-xs text-gray-600">Angka kedua (ratusan)</p>
              </div>
              <div className="p-3 rounded border" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
                <p className="font-bold text-sm mb-1" style={{ color: '#001F73' }}>KEPALA</p>
                <p className="text-xs text-gray-600">Angka ketiga (puluhan)</p>
              </div>
              <div className="p-3 rounded border" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
                <p className="font-bold text-sm mb-1" style={{ color: '#001F73' }}>EKOR</p>
                <p className="text-xs text-gray-600">Angka keempat (satuan)</p>
              </div>
            </div>
            <p className="text-gray-700 text-xs mt-4 italic text-center">
              Tabel ini menampilkan 5 angka alternatif untuk setiap posisi 4D
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-lg border-2" style={{ backgroundColor: 'rgba(255, 184, 0, 0.1)', borderColor: '#FFB800' }}>
          <p className="text-sm font-semibold text-center" style={{ color: '#FFB800' }}>
            ⚠️ <strong>PENTING:</strong> Semua prediksi ini adalah untuk tujuan hiburan dan analisis statistik semata. 
            Bukan merupakan jaminan hasil 100% Gunakan dengan bijak!
          </p>
        </div>

        {/* Tips */}
        <div className="mt-6 p-4 rounded-lg border-2" style={{ backgroundColor: '#E6F2FF', borderColor: '#00B8E6' }}>
          <h4 className="font-black mb-2" style={{ color: '#001F73' }}>💡 TIPS PENGGUNAAN:</h4>
          <ul className="text-sm space-y-2" style={{ color: '#001F73' }}>
            <li>✓ Gunakan ANGKA MAIN sebagai fokus utama prediksi Anda</li>
            <li>✓ Verifikasi dengan SHIO untuk analisis lebih mendalam</li>
            <li>✓ Gunakan FORMULA TABLE untuk variasi permainan</li>
            <li>✓ Bandingkan dengan LAST RESULT untuk melihat tren</li>
            <li>✓ Jangan gunakan hanya satu elemen, kombinasikan semuanya</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
