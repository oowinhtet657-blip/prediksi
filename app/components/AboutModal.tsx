'use client';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#01040c] via-[#003DA6] to-[#00264D] p-4">
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[9999] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: '#FFB800' }}
          aria-label="Close modal"
        >
          <span className="text-xl font-bold text-blue-900">✕</span>
        </button>

        {/* About Content */}
        <div className="max-w-4xl mx-auto pt-4 pb-8">
          {/* Header */}
          <div className="text-center mb-8 text-white">
            <h1 className="text-4xl font-black mb-3">TENTANG HENING4D</h1>
            <p className="text-cyan-300" style={{ color: '#00B8E6' }}>Platform Analisis Data Togel Terpercaya</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Section 1: Pengenalan */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span style={{ color: '#FFB800' }}>●</span>
                Apa Itu HENING4D?
              </h2>
              <p className="text-gray-200 leading-relaxed">
                HENING4D adalah platform analisis data togel yang menyediakan prediksi berdasarkan analisis statistik dan pola historis dari berbagai pasaran togel terpercaya. Platform kami menggunakan metode analisis yang telah terbukti efektif dalam mengidentifikasi tren dan pola dalam data togel historis.
              </p>
            </div>

            {/* Section 2: Visi & Misi */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span style={{ color: '#FFB800' }}>●</span>
                Visi & Misi
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2" style={{ color: '#00B8E6' }}>Visi</h3>
                  <p className="text-gray-200">Menjadi platform prediksi togel terdepan yang memberikan analisis akurat dan terpercaya untuk seluruh penggemar togel di Indonesia.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-300 mb-2" style={{ color: '#00B8E6' }}>Misi</h3>
                  <ul className="text-gray-200 space-y-2 ml-4">
                    <li>✓ Menyediakan analisis data togel yang transparan dan berbasis statistik</li>
                    <li>✓ Membantu pengguna memahami pola dan tren dalam permainan togel</li>
                    <li>✓ Memberikan edukasi tentang metode analisis prediksi yang bertanggung jawab</li>
                    <li>✓ Terus berinovasi dalam mengembangkan algoritma dan metode analisis yang lebih baik</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Metode Analisis */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span style={{ color: '#FFB800' }}>●</span>
                Metode Analisis Kami
              </h2>
              <div className="space-y-3 text-gray-200">
                <div>
                  <h4 className="font-bold text-white mb-2">1. Analisis Statistik</h4>
                  <p>Kami menganalisis frekuensi keluarnya angka berdasarkan data historis untuk mengidentifikasi angka-angka yang memiliki probabilitas lebih tinggi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">2. Analisis Pola & Tren</h4>
                  <p>Mempelajari pola berulang dan tren jangka panjang dalam hasil togel untuk membantu memprediksi kemungkinan hasil berikutnya.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">3. Sistem Shio (Zodiak)</h4>
                  <p>Menggunakan sistem zodiak tradisional yang telah lama dipercaya dalam menentukan angka-angka berdasarkan tanggal kelahiran dan karakteristik shio.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">4. Formula Kombinasi</h4>
                  <p>Menggabungkan berbagai metode analisis untuk menghasilkan prediksi yang lebih komprehensif dan akurat.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Pasaran Togel */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span style={{ color: '#FFB800' }}>●</span>
                Pasaran Yang Kami Layani
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Singapore (SGP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Hong Kong (HK)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Sydney (SYD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Malaysia (ML)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>HK Pools</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Toto Wuhan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Etawah</span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: '#FFB800' }}>→</span> <span>Taiping</span>
                </div>
              </div>
            </div>

            {/* Section 5: Disclaimer */}
            <div className="bg-red-950/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-500">
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span style={{ color: '#FFB800' }}>⚠</span>
                Disclaimer Penting
              </h2>
              <div className="text-gray-200 space-y-3 text-sm">
                <p>
                  HENING4D adalah aplikasi analisis dan hiburan semata. Prediksi yang kami berikan didasarkan pada analisis statistik data historis dan bukan jaminan hasil yang akurat. Permainan togel memiliki unsur keberuntungan yang tidak dapat diprediksi dengan sempurna.
                </p>
                <p>
                  Pengguna harus bertanggung jawab atas keputusan mereka sendiri dan tidak boleh mengandalkan sepenuhnya pada prediksi kami untuk keputusan finansial. Gunakan layanan kami secara bertanggung jawab dan hanya untuk hiburan.
                </p>
                <p className="font-bold">
                  Kami tidak bertanggung jawab atas kerugian finansial yang mungkin terjadi dari penggunaan aplikasi ini.
                </p>
              </div>
            </div>

            {/* Section 6: Hubungi Kami */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <span style={{ color: '#FFB800' }}>●</span>
                Hubungi Kami
              </h2>
              <p className="text-gray-200 mb-4">
                Untuk pertanyaan, saran, atau masukan mengenai layanan HENING4D, silakan gunakan menu Help pada aplikasi ini atau kunjungi halaman Bantuan kami.
              </p>
              <div className="bg-blue-900/50 p-4 rounded-lg border border-cyan-400/30">
                <p className="text-cyan-300" style={{ color: '#00B8E6' }}>
                  Terima kasih telah mempercayai HENING4D sebagai platform analisis prediksi togel Anda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
