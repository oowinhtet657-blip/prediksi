'use client';

import { useState, useEffect } from 'react';

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
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #001F73, #003DA6)' }}>
        <div className="text-white text-center">
          <div className="animate-pulse mb-4">
            <div className="w-16 h-16 rounded-full mx-auto" style={{ backgroundColor: '#00B8E6' }}></div>
          </div>
          <p>Memuat data {marketName}...</p>
        </div>
      </div>
    );
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
    <div className="min-h-screen p-4 md:p-8" style={{ background: 'linear-gradient(to bottom, #001F73, #003DA6)' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{marketName}</h1>
          <p className="text-slate-300">Last Result - Real-time</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
          {/* Result Box */}
          <div className="p-8 text-center" style={{ background: 'linear-gradient(to right, #001F73, #003DA6)' }}>
            <p className="text-sm mb-2" style={{ color: '#00B8E6' }}>Result {marketName}</p>
            <p className="text-white text-6xl font-bold tracking-wider">{data.result}</p>
          </div>

          {/* Details */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {data.numbers.map((num, idx) => (
                <div key={idx} className="bg-slate-100 rounded-lg p-3 text-center">
                  <p className="text-slate-600 text-xs uppercase">Digit {idx + 1}</p>
                  <p className="text-2xl font-bold" style={{ color: '#001F73' }}>{num}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tanggal:</span>
                <span className="font-semibold text-slate-900">{data.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Sumber:</span>
                <span className="font-semibold" style={{ color: '#001F73' }}>{data.source}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className="border rounded-lg p-4 text-sm text-center" style={{ backgroundColor: 'rgba(0, 31, 115, 0.1)', borderColor: '#00B8E6', color: '#001F73' }}>
          <p>Data diperbarui secara real-time dari sumber resmi</p>
        </div>
      </div>
    </div>
  );
}
