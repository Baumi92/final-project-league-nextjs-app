'use client';
import { useState } from 'react';

interface SummonerData {
  name: string;
  profileIconId: number;
}

const Post = () => {
  const [summonerName, setSummonerName] = useState('');
  const [summonerData, setSummonerData] = useState<SummonerData | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/euw1.api.riotgames.com/summoner?summonerName=${summonerName}`,
      );
      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }
      const data = await response.json();
      setSummonerData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="summonerName">Summoner Name</label>
        <input
          id="summonerName"
          type="name"
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>

      {summonerData && (
        <div>
          <h2>Summoner Name: {summonerData.name}</h2>
          <img
            src={`https://euw1.api.riotgames.com/profileIcons/${summonerData.profileIconId}.png`}
            alt="Profile Icon"
          />
        </div>
      )}
    </form>
  );
};

export default Post;
