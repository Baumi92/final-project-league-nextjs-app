import { cache } from 'react';
import { sql } from './connect';

type Account = {
  id: number;
  summoner_name: string;
  userId: number;
  puuid_id: string;
};

export const getSummonerBySummonername = cache(async (id: string) => {
  const [summoner_name] = await sql<Account[]>`
    SELECT
      id,
      summoner_name
    FROM
      id
    WHERE
      summoner_name = ${id}
 `;

  return summoner_name;
});
