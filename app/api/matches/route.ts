import { NextResponse } from 'next/server';
import { fetchMatchhistorybyId } from '../getMatchHistorybyId';

export async function GET(): Promise<NextResponse<any>> {
  const data = await fetchMatchhistorybyId(
    '2Ujtmy1ktR2psVkUMsLj1V0n3JfjtEJu77CYUZFxqQdaGEhKUVOkP-uSPPRRopMMF542Lar0nhXnrQ',
  );
  console.log('Data: ', data);
  return NextResponse.json({ data: data });
}
