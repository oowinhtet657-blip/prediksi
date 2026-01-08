// Generate calendar data dengan real-time dates dan prediksi untuk 8 pasaran

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBBFS(): string {
  const digits = new Set<number>();
  while (digits.size < 5) {
    digits.add(generateRandomNumber(0, 9));
  }
  return Array.from(digits).join('');
}

function generateAngkaMain(): string {
  return Array.from({ length: 4 }, () =>
    generateRandomNumber(0, 9)
  ).join('');
}

function generateFormulaTable() {
  return {
    as: Array.from({ length: 5 }, () => generateRandomNumber(0, 9).toString()),
    kop: Array.from({ length: 5 }, () => generateRandomNumber(0, 9).toString()),
    kepala: Array.from({ length: 5 }, () => generateRandomNumber(0, 9).toString()),
    ekor: Array.from({ length: 5 }, () => generateRandomNumber(0, 9).toString()),
  };
}

function generateNumberPairs(count: number) {
  return Array.from({ length: count }, () => ({
    top: String(generateRandomNumber(10, 99)),
    bottom: String(generateRandomNumber(10, 99)),
  }));
}

const pasaranList = [
  { id: 'hongkong-siang', name: 'Hongkong Siang', market: 'HONGKONG SIANG' },
  { id: 'sydney', name: 'Sydney', market: 'SYDNEY' },
  { id: 'taiping', name: 'Taiping', market: 'TAIPING' },
  { id: 'singapore', name: 'Singapore', market: 'SINGAPORE' },
  { id: 'malaysia', name: 'Malaysia', market: 'MALAYSIA' },
  { id: 'etawah', name: 'Etawah', market: 'ETAWAH' },
  { id: 'hongkong', name: 'Hongkong', market: 'HONGKONG' },
  { id: 'totowuhan', name: 'Totowuhan', market: 'TOTOWUHAN' },
];

const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const monthNames = [
  'JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI',
  'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'
];

export function generateCalendarData() {
  const data: any[] = [];
  const today = new Date();

  // Generate 30 hari ke depan untuk setiap pasaran
  for (let pasaran of pasaranList) {
    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() + i);

      const date = String(currentDate.getDate()).padStart(2, '0');
      const month = monthNames[currentDate.getMonth()];
      const year = currentDate.getFullYear();
      const day = dayNames[currentDate.getDay()];

      const id = `${pasaran.id}-${currentDate.toISOString().split('T')[0]}`;
      const dateString = currentDate.toISOString().split('T')[0];

      data.push({
        id,
        market: pasaran.market,
        pasaran: pasaran.id,
        date: dateString,
        day,
        displayDate: date,
        month,
        year,
        leftNumbers: generateNumberPairs(4),
        rightNumbers: generateNumberPairs(4),
        bbfs: generateBBFS(),
        angkaMain: generateAngkaMain(),
        formulaTable: generateFormulaTable(),
      });
    }
  }

  return data;
}

// Export untuk debug
// Uncomment untuk menjalankan langsung:
// const data = generateCalendarData();
// console.log(JSON.stringify(data, null, 2));
