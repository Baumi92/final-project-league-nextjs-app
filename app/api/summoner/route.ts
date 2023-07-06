import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getValidSessionByToken } from '../../../database/sessions';
import { fetchSummonerByName } from '../getSummoner';

export async function GET(): Promise<NextResponse<any>> {
  const data = await fetchSummonerByName('Wilde Hìlde');
  return NextResponse.json({ data: data });
}

//import axios from 'axios';
//
//const authorization = new Headers();
//authorization.append('X-Riot-Token', process.env.NEXT_PUBLIC_API_KEY || '');
//// Function to make the API call
//export const fetchSummonerByName = async (summonerName: string) => {
//  try {
//    const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
//
//    const response = await fetch(url, {
//      method: 'GET',
//      headers: authorization,
//    });
//
//    const data = response.json();
//    console.log('Data: ', data);
//  } catch (error) {
//    console.error('Error fetching summoner:', error);
//    throw error;
//  }
//};
