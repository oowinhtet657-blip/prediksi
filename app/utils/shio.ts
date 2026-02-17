export const shioData = {
  KUDA: ["01", "13", "25", "37", "49", "61", "73", "85", "97"],
  ULAR: ["02", "14", "26", "38", "50", "62", "74", "86", "98"],
  NAGA: ["03", "15", "27", "39", "51", "63", "75", "87", "99"],
  KELINCI: ["04", "16", "28", "40", "52", "64", "76", "88", "00"],
  HARIMAU: ["05", "17", "29", "41", "53", "65", "77", "89"],
  KERBAU: ["06", "18", "30", "42", "54", "66", "78", "90"],
  TIKUS: ["07", "19", "31", "43", "55", "67", "79", "91"],
  BABI: ["08", "20", "32", "44", "56", "68", "80", "92"],
  ANJING: ["09", "21", "33", "45", "57", "69", "81", "93"],
  AYAM: ["10", "22", "34", "46", "58", "70", "82", "94"],
  MONYET: ["11", "23", "35", "47", "59", "71", "83", "95"],
  KAMBING: ["12", "24", "36", "48", "60", "72", "84", "96"],
} as const;

export type ShioName = keyof typeof shioData;

export const pasaranList = [
  { id: "hongkong", name: "Hongkong", code: "HK" },
  { id: "sydney", name: "Sydney", code: "SYD" },
  { id: "singapore", name: "Singapore", code: "SGP" },
];

export function getShioByNumber(number: string): ShioName | null {
  const numStr = number.padStart(2, "0");
  for (const [shio, numbers] of Object.entries(shioData)) {
    if ((numbers as readonly string[]).includes(numStr)) {
      return shio as ShioName;
    }
  }
  return null;
}

export function getAllShiosFromAngka(angka: string): ShioName[] {
  const shios: ShioName[] = [];
  
  // Process 2 digit pairs from angka
  for (let i = 0; i < angka.length; i += 2) {
    const twoDigitNum = angka.substring(i, i + 2).padStart(2, "0");
    const shio = getShioByNumber(twoDigitNum);
    if (shio && !shios.includes(shio)) {
      shios.push(shio);
    }
  }
  
  return shios;
}
