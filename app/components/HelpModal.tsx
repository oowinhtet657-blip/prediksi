'use client';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string; // Format: 62812345678 (tanpa + atau 0)
}

export default function HelpModal({ isOpen, onClose, whatsappNumber = '6281234567890' }: HelpModalProps) {
  if (!isOpen) return null;

  // Generate WhatsApp link
  const whatsappMessage = encodeURIComponent('Halo, saya ingin bertanya tentang HENING4D');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

        {/* Help Content */}
        <div className="max-w-4xl mx-auto pt-4 pb-8">
          {/* Header */}
          <div className="text-center mb-8 text-white">
            <h1 className="text-4xl font-black mb-3">BANTUAN &amp; DUKUNGAN</h1>
            <p className="text-cyan-300" style={{ color: '#00B8E6' }}>Hubungi tim kami untuk bantuan lebih lanjut</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Section 1: FAQ */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" style={{ color: '#FFB800' }} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                Pertanyaan Umum (FAQ)
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Bagaimana cara menggunakan HENING4D?</h4>
                  <p className="text-gray-200">Pilih pasaran togel yang Anda inginkan dari menu di halaman utama. Sistem akan menampilkan prediksi berdasarkan analisis statistik dan pola historis data togel.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Apakah prediksi HENING4D akurat 100%?</h4>
                  <p className="text-gray-200">Tidak ada sistem prediksi yang akurat 100%. HENING4D menggunakan analisis statistik dan pola historis yang membantu mengidentifikasi kemungkinan, bukan kepastian. Permainan togel tetap memiliki unsur keberuntungan yang tinggi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Apa itu FS 5D?</h4>
                  <p className="text-gray-200">FS (Full Set) 5D adalah 5 digit angka dasar untuk analisis. Angka ini bisa digunakan untuk berbagai permainan togel dengan metode kombinasi yang berbeda.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Apa perbedaan BBFS dan ANGKA MAIN?</h4>
                  <p className="text-gray-200">BBFS (Bolak Balik Full Set) adalah angka-angka yang bisa diacak sesuai keinginan, sementara ANGKA MAIN adalah 4 digit yang diprediksi paling kuat dan memiliki probabilitas keluar lebih tinggi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Apa itu Shio?</h4>
                  <p className="text-gray-200">Shio adalah sistem zodiak tradisional yang terdiri dari 12 karakter (tikus, sapi, harimau, dll). Sistem ini digunakan untuk menentukan angka berdasarkan tanggal kelahiran atau tanggal tertentu.</p>
                </div>
              </div>
            </div>

            {/* Section 2: Petunjuk Penggunaan */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" style={{ color: '#FFB800' }} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
                Petunjuk Langkah Demi Langkah
              </h2>
              <ol className="space-y-3 text-gray-200">
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300 min-w-fit" style={{ color: '#FFB800' }}>Langkah 1:</span>
                  <span>Buka aplikasi HENING4D dan lihat menu pasaran di halaman utama</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300 min-w-fit" style={{ color: '#FFB800' }}>Langkah 2:</span>
                  <span>Pilih pasaran togel yang Anda inginkan (SGP, HK, Sydney, dll)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300 min-w-fit" style={{ color: '#FFB800' }}>Langkah 3:</span>
                  <span>Aplikasi akan menampilkan prediksi dengan data hari ini atau hari sebelumnya</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300 min-w-fit" style={{ color: '#FFB800' }}>Langkah 4:</span>
                  <span>Gunakan tombol navigasi (prev/next) untuk melihat prediksi hari lain</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300 min-w-fit" style={{ color: '#FFB800' }}>Langkah 5:</span>
                  <span>Baca Panduan Pengguna untuk memahami setiap elemen prediksi lebih detail</span>
                </li>
              </ol>
            </div>

            {/* Section 3: Troubleshooting */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" style={{ color: '#FFB800' }} viewBox="0 0 24 24">
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.16.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.47.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.16-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.47-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                </svg>
                Troubleshooting
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white mb-2">Aplikasi loading lama?</h4>
                  <p className="text-gray-200">Pastikan koneksi internet Anda stabil. Coba refresh halaman atau tutup dan buka kembali aplikasi.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Data tidak tampil?</h4>
                  <p className="text-gray-200">Pastikan Anda sudah memilih pasaran togel terlebih dahulu. Data akan muncul setelah pasaran dipilih.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Prediksi tidak update?</h4>
                  <p className="text-gray-200">Data prediksi diupdate secara berkala. Coba refresh halaman untuk mendapatkan data terbaru.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Masalah teknis lainnya?</h4>
                  <p className="text-gray-200">Hubungi tim support kami melalui WhatsApp untuk bantuan lebih lanjut.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Hubungi Support */}
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-6 border-2" style={{ borderColor: '#FFB800' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" style={{ color: '#FFB800' }} viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
                Hubungi Tim Support Kami
              </h2>
              <p className="text-gray-200 mb-6">
                Jika Anda memiliki pertanyaan lebih lanjut atau mengalami masalah yang tidak tercantum di atas, jangan ragu untuk menghubungi kami melalui WhatsApp. Tim kami siap membantu Anda!
              </p>
              
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-0.5 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#25d366' }}
              >
                <img 
                  src="/images/whatsapp-logo.png" 
                  alt="WhatsApp Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span>Chat WhatsApp</span>
              </a>
            </div>

            {/* Section 5: Info Tambahan */}
            <div className="bg-blue-950/50 backdrop-blur-sm rounded-xl p-6 border-l-4" style={{ borderColor: '#00B8E6' }}>
              <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" style={{ color: '#FFB800' }} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                Informasi Tambahan
              </h2>
              <div className="space-y-3 text-gray-200">
                <p>
                  ✓ HENING4D tersedia di web dan dapat diakses dari berbagai perangkat
                </p>
                <p>
                  ✓ Data prediksi diperbarui secara berkala mengikuti jadwal hasil togel
                </p>
                <p>
                  ✓ Aplikasi ini gratis untuk digunakan oleh semua pengguna
                </p>
                <p>
                  ✓ Semua data bersifat hiburan dan analisis statistik semata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
