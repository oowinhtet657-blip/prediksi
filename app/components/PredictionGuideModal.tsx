'use client';

import PredictionGuide from './PredictionGuide';

interface PredictionGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PredictionGuideModal({ isOpen, onClose }: PredictionGuideModalProps) {
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
        {/* Close Button (X) - untuk kembali ke home/prediksi togel */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[9999] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: '#FFB800' }}
          aria-label="Close modal"
        >
          <span className="text-xl font-bold text-blue-900">✕</span>
        </button>

        {/* Guide Content */}
        <div className="max-w-4xl mx-auto pt-4">
          <PredictionGuide />
        </div>
      </div>
    </div>
  );
}
