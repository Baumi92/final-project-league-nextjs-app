'use client';

import { useEffect } from 'react';

const authorization = new Headers();
authorization.append('X-Riot-Token', process.env.NEXT_PUBLIC_API_KEY || '');
console.log(process.env.NEXT_PUBLIC_API_KEY);
const Home = () => {
  useEffect(() => {
    const getSummonerData = async (summonerName: string) => {
      try {
        const url = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: authorization,
        });

        const data = response.json();
        console.log('Data: ', data);
      } catch (error) {
        console.error('Error fetching summoner:', error);
        throw error;
      }
    };

    getSummonerData('Wilde Hilde').catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>Home Page</div>
    </>
  );
};

export default Home;
