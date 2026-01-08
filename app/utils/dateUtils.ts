/**
 * Utility untuk handle tanggal dan matching dengan data kalender
 */

export interface DateMatch {
  date: string;
  displayDate: string;
  day: string;
  month: string;
  year: string;
}

/**
 * Dapatkan info tanggal saat ini
 */
export function getTodayInfo(): DateMatch {
  const today = new Date();
  const dayNames = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
  const monthNames = [
    'JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI',
    'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'
  ];

  return {
    date: today.toISOString().split('T')[0],
    displayDate: today.getDate().toString().padStart(2, '0'),
    day: dayNames[today.getDay()],
    month: monthNames[today.getMonth()],
    year: today.getFullYear().toString()
  };
}

/**
 * Format tanggal untuk matching dengan data kalender
 * Input: "2025-12-28"
 * Output: "2025-12-28"
 */
export function formatDateForMatching(date: Date | string): string {
  if (typeof date === 'string') {
    return date;
  }
  return date.toISOString().split('T')[0];
}

/**
 * Cari indeks data yang cocok dengan tanggal pada pasaran tertentu
 */
export function findDateIndexInData(
  data: any[],
  targetDate: string,
  pasaran: string
): number {
  const filteredByPasaran = data.filter(item => item.pasaran === pasaran);
  const matchIndex = filteredByPasaran.findIndex(item => item.date === targetDate);
  
  // Jika tidak ditemukan, return 0 (data pertama)
  return matchIndex !== -1 ? matchIndex : 0;
}

/**
 * Cari data yang cocok dengan tanggal dan pasaran
 */
export function findMatchingData(
  data: any[],
  targetDate: string,
  pasaran: string
): any | null {
  return data.find(
    item => item.date === targetDate && item.pasaran === pasaran
  ) || null;
}

/**
 * Get tanggal berikutnya
 */
export function getNextDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

/**
 * Get tanggal sebelumnya
 */
export function getPrevDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

/**
 * Check apakah data ada untuk tanggal tertentu
 */
export function hasDataForDate(
  data: any[],
  targetDate: string,
  pasaran: string
): boolean {
  return data.some(
    item => item.date === targetDate && item.pasaran === pasaran
  );
}
