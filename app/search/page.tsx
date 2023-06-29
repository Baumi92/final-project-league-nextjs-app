'use client';

import axios from 'axios';
import React, { useState } from 'react';
import styles from './page.module.scss';

interface PlayerData {
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

export async function getServersideProps() {
  const response = await axios({
    method: process.env.API_URL,
    headers: {
      Authorization: process.env.API_KEY,
    },
  });
  console.log(response);
}

function App() {
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  const API_KEY = 'RGAPI-ad140755-0a25-444b-a3cd-adc911de5419';

  function searchForPlayer(event: React.MouseEvent<HTMLButtonElement>) {
    const APICallString =
      'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
      searchText +
      '?api_key=' +
      API_KEY;
    axios
      .get<PlayerData>(APICallString)
      .then(function (response) {
        console.log(response.data);
        setPlayerData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>League of Legends Player Searcher</h1>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button className={styles.button} onClick={searchForPlayer}>
        Search for player
      </button>
      {playerData ? (
        <>
          <p>{playerData.name}</p>
          <img
            width="100"
            height="100"
            alt="showing profile"
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${playerData.profileIconId}.png`}
          />
          <p>Summoner Level {playerData.summonerLevel}</p>
        </>
      ) : (
        <p>No player data</p>
      )}
    </div>
  );
}

export default App;
