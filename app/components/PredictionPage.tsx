'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CalendarCardClassic from '@/app/components/CalendarCardClassic';
import Disclaimer from '@/app/components/Disclaimer';
import PredictionGuide from '@/app/components/PredictionGuide';
import PredictionGuideModal from '@/app/components/PredictionGuideModal';
import AboutModal from '@/app/components/AboutModal';
import HelpModal from '@/app/components/HelpModal';
import Sidebar from '@/app/components/Sidebar';
import type { CalendarData } from '@/app/types/calendar';
import { getTodayInfo, findDateIndexInData, findMatchingData } from '@/app/utils/dateUtils';

interface PredictionPageProps {
  pasaranId: string;
  pasaranName: string;
}

export default function PredictionPage({ pasaranId, pasaranName }: PredictionPageProps) {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [todayDate, setTodayDate] = useState<string>('');
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/calendar');
        const data = await response.json();
        setCalendarData(data);
        
        const today = getTodayInfo();
        setTodayDate(today.date);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Auto-select hari ini
  useEffect(() => {
    if (calendarData.length > 0 && todayDate) {
      const todayData = findMatchingData(calendarData, todayDate, pasaranId);
      
      if (todayData) {
        const filteredByPasaran = calendarData.filter(item => item.pasaran === pasaranId);
        const todayIndex = filteredByPasaran.findIndex(item => item.date === todayDate);
        setSelectedIndex(todayIndex !== -1 ? todayIndex : 0);
      } else {
        setSelectedIndex(0);
      }
    }
  }, [calendarData, todayDate, pasaranId]);

  const filteredData = calendarData.filter(item => item.pasaran === pasaranId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-pulse mb-4">
            <div className="w-16 h-16 rounded-full mx-auto" style={{ backgroundColor: '#00B8E6' }}></div>
          </div>
          <p>Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="container-main">
      <PredictionGuideModal isOpen={showGuideModal} onClose={() => setShowGuideModal(false)} />
      <AboutModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />
      <HelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} whatsappNumber="6281234567890" />

      {/* Header dengan Logo dan Hamburger Button */}
      {!showGuideModal && !showAboutModal && !showHelpModal && (
        <div className="flex justify-between items-center mb-0 -mt-6 px-2 relative">
          {/* Back Button */}
          <Link href="/" className="p-3 rounded-lg transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#001a47', border: '2px solid #00B8E6' }}>
            <svg className="w-5 h-5" style={{ color: '#00B8E6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>

          {/* Logo di tengah */}
          <img 
            src="/images/Hening4D.png" 
            alt="Hening4D Logo" 
            className="h-20 md:h-24 object-contain absolute left-1/2 transform -translate-x-1/2"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 184, 230, 0.3))' }}
          />

          {/* Hamburger Button di kanan */}
          <div className="ml-auto">
            <Sidebar onOpenGuide={() => setShowGuideModal(true)} onOpenAbout={() => setShowAboutModal(true)} onOpenHelp={() => setShowHelpModal(true)} />
          </div>
        </div>
      )}

      <div className="text-center mb-4 text-white pt-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2">PREDIKSI TOGEL {pasaranName.toUpperCase()}</h1>
        <p style={{ color: '#00B8E6' }}>Aplikasi Hiburan & Analisis Statistik</p>
        {todayDate && (
          <p className="text-xs mt-2" style={{ color: '#FFB800' }}>
            Menampilkan Prediksi untuk: {new Date(todayDate).toLocaleDateString('id-ID', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        )}
      </div>

      <>
        <Disclaimer showDetailed={true} />

        {filteredData.length > 0 && (
          <>
            <div className="flex justify-center mb-8 p-4">
              <CalendarCardClassic data={filteredData[selectedIndex]} />
            </div>

            <div className="flex gap-4 justify-center mb-8 flex-wrap">
              <button
                onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                disabled={selectedIndex === 0}
                className="px-4 py-2 text-white font-bold rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 transition text-sm"
                style={{ backgroundColor: '#001F73' }}
              >
                ← Sebelumnya
              </button>

              <div className="flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow-lg border" style={{ background: 'linear-gradient(to right, #001F73, #003DA6)', borderColor: '#00B8E6' }}>
                <span className="font-bold text-lg">
                  {selectedIndex + 1} / {filteredData.length}
                </span>
                {filteredData[selectedIndex] && (
                  <span className="text-xs font-semibold" style={{ color: '#FFB800' }}>
                    ({filteredData[selectedIndex].day})
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedIndex(Math.min(filteredData.length - 1, selectedIndex + 1))}
                disabled={selectedIndex === filteredData.length - 1}
                className="px-4 py-2 text-white font-bold rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 transition text-sm"
                style={{ backgroundColor: '#001F73' }}
              >
                Selanjutnya →
              </button>

              {todayDate && (
                <button
                  onClick={() => {
                    const todayIndex = findDateIndexInData(calendarData, todayDate, pasaranId);
                    setSelectedIndex(todayIndex);
                  }}
                  className="px-4 py-2 text-blue-900 font-bold rounded-lg hover:opacity-80 transition shadow-lg text-sm border-2"
                  style={{ backgroundColor: '#FFB800', borderColor: '#FF9500' }}
                >
                  Hari Ini
                </button>
              )}
            </div>

            <div className="mb-8 px-4">
              <div className="flex justify-center gap-2 flex-wrap max-w-2xl mx-auto">
                {filteredData[selectedIndex] && (
                  <button
                    onClick={() => {
                      const todayIndex = findDateIndexInData(calendarData, todayDate, pasaranId);
                      setSelectedIndex(todayIndex);
                    }}
                    className="px-6 py-3 rounded-full font-bold text-sm transition transform hover:scale-105 text-blue-900 shadow-lg border-2"
                    style={{ background: 'linear-gradient(to right, #FFB800, #FF9500)', borderColor: '#FF9500' }}
                  >
                    {filteredData[selectedIndex].month.substring(0, 3).toUpperCase()} {filteredData[selectedIndex].displayDate}
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {filteredData.length === 0 && (
          <div className="text-center text-white py-12">
            <p className="text-lg">Data untuk pasaran ini belum tersedia</p>
            <p className="text-sm text-gray-400 mt-2">Silakan kembali ke halaman utama</p>
          </div>
        )}
      </>

      <div className="mt-16 text-center text-gray-400 text-sm border-t border-gray-700 pt-8 pb-8">
        <p className="mb-2">© 2026 Kalender Prediksi - Aplikasi Hiburan & Analisis Statistik</p>
        <p className="text-xs text-gray-500">Data ditampilkan untuk tujuan analisis dan hiburan semata</p>
      </div>
    </main>
  );
}
