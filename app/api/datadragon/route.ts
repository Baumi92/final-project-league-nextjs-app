import { NextResponse } from 'next/server';
import { fetchProfileIcon } from '../getDatadragon';

export async function GET(): Promise<NextResponse<any>> {
  const data = await fetchProfileIcon('1629');
  return NextResponse.json({ data: data });
}
