'use client';

import { useState } from 'react';

interface SidebarProps {
  onOpenGuide?: () => void;
  onOpenAbout?: () => void;
  onOpenHelp?: () => void;
  onOpenShioTable?: () => void;
}

interface SidebarItem {
  label: string;
  action: () => void;
}

export default function Sidebar({ onOpenGuide, onOpenAbout, onOpenHelp, onOpenShioTable }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: SidebarItem[] = [
    {
      label: 'Panduan Pengguna',
      action: () => {
        onOpenGuide?.();
        setIsOpen(false);
      }
    },
    {
      label: 'Tabel Shio',
      action: () => {
        onOpenShioTable?.();
        setIsOpen(false);
      }
    },
    {
      label: 'Tentang Kita',
      action: () => {
        onOpenAbout?.();
        setIsOpen(false);
      }
    },
    {
      label: 'Help?',
      action: () => {
        onOpenHelp?.();
        setIsOpen(false);
      }
    }
  ];

  return (
    <>
      <style>{`
        @keyframes hamburgerTop {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(11px) rotate(45deg);
          }
        }

        @keyframes hamburgerMiddle {
          from {
            opacity: 1;
            transform: scaleX(1);
          }
          to {
            opacity: 0;
            transform: scaleX(0);
          }
        }

        @keyframes hamburgerBottom {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(-11px) rotate(-45deg);
          }
        }

        @keyframes slideInSidebar {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .hamburger-top {
          transform-origin: center;
          will-change: transform;
        }

        .hamburger-middle {
          will-change: opacity, transform;
        }

        .hamburger-bottom {
          transform-origin: center;
          will-change: transform;
        }

        .hamburger-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(255, 149, 0, 0.3);
        }

        .hamburger-btn:hover {
          box-shadow: 0 6px 20px rgba(255, 149, 0, 0.5);
        }

        .hamburger-btn.menu-open .hamburger-top {
          animation: hamburgerTop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .hamburger-btn.menu-open .hamburger-middle {
          animation: hamburgerMiddle 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .hamburger-btn.menu-open .hamburger-bottom {
          animation: hamburgerBottom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .hamburger-btn:not(.menu-open) .hamburger-top {
          animation: hamburgerTop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) reverse;
        }

        .hamburger-btn:not(.menu-open) .hamburger-middle {
          animation: hamburgerMiddle 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) reverse;
        }

        .hamburger-btn:not(.menu-open) .hamburger-bottom {
          animation: hamburgerBottom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) reverse;
        }

        .sidebar-modern {
          background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(25, 15, 5, 0.95) 100%);
          backdrop-filter: blur(10px);
        }

        .menu-item-modern {
          background: linear-gradient(135deg, rgba(255, 149, 0, 0.9) 0%, rgba(255, 165, 0, 0.85) 100%);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(255, 149, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .menu-item-modern:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 149, 0, 0.35);
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.95) 0%, rgba(255, 180, 0, 0.9) 100%);
        }
      `}</style>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hamburger-btn ${isOpen ? 'menu-open' : ''}`}
        style={{ backgroundColor: '#FF9500', border: '2px solid rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(10px)' }}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className="hamburger-top w-full h-0.5 bg-white block rounded-full"></span>
          <span className="hamburger-middle w-full h-0.5 bg-white rounded-full"></span>
          <span className="hamburger-bottom w-full h-0.5 bg-white block rounded-full"></span>
        </div>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-72 z-50 transition-transform duration-400 ease-in-out shadow-2xl flex flex-col sidebar-modern ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ borderRight: '2px solid rgba(255, 149, 0, 0.2)' }}
      >
        {/* Sidebar Header - Modern Orange */}
        <div 
          className="p-8 text-white flex-shrink-0 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #FF9500 0%, #FF8C00 100%)',
            boxShadow: '0 8px 32px rgba(255, 149, 0, 0.3)'
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <h2 className="text-2xl font-black text-white mb-1 relative z-10">MENU</h2>
          <p className="text-sm font-semibold text-white/90 relative z-10">Navigasi Aplikasi</p>
        </div>

        {/* Menu Items - Scrollable */}
        <nav className="p-5 space-y-3 overflow-y-auto flex-grow">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="menu-item-modern w-full text-left px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-300 text-black shadow-lg"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer - Modern Dark */}
        <div 
          className="p-5 border-t text-white text-center flex-shrink-0"
          style={{ 
            borderColor: 'rgba(255, 149, 0, 0.3)',
            background: 'linear-gradient(135deg, rgba(30, 20, 10, 0.8) 0%, rgba(15, 10, 5, 0.95) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p className="font-bold text-sm drop-shadow-lg">© 2026 Hening4d</p>
          <p className="text-xs mt-1 text-white/70">Prediksi Togel Harian</p>
        </div>
      </div>
    </>
  );
}
