import { NextResponse } from 'next/server';
import { fetchMatchhistorybyId } from '../../getMatchHistorybyId';

export async function GET(): Promise<NextResponse<any>> {
  const data = await fetchMatchhistorybyId('EUW1_6468996758');
  return NextResponse.json({ data: data });
}
