'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

interface PredictorData {
  result: string;
  numbers: string[];
  date: string;
  source: string;
}

interface PredictorProps {
  apiEndpoint: string;
  marketName: string;
  apiKey: string;
}

export default function MarketPredictor({ apiEndpoint, marketName, apiKey }: PredictorProps) {
  const [data, setData] = useState<PredictorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const result = await response.json();
        
        if (result[apiKey]) {
          setData(result[apiKey]);
        } else {
          setError('Data tidak tersedia');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Gagal mengambil data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint, apiKey]);

  if (loading) {
    return <LoadingScreen message={`Memuat data ${marketName}...`} />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-900 to-red-800">
        <div className="text-white text-center">
          <p className="text-2xl font-bold mb-4">⚠️ {marketName}</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-900 to-yellow-800">
        <div className="text-white text-center">
          <p>Belum ada data untuk {marketName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: 'linear-gradient(to bottom, #FF8C00, #FFD700)' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{marketName}</h1>
          <p className="text-white/85 drop-shadow-lg">Last Result - Real-time</p>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ background: 'linear-gradient(90deg, #FF8C00 0%, #D97706 100%)' }}></div>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl shadow-2xl overflow-hidden mb-6">
          {/* Result Box */}
          <div className="p-8 text-center" style={{ background: 'linear-gradient(to right, #FF8C00, #FFD700)' }}>
            <p className="text-sm mb-2" style={{ color: '#FFFFFF' }}>Result {marketName}</p>
            <p className="text-white text-6xl font-bold tracking-wider">{data.result}</p>
          </div>

          {/* Details */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {data.numbers.map((num, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-3 text-center border-2" style={{ borderColor: 'rgba(255, 140, 0, 0.3)' }}>
                  <p className="text-slate-600 text-xs uppercase">Digit {idx + 1}</p>
                  <p className="text-2xl font-bold" style={{ color: '#FF8C00' }}>{num}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t pt-6" style={{ borderColor: 'rgba(255, 140, 0, 0.2)' }}>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tanggal:</span>
                <span className="font-semibold text-slate-900">{data.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Sumber:</span>
                <span className="font-semibold" style={{ color: '#FF8C00' }}>{data.source}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className="border rounded-lg p-4 text-sm text-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 140, 0, 0.1)', borderColor: 'rgba(255, 140, 0, 0.3)', color: '#FF8C00' }}>
          <p>Data diperbarui secara real-time dari sumber resmi</p>
        </div>
      </div>
    </div>
  );
}
