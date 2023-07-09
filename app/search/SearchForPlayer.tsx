'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';

interface PlayerData {
  name: string;
  profileIconId: number;
  summonerLevel: number;
  puuid: string;
}

interface MatchData {
  participants: any[];
  puuid: string;
  matchId: string;
  championName: string;
  championLevel: number;
  itemIds: number[];
  items: { id: number; name: string; image: string }[];
}

function App() {
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [matchHistory, setMatchHistory] = useState<MatchData[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null);
  const [championImageUrl, setChampionImageUrl] = useState('');

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    if (selectedMatch) {
      fetchMatchData(selectedMatch.matchId);
    }
  }, [selectedMatch]);

  function selectMatch(match: MatchData) {
    setSelectedMatch(match);
  }

  function fetchMatchHistory(puuid: string) {
    if (!API_KEY) return; // API key not available

    const APICALLSTRING =
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids` +
      '?count=10' +
      '&api_key=' +
      API_KEY;

    axios
      .get<string[]>(APICALLSTRING)
      .then(function (response) {
        console.log(response.data);
        const matchIds: string[] = response.data.slice(0, 10); // Limit to first 10 matches
        const matches: MatchData[] = matchIds.map((matchId) => ({
          participants: [], // Add an empty participants array
          puuid,
          matchId,
          championName: '',
          championLevel: 0,
          itemIds: [],
          items: [],
        }));
        setMatchHistory(matches);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function searchForPlayer() {
    const APICALLSTRING =
      'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
      searchText +
      '?api_key=' +
      API_KEY;
    axios
      .get<PlayerData>(APICALLSTRING)
      .then(function (response) {
        console.log(response.data);
        setPlayerData(response.data);
        fetchMatchHistory(response.data.puuid);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchMatchData(matchId: string) {
    if (!API_KEY || !selectedMatch) return; // API key not available or no selected match

    const APICALLSTRING = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`;

    axios
      .get(APICALLSTRING)
      .then(function (response) {
        console.log(response.data);
        const participant = response.data.info.participants.find(
          (p: { puuid: string }) => p.puuid === selectedMatch.puuid,
        );
        if (!participant) return;

        const championName = participant.championName.replace(/\s/g, '');
        const championLevel = participant.championLevel;
        const itemIds = participant.items.map(
          (item: { id: number }) => item.id,
        );

        const updatedMatchHistory = matchHistory.map((match) =>
          match.matchId === matchId
            ? { ...match, championName, championLevel, itemIds }
            : match,
        );
        setMatchHistory(updatedMatchHistory);
        fetchItemData(itemIds);
        fetchChampionImage(championName);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchChampionImage(championName: string) {
    const championsURL =
      'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json';

    axios
      .get(championsURL)
      .then(function (response) {
        const championData = response.data.data;
        const championInfo = championData[championName];
        if (!championInfo) return;

        const championImageUrl = `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${championInfo.image.full}`;
        setChampionImageUrl(championImageUrl);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchItemData(itemIds: number[]) {
    if (!API_KEY || !selectedMatch) return; // API key not available or no selected match

    const itemURL =
      'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/item.json';

    axios
      .get(itemURL)
      .then(function (response) {
        console.log(response.data);
        const itemsData = response.data.data;
        const participant = selectedMatch.participants.find(
          (p: { championName: string }) =>
            p.championName === selectedMatch.championName,
        );
        if (!participant) return;

        const items = itemIds
          .filter((itemId) => participant.itemIds.includes(itemId))
          .map((itemId) => {
            const item = itemsData[itemId.toString()];
            return {
              id: itemId,
              name: item.name,
              image: `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${itemId}.png`,
            };
          });

        const updatedMatchHistory = matchHistory.map((m) =>
          m.matchId === selectedMatch.matchId ? { ...m, items } : m,
        );
        setMatchHistory(updatedMatchHistory);
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
          {matchHistory.length > 0 ? (
            <div>
              <h2>Match History</h2>
              <ul className={styles.matchList}>
                {matchHistory.map((match: MatchData, index: number) => {
                  const key = `match-${index}-${match.matchId}`;

                  return (
                    <li key={key}>
                      <img
                        width="50"
                        height="50"
                        alt={match.championName}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${match.championName}.png`}
                      />
                      {match.matchId}
                      <button
                        className={styles.button}
                        onClick={() => selectMatch(match)}
                      >
                        Choose Match
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <p>No match history found</p>
          )}
        </>
      ) : null}

      {selectedMatch ? (
        <div>
          <h2>Selected Match</h2>
          <p>Match ID: {selectedMatch.matchId}</p>
          <img
            width="100"
            alt={selectedMatch.championName}
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${selectedMatch.championName}.png`}
          />
          <p>Champion Name: {selectedMatch.championName}</p>
          <p>Champion Level: {selectedMatch.championLevel}</p>
          <h3>Items:</h3>
          <div>
            {selectedMatch.items.length > 0 ? (
              selectedMatch.items.map((item) => (
                <div key={item.id}>
                  <img
                    width="50"
                    height="50"
                    alt={item.name}
                    src={item.image}
                  />
                  <p>{item.name}</p>
                </div>
              ))
            ) : (
              <p>No items found for this champion in the selected match.</p>
            )}
          </div>
          <h3>All Items:</h3>
          <div>
            {selectedMatch.items.length > 0 ? (
              selectedMatch.items.map((item) => (
                <div key={item.id}>
                  <img
                    width="50"
                    height="50"
                    alt={item.name}
                    src={item.image}
                  />
                  <p>{item.name}</p>
                </div>
              ))
            ) : (
              <p>No items found.</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
