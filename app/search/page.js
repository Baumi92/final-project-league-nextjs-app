'use client';

import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState({});

  const DB_API_KEY = process.env.DB_API_KEY;

  function searchForPlayer(event) {
    const APICallString =
      'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
      searchText +
      '?api_key=' +
      DB_API_KEY;
    axios
      .get(APICallString)
      .then(function (response) {
        console.log(response.data);
        setPlayerData(response.data);
        console.log(playerData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h1>League of Legends Player Searcher</h1>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={(e) => searchForPlayer(e)}>Search for player</button>
      {JSON.stringify(playerData) !== '{}' ? (
        <>
          <p>{playerData.name}</p>
          <img
            width="100"
            height="100"
            alt="showing profile"
            src={
              'http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/' +
              playerData.profileIconId +
              '.png'
            }
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
