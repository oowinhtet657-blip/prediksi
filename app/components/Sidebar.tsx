'use client';

import { useState } from 'react';

interface SidebarProps {
  onOpenGuide?: () => void;
  onOpenAbout?: () => void;
  onOpenHelp?: () => void;
}

interface SidebarItem {
  label: string;
  action: () => void;
}

export default function Sidebar({ onOpenGuide, onOpenAbout, onOpenHelp }: SidebarProps) {
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
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
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
      `}</style>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 hamburger-btn ${isOpen ? 'menu-open' : ''}`}
        style={{ backgroundColor: '#001a47', border: '1px solid #00B8E6', boxShadow: '0 0 15px rgba(0, 184, 230, 0.3)' }}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 flex flex-col justify-between">
          <span className="hamburger-top w-full h-0.5 bg-white block rounded"></span>
          <span className="hamburger-middle w-full h-0.5 bg-white block rounded"></span>
          <span className="hamburger-bottom w-full h-0.5 bg-white block rounded"></span>
        </div>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 z-40 transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#011431' }}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b-2 text-white flex-shrink-0" style={{ borderColor: '#00B8E6' }}>
          <h2 className="text-xl font-black">MENU</h2>
          <p className="text-xs mt-1" style={{ color: '#FFB800' }}>Info Terkait Hening4D</p>
        </div>

        {/* Menu Items - Scrollable */}
        <nav className="p-4 space-y-2 overflow-y-auto flex-grow">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="w-full text-left px-4 py-3 rounded-lg text-white font-bold text-sm transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#003DA6' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00B8E6';
                e.currentTarget.style.color = '#001F73';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#003DA6';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t-2 text-white text-xs text-center flex-shrink-0" style={{ borderColor: '#00B8E6' }}>
          <p>© 2026 Panduan Togel</p>
          <p className="mt-1" style={{ color: '#FFB800' }}>Analisis Statik Togel</p>
        </div>
      </div>
    </>
  );
}
