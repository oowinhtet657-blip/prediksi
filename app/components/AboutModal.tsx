'use client';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

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
<<<<<<< HEAD
          background: '#000000',
          border: '2px solid rgba(255, 140, 0, 0.3)',
=======
          background: '#052328',
          border: '2px solid rgba(0, 255, 208, 0.3)',
>>>>>>> d9b09ce (Initial commit)
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] px-5 py-5 space-y-3">
          {/* Title */}
          <div className="text-center mb-4">
<<<<<<< HEAD
            <h1 className="text-2xl font-black text-white mb-1" style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #D97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              TENTANG HENING4D
            </h1>
            <p className="text-xs font-medium" style={{ color: '#FF8C00' }}>Platform Analisis Data Togel Terpercaya</p>
            <div className="w-12 h-0.5 mx-auto mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, #FF8C00 0%, #D97706 100%)' }}></div>
          </div>

          {/* Section 1: Pengenalan */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>Apa Itu HENING4D?</h2>
=======
            <h1 className="text-2xl font-black mb-1" style={{ color: '#21ae94' }}>
              TENTANG HOREG22
            </h1>
            <p className="text-xs font-medium" style={{ color: '#21ae94' }}>Platform Analisis Data Togel Terpercaya</p>
            <div className="w-12 h-0.5 mx-auto mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, #21ae94 0%, #00C8B3 100%)' }}></div>
          </div>

          {/* Section 1: Pengenalan */}
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(0, 255, 208, 0.1)', borderColor: 'rgba(0, 255, 208, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#21ae94' }}>Apa Itu HOREG22?</h2>
>>>>>>> d9b09ce (Initial commit)
            <p className="text-slate-300 text-xs leading-tight">
              Platform analisis data togel yang menyediakan prediksi berdasarkan analisis statistik dan pola historis dari berbagai pasaran togel terpercaya.
            </p>
          </div>

          {/* Section 2: Visi & Misi */}
<<<<<<< HEAD
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>Visi & Misi</h2>
=======
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(0, 255, 208, 0.1)', borderColor: 'rgba(0, 255, 208, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#21ae94' }}>Visi & Misi</h2>
>>>>>>> d9b09ce (Initial commit)
            <div className="space-y-2">
              <div>
                <p className="text-xs font-bold text-white mb-1">Visi</p>
                <p className="text-slate-300 text-xs leading-tight">Menjadi platform prediksi togel terdepan yang memberikan analisis akurat dan terpercaya.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-white mb-1">Misi</p>
                <p className="text-slate-300 text-xs leading-tight">Menyediakan analisis transparan berbasis statistik dan memberikan edukasi tentang metode analisis yang bertanggung jawab.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Metode Analisis */}
<<<<<<< HEAD
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(255, 149, 0, 0.1)', borderColor: 'rgba(255, 149, 0, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#FF9500' }}>Metode Analisis Kami</h2>
=======
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(0, 255, 208, 0.1)', borderColor: 'rgba(0, 255, 208, 0.3)' }}>
            <h2 className="text-sm font-bold text-white mb-2" style={{ color: '#21ae94' }}>Metode Analisis Kami</h2>
>>>>>>> d9b09ce (Initial commit)
            <ul className="text-xs text-slate-300 space-y-1">
              <li>• Analisis Statistik dari data historis</li>
              <li>• Analisis Pola & Tren jangka panjang</li>
              <li>• Sistem Shio (Zodiak) tradisional</li>
              <li>• Formula Kombinasi terintegrasi</li>
            </ul>
          </div>

          {/* Section 4: Disclaimer */}
<<<<<<< HEAD
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(239, 68, 68, 0.15)', borderColor: 'rgba(248, 113, 113, 0.3)' }}>
            <h2 className="text-sm font-bold mb-2" style={{ color: '#FF9500' }}>⚠️ Disclaimer Penting</h2>
=======
          <div className="rounded-lg p-3 border" style={{ background: 'rgba(0, 255, 208, 0.1)', borderColor: 'rgba(0, 255, 208, 0.3)' }}>
            <h2 className="text-sm font-bold mb-2" style={{ color: '#21ae94' }}>⚠️ Disclaimer Penting</h2>
>>>>>>> d9b09ce (Initial commit)
            <p className="text-slate-300 text-xs leading-tight">
              Aplikasi ini adalah untuk hiburan dan analisis statistik semata. Prediksi bukan jaminan hasil akurat. Gunakan dengan bijak dan bertanggung jawab.
            </p>
          </div>

          {/* Divider */}
<<<<<<< HEAD
          <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(255, 140, 0, 0.2)' }}>
            <p className="text-xs text-center" style={{ color: '#FF8C00' }}>
              Terima kasih telah mempercayai HENING4D
=======
          <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(0, 255, 208, 0.2)' }}>
            <p className="text-xs text-center" style={{ color: '#00FFD0' }}>
              Terima kasih telah mempercayai HOREG22
>>>>>>> d9b09ce (Initial commit)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
