'use client';

import { useState, useEffect } from 'react';
import CalendarCardClassic from '@/app/components/CalendarCardClassic';
import Disclaimer from '@/app/components/Disclaimer';
import PasaranMenu from '@/app/components/PasaranMenu';
import PredictionGuide from '@/app/components/PredictionGuide';
import PredictionGuideModal from '@/app/components/PredictionGuideModal';
import AboutModal from '@/app/components/AboutModal';
import HelpModal from '@/app/components/HelpModal';
import Sidebar from '@/app/components/Sidebar';
import type { CalendarData } from '@/app/types/calendar';
import { pasaranList } from '@/app/utils/shio';
import { getTodayInfo, findDateIndexInData, findMatchingData } from '@/app/utils/dateUtils';

export default function Home() {
  const [calendarData, setCalendarData] = useState<CalendarData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedPasaran, setSelectedPasaran] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [todayDate, setTodayDate] = useState<string>('');
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Load data kalender saat pertama kali
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/calendar');
        const data = await response.json();
        setCalendarData(data);
        
        // Set tanggal hari ini
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

  // Auto-select hari ini dan tampilkan data sesuai tanggal realtime
  useEffect(() => {
    if (calendarData.length > 0 && todayDate && selectedPasaran) {
      // Cari data untuk hari ini pada pasaran yang dipilih
      const todayData = findMatchingData(calendarData, todayDate, selectedPasaran);
      
      if (todayData) {
        // Jika ada data untuk hari ini, gunakan data tersebut
        const filteredByPasaran = calendarData.filter(item => item.pasaran === selectedPasaran);
        const todayIndex = filteredByPasaran.findIndex(item => item.date === todayDate);
        setSelectedIndex(todayIndex !== -1 ? todayIndex : 0);
      } else {
        // Jika tidak ada data untuk hari ini, tampilkan data pertama
        setSelectedIndex(0);
      }
    }
  }, [calendarData, selectedPasaran, todayDate]);

  // Filter data berdasarkan pasaran yang dipilih
  const filteredData = selectedPasaran ? calendarData.filter(item => item.pasaran === selectedPasaran) : [];

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

      {!showGuideModal && !showAboutModal && !showHelpModal && <Sidebar onOpenGuide={() => setShowGuideModal(true)} onOpenAbout={() => setShowAboutModal(true)} onOpenHelp={() => setShowHelpModal(true)} />}

      <div className="text-center mb-4 text-white pt-6">
        <div className="mb-3 flex justify-center">
          <img 
            src="/images/Hening4D.png" 
            alt="Hening4d Logo" 
            className="h-12.5 object-contain drop-shadow-lg"
            style={{ 
              filter: 'drop-shadow(0 4px 6px rgba(1, 10, 20, 0.4)) drop-shadow(0 0 2px rgba(228, 237, 237, 0.2))',
              
              borderRadius: '4px',
              padding: '2px'
            }}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-black mb-2">PREDIKSI TOGEL HARIAN</h1>
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

      <PasaranMenu selectedPasaran={selectedPasaran || ''} onSelectPasaran={(id) => {
        setSelectedPasaran(id);
        setSelectedIndex(0);
      }} />

      {selectedPasaran && (
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
                      if (selectedPasaran) {
                        const todayIndex = findDateIndexInData(calendarData, todayDate, selectedPasaran);
                        setSelectedIndex(todayIndex);
                      }
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
                        if (selectedPasaran) {
                          const todayIndex = findDateIndexInData(calendarData, todayDate, selectedPasaran);
                          setSelectedIndex(todayIndex);
                        }
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
              <p className="text-sm text-gray-400 mt-2">Silakan pilih pasaran lain</p>
            </div>
          )}
        </>
      )}

      <div className="mt-16 text-center text-gray-400 text-sm border-t border-gray-700 pt-8 pb-8">
        <p className="mb-2">© 2026 Kalender Prediksi - Aplikasi Hiburan & Analisis Statistik</p>
        <p className="text-xs text-gray-500">Data ditampilkan untuk tujuan analisis dan hiburan semata</p>
      </div>
    </main>
  );
}
