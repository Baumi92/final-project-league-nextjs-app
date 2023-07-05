'use client';

import { NextPageContext } from 'next';
import { useEffect, useState } from 'react';
import { fetchSummonerByName } from '../api/getSummoner';

interface SummonerPageProps {
  data: any; // Specify the type of `data` here
}

const SummonerPage = ({ data }: SummonerPageProps) => {
  const [summonerData, setSummonerData] = useState(data);

  useEffect(() => {
    setSummonerData(data);
  }, [data]);

  return (
    <div>
      <h1>Summoner Page</h1>
      {summonerData ? (
        <div>
          <h2>Summoner Data:</h2>
          <pre>{JSON.stringify(summonerData, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

SummonerPage.getInitialProps = async (ctx: NextPageContext) => {
  try {
    const summonerData = await fetchSummonerByName('Wilde Hilde');
    return { data: summonerData };
  } catch (error) {
    console.error('Error fetching summoner:', error);
    return { data: null };
  }
};

export default SummonerPage;
