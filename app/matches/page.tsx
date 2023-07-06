'use client';
import { useState } from 'react';

interface PlayerData {
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

const SummonerSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);

  const searchForPlayer = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/summoner?name=${searchText}`,
      );
      const data = await response.json();
      setPlayerData(data);
    } catch (error) {
      console.error('Error fetching player data:', error);
    }
  };

  return (
    <div>
      <h1>League of Legends Player Searcher</h1>
      <p>asshole</p>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={searchForPlayer}>Search for player</button>
      {playerData ? (
        <div>
          <p>Summoner Name: {playerData.name}</p>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${playerData.profileIconId}.png`}
            alt="Profile Icon"
          />
          <p>Summoner Level: {playerData.summonerLevel}</p>
        </div>
      ) : (
        <p>No player data</p>
      )}
    </div>
  );
};

export default SummonerSearch;
