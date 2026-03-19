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
<<<<<<< HEAD
          box-shadow: 0 4px 15px rgba(255, 149, 0, 0.3);
        }

        .hamburger-btn:hover {
          box-shadow: 0 6px 20px rgba(255, 149, 0, 0.5);
=======
          /* box-shadow dihilangkan */
          box-shadow: none;
        }

        .hamburger-btn:hover {
          /* box-shadow dihilangkan */
          box-shadow: none;
>>>>>>> d9b09ce (Initial commit)
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
<<<<<<< HEAD
          background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(25, 15, 5, 0.95) 100%);
=======
          background: linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(5, 22, 25, 0.95) 100%);
>>>>>>> d9b09ce (Initial commit)
          backdrop-filter: blur(10px);
        }

        .menu-item-modern {
<<<<<<< HEAD
          background: linear-gradient(135deg, rgba(255, 149, 0, 0.9) 0%, rgba(255, 165, 0, 0.85) 100%);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 15px rgba(255, 149, 0, 0.2);
=======
          background: linear-gradient(135deg, rgba(9, 59, 52, 0.85) 0%, rgba(35, 138, 158, 0.9) 100%);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .menu-item-modern:hover {
          transform: translateY(-3px);
<<<<<<< HEAD
          box-shadow: 0 8px 25px rgba(255, 149, 0, 0.35);
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.95) 0%, rgba(255, 180, 0, 0.9) 100%);
=======
          box-shadow: none;
          background: linear-gradient(135deg, rgba(9, 59, 52, 0.85) 0%, rgba(35, 158, 107, 0.9) 100%);
>>>>>>> d9b09ce (Initial commit)
        }
      `}</style>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hamburger-btn ${isOpen ? 'menu-open' : ''}`}
        style={{ background: 'linear-gradient(135deg, rgba(9, 59, 52, 0.85) 0%, rgba(35, 138, 158, 0.9) 100%)', border: '2px solid #198f9533', backdropFilter: 'blur(10px)' }}
        aria-label="Toggle menu"
        type="button"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className="hamburger-top w-full h-0.5 bg-white block rounded-full"></span>
          <span className="hamburger-middle w-full h-0.5 bg-white rounded-full"></span>
          <span className="hamburger-bottom w-full h-0.5 bg-white block rounded-full"></span>
        </div>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          role="presentation"
        />
      )}
      <div
        className={`fixed left-0 top-0 h-full w-72 z-50 transition-transform duration-400 ease-in-out shadow-2xl flex flex-col sidebar-modern ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ borderRight: '2px solid rgba(0, 255, 251, 0.2)' }}
        aria-hidden={!isOpen}
      >
        {/* Sidebar Header - Modern Orange */}
        <div 
          className="p-8 text-white flex-shrink-0 relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, rgba(9, 59, 51, 0.85) 0%, rgba(46, 171, 176, 0.9) 100%)',
            boxShadow: 'none'
          }}
        >
          <h2 className="text-2xl font-black text-white mb-1 relative z-10">MENU</h2>
          <p className="text-sm font-semibold text-white/90 relative z-10">Horeg22 Prediksi</p>
        </div>

        {/* Menu Items - Scrollable */}
        <nav className="p-5 space-y-3 overflow-y-auto flex-grow">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="menu-item-modern w-full text-left px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-300 text-white shadow-lg"
              style={{ backgroundColor: '#198f95', color: '#fff' }}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer - Modern Dark */}
        <div 
          className="p-5 border-t text-white text-center flex-shrink-0"
          style={{ 
            borderColor: 'rgba(0, 255, 204, 0.3)',
            background: 'linear-gradient(135deg, rgba(10, 30, 30, 0.8) 0%, rgba(5, 14, 15, 0.95) 100%)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p className="font-bold text-sm drop-shadow-lg">© 2026 Horeg22</p>
          <p className="text-xs mt-1 text-white/70">Prediksi Togel Harian</p>
        </div>
      </div>
    </>
  );
}
