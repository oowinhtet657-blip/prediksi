'use client';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber?: string;
}

export default function HelpModal({ isOpen, onClose, whatsappNumber = '6281234567890' }: HelpModalProps) {
  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent('Halo, saya ingin bertanya tentang HENING4D');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Animated Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      ></div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .modal-container {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* Modal Container */}
      <div 
        className="modal-container relative max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
        style={{
          background: '#000000',
          border: '2px solid rgba(255, 140, 0, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] px-5 py-5 space-y-3">
          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-black text-white mb-1" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #D97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              BANTUAN & DUKUNGAN
            </h1>
            <p className="text-xs font-medium" style={{ color: '#FF8C00' }}>Hubungi tim support kami</p>
            <div className="w-12 h-0.5 mx-auto mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, #FF8C00 0%, #D97706 100%)' }}></div>
          </div>

          {/* FAQ Section */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>❓ Pertanyaan Umum (FAQ)</h2>
            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <p className="font-bold text-white">Bagaimana cara menggunakan HENING4D?</p>
                <p className="text-xs">Pilih pasaran togel dari menu utama. Sistem akan menampilkan prediksi berdasarkan analisis statistik dan pola historis.</p>
              </div>
              <div>
                <p className="font-bold text-white">Apakah prediksi akurat 100%?</p>
                <p className="text-xs">Tidak ada sistem prediksi 100% akurat. HENING4D menggunakan analisis statistik yang membantu mengidentifikasi kemungkinan, bukan kepastian.</p>
              </div>
              <div>
                <p className="font-bold text-white">Apa itu BBFS 5D?</p>
                <p className="text-xs">BBFS adalah 5 digit angka dasar untuk analisis yang bisa digunakan untuk berbagai permainan togel dengan metode kombinasi berbeda.</p>
              </div>
              <div>
                <p className="font-bold text-white">Apa perbedaan BBFS dan ANGKA MAIN?</p>
                <p className="text-xs">BBFS adalah angka yang bisa diacak sesuai keinginan, sementara ANGKA MAIN adalah 4 digit dengan probabilitas keluar lebih tinggi.</p>
              </div>
            </div>
          </div>

          {/* Petunjuk Section */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>📋 Petunjuk Penggunaan</h2>
            <ol className="space-y-1 text-xs text-slate-300">
              <li><strong style={{ color: '#FF9500' }}>1.</strong> Pilih pasaran di halaman utama</li>
              <li><strong style={{ color: '#FF9500' }}>2.</strong> Pilih pasaran togel yang dituju</li>
              <li><strong style={{ color: '#FF9500' }}>3.</strong> Lihat prediksi hari ini atau sebelumnya</li>
              <li><strong style={{ color: '#FF9500' }}>4.</strong> Gunakan prev/next untuk hari lain</li>
              <li><strong style={{ color: '#FF9500' }}>5.</strong> Baca panduan untuk memahami elemen prediksi</li>
            </ol>
          </div>

          {/* Troubleshooting Section */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>🔧 Troubleshooting</h2>
            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <p className="font-bold text-white">Aplikasi loading lama?</p>
                <p>Pastikan koneksi internet stabil. Coba refresh atau buka kembali aplikasi.</p>
              </div>
              <div>
                <p className="font-bold text-white">Data tidak tampil?</p>
                <p>Pastikan sudah memilih pasaran togel terlebih dahulu.</p>
              </div>
              <div>
                <p className="font-bold text-white">Prediksi tidak update?</p>
                <p>Coba refresh halaman untuk mendapatkan data terbaru.</p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>💬 Hubungi Tim Support</h2>
            <p className="text-xs text-slate-300 mb-3">
              Untuk pertanyaan lebih lanjut, hubungi tim kami melalui WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg font-bold text-black text-xs transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#FF9500' }}
            >
              <span>💬</span>
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Info Tambahan */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>ℹ️ Informasi Tambahan</h2>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>✓ HENING4D tersedia di web dan accessible dari berbagai perangkat</li>
              <li>✓ Data diperbaharui berkala mengikuti jadwal hasil togel</li>
              <li>✓ Aplikasi gratis untuk semua pengguna</li>
              <li>✓ Semua data bersifat hiburan dan analisis statistik</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(255, 140, 0, 0.2)' }}>
            <p className="text-xs text-center" style={{ color: '#FF8C00' }}>
              Siap membantu Anda 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
