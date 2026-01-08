import calendarData from '@/data/calendar-data.json';

export async function GET() {
  return Response.json(calendarData);
}
