'use client';

import { CalendarData } from '@/app/types/calendar';

interface FormulaTableProps {
  data: CalendarData['formulaTable'];
}

const rows = [
  { label: 'AS', key: 'as' },
  { label: 'KOP', key: 'kop' },
  { label: 'KEPALA', key: 'kepala' },
  { label: 'EKOR', key: 'ekor' },
];

export default function FormulaTable({ data }: FormulaTableProps) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-primary px-3 py-2 font-bold">ANGKA TARUNG / RUMUS PORTAL</th>
            {['5', '3', '0', '6', '7'].map((num) => (
              <th key={num} className="border border-primary px-2 py-2 font-bold text-xs">
                {num}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}>
              <td className="border border-primary px-3 py-2 font-bold bg-primary text-white">
                {row.label}
              </td>
              {data[row.key as keyof typeof data].map((num: string, numIdx: number) => (
                <td
                  key={numIdx}
                  className="border border-primary px-2 py-2 text-center font-bold text-primary"
                >
                  {num}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
