'use client';

import { CalendarData } from '@/app/types/calendar';
import NumberGrid from './NumberGrid';
import FormulaTable from './FormulaTable';
import ShioDisplay from './ShioDisplay';
import { getAllShiosFromAngka } from '@/app/utils/shio';

interface CalendarCardProps {
  data: CalendarData;
}

export default function CalendarCard({ data }: CalendarCardProps) {
  const bbfsShios = getAllShiosFromAngka(data.bbfs);
  const mainAngkaShios = getAllShiosFromAngka(data.angkaMain);

  return (
    <div className="card-calendar border-8 border-primary">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-primary to-secondary text-white p-6 text-center">
        <p className="text-sm font-bold tracking-widest mb-2">CHANNEL PREDIKSI</p>
        <h1 className="text-4xl md:text-5xl font-black mb-2">KALENDER TOGEL</h1>
        <p className="text-lg md:text-2xl font-bold">{data.market}</p>
      </div>

      {/* Date Display - Main Focus */}
      <div className="bg-white text-blue-900 p-8 text-center">
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 max-w-xs mx-auto">
          {/* Left Numbers Grid */}
          <div className="flex flex-col gap-2">
            {data.leftNumbers.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-1">
                <div className="bg-primary text-white font-bold p-2 text-center text-sm rounded border-2 border-primary">
                  {pair.top}
                </div>
                <div className="bg-primary text-white font-bold p-2 text-center text-sm rounded border-2 border-primary">
                  {pair.bottom}
                </div>
              </div>
            ))}
          </div>

          {/* Center Large Date */}
          <div className="flex flex-col justify-between">
            <div className="text-6xl md:text-7xl font-black text-primary leading-none text-center">
              {data.displayDate}
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-600">{data.month}</p>
              <p className="text-sm font-bold text-gray-700">{data.year}</p>
            </div>
          </div>

          {/* Right Numbers Grid */}
          <div className="flex flex-col gap-2">
            {data.rightNumbers.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-1">
                <div className="bg-primary text-white font-bold p-2 text-center text-sm rounded border-2 border-primary">
                  {pair.top}
                </div>
                <div className="bg-primary text-white font-bold p-2 text-center text-sm rounded border-2 border-primary">
                  {pair.bottom}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm font-bold text-gray-600 mb-4">{data.day.toUpperCase()}</p>
      </div>

      {/* Statistics Section */}
      <div className="bg-white text-blue-900 px-6 pb-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-primary text-white p-4 rounded-lg text-center">
            <p className="text-xs font-bold text-blue-100 mb-2">BBFS 5D</p>
            <p className="text-2xl md:text-3xl font-black tracking-wider">{data.bbfs}</p>
          </div>
          <div className="bg-primary text-white p-4 rounded-lg text-center">
            <p className="text-xs font-bold text-blue-100 mb-2">ANGKA MAIN</p>
            <p className="text-2xl md:text-3xl font-black tracking-wider">{data.angkaMain}</p>
          </div>
        </div>

        {/* Formula Table */}
        <FormulaTable data={data.formulaTable} />

        {/* Shio Display */}
        <ShioDisplay shios={bbfsShios} title="SHIO BBFS" />
        <ShioDisplay shios={mainAngkaShios} title="SHIO ANGKA MAIN" />
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border-t-4 border-yellow-300 px-6 py-4">
        <p className="text-xs text-center text-yellow-800 font-semibold">
          ⚠️ Aplikasi ini bersifat <strong>hiburan</strong> dan <strong>analisis statistik data historis</strong>.
          <br />
          Bukan prediksi pasti. Gunakan dengan bijak.
        </p>
      </div>
    </div>
  );
}
