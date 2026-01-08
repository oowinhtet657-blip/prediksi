'use client';

import { CalendarData } from '@/app/types/calendar';

interface NumberGridProps {
  numbers: Array<{ top: string; bottom: string }>;
  position?: 'left' | 'right';
}

export default function NumberGrid({ numbers, position = 'left' }: NumberGridProps) {
  return (
    <div className={`grid gap-3 ${position === 'left' ? '' : ''}`} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
      {numbers.map((pair, idx) => (
        <div key={idx} className="flex gap-2">
          <div className="number-box text-sm font-bold">
            {pair.top}
          </div>
          <div className="number-box text-sm font-bold">
            {pair.bottom}
          </div>
        </div>
      ))}
    </div>
  );
}
