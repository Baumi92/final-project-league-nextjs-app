import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface SummonerData {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
}
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: {
    RIOT_API_KEY: process.env.RIOT_API_KEY,
  },
};

export default async function summonerHandler(
  req: NextApiRequest,
  res: NextApiResponse<SummonerData | { message: string }>,
) {
  const summonerName = req.query.summonerName as string;
  const RIOT_API_KEY = process.env.RIOT_API_KEY;

  try {
    const response = await axios.get(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}` +
        '?api_key=' +
        RIOT_API_KEY,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'Accept-Language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
          'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
          Origin: 'https://developer.riotgames.com',
          'X-Riot-Token': process.env.RIOT_API_KEY!,
        },
      },
    );

    const summonerData: SummonerData = {
      accountId: response.data.accountId,
      profileIconId: response.data.profileIconId,
      revisionDate: response.data.revisionDate,
      name: response.data.name,
      id: response.data.id,
      puuid: response.data.puuid,
      summonerLevel: response.data.summonerLevel,
    };

    res.status(200).json(summonerData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching summoner data' });
  }
}
