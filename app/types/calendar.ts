interface NumberPair {
  top: string;
  bottom: string;
}

interface FormulaTable {
  as: string[];
  kop: string[];
  kepala: string[];
  ekor: string[];
}

export interface CalendarData {
  id: string;
  market: string;
  pasaran: string;
  date: string;
  day: string;
  displayDate: string;
  month: string;
  year: string;
  leftNumbers: NumberPair[];
  rightNumbers: NumberPair[];
  bbfs: string;
  angkaMain: string;
  formulaTable: FormulaTable;
}
