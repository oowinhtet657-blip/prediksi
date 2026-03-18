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
<<<<<<< HEAD
      <div className="relative min-h-screen p-4" style={{ background: 'linear-gradient(-45deg, #FF8C00, #FFD700, #D97706, #92400E)' }}>
        {/* Guide Content */}
        <div className="max-w-4xl mx-auto pt-4">
          <PredictionGuide />
=======
      <div className="relative min-h-screen p-4" style={{ background: 'none' }}>
        {/* Guide Content */}
        <div className="max-w-4xl mx-auto pt-4">
          <PredictionGuide onClose={onClose} />
>>>>>>> d9b09ce (Initial commit)
        </div>
      </div>
    </div>
  );
}
