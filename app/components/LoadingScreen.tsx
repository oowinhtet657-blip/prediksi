'use client';

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message = 'Memuat data...' }: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        {/* Logo dengan Glow Animation */}
        <div className="mb-6 flex justify-center">
          <div 
            className="animate-pulse"
            style={{
<<<<<<< HEAD
              filter: 'drop-shadow(0 0 20px rgba(255, 140, 0, 0.8))'
            }}
          >
            <img 
              src="/images/Hening4D2.png" 
              alt="Hening4D Loading"
              className="w-24 h-24 object-contain"
=======
              filter: 'drop-shadow(0 0 20px rgba(16, 80, 67, 0.8))'
            }}
          >
            <img 
              src="/images/logohoreg.webp" 
              alt="Horeg22 Loading"
              className="w-50 h-24 object-contain"
>>>>>>> d9b09ce (Initial commit)
            />
          </div>
        </div>
        
        {/* Loading Text */}
<<<<<<< HEAD
        <p className="text-white text-sm" style={{ color: '#FF9500' }}>
=======
        <p className="text-white text-sm" style={{ color: '#1bb692' }}>
>>>>>>> d9b09ce (Initial commit)
          {message}
        </p>
        
        {/* Loading Dots Animation */}
        <div className="flex justify-center gap-1 mt-4">
          <div 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
<<<<<<< HEAD
              backgroundColor: '#FF9500',
=======
              backgroundColor: '#0cc4a8',
>>>>>>> d9b09ce (Initial commit)
              animationDelay: '0s'
            }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
<<<<<<< HEAD
              backgroundColor: '#FF9500',
=======
              backgroundColor: '#10b886',
>>>>>>> d9b09ce (Initial commit)
              animationDelay: '0.2s'
            }}
          ></div>
          <div 
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ 
<<<<<<< HEAD
              backgroundColor: '#FF9500',
=======
              backgroundColor: '#129e82',
>>>>>>> d9b09ce (Initial commit)
              animationDelay: '0.4s'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
