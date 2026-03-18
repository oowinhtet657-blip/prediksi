'use client';

import { shioData } from '@/app/utils/shio';

interface ShioTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShioTableModal({ isOpen, onClose }: ShioTableModalProps) {
  if (!isOpen) return null;

  const shios = Object.entries(shioData);
  const currentYear = new Date().getFullYear();

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
        .shio-modal {
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* Modal Container - Centered and Compact */}
      <div 
        className="shio-modal relative max-w-2xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
        style={{
          background: '#052328',
          border: '2px solid rgba(0, 255, 238, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] px-5 py-5 space-y-3">
          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-black mb-1" style={{ color: '#198f95' }}>
              TABEL SHIO {currentYear}
            </h1>
            <p className="text-xs font-medium" style={{ color: '#418184' }}>12 Shio Zodiak Togel - Referensi Analisis</p>
            <div className="w-12 h-0.5 mx-auto mt-2 rounded-full" style={{ background: 'linear-gradient(90deg, #00FFEA 0%, #25b99c 100%)' }}></div>
          </div>

          {/* Shio Cards Container */}
          <div className="space-y-2">
            {shios.map(([shio, numbers]) => (
              <div 
                key={shio}
                className="rounded-lg p-3 border transition-all duration-200 hover:border-opacity-60" 
                style={{ background: 'rgba(0, 255, 234, 0.1)', borderColor: 'rgba(0, 255, 234, 0.3)' }}
              >
                {/* Shio Name */}
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="px-3 py-1 rounded-lg font-bold text-xs text-center"
                    style={{ color: '#062a2c', background: '#0f9c91', minWidth: '70px' }}
                  >
                    {shio}
                  </div>
                  <p className="text-xs font-medium" style={{ color: '#25b99c' }}>({(numbers as readonly string[]).length} nomor)</p>
                </div>

                {/* Numbers Grid */}
                <div className="flex flex-wrap gap-2">
                  {(numbers as readonly string[]).map((num) => (
                    <span
                      key={num}
                      className="px-2 py-1 rounded font-bold text-xs text-center transition-all duration-200 hover:opacity-100"
                      style={{
                        backgroundColor: 'rgba(0, 255, 234, 0.3)',
                        color: '#00FFEA',
                        border: '1px solid rgba(0, 255, 234, 0.4)',
                        opacity: 0.9,
                        cursor: 'pointer'
                      }}
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(0, 255, 234, 0.2)' }}>
            <p className="text-xs text-center" style={{ color: '#00FFEA' }}>
              144 Nomor Shio • Analisis & Referensi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
