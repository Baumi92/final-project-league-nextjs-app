'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../search/page.module.scss';

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
  items: any[]; // Change the type of items back to any[]
  gameNumber: number;
  championImageUrl?: string;
}

function App() {
  const [searchText, setSearchText] = useState('');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [matchHistory, setMatchHistory] = useState<MatchData[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    if (selectedMatch) {
      fetchMatchData(selectedMatch.matchId);
    }
  }, [selectedMatch]);

  function selectMatch(match: MatchData) {
    setSelectedMatch(match);
    fetchChampionImage(match.championName);
  }

  function fetchMatchHistory(puuid: string) {
    if (!API_KEY) return;

    const APICALLSTRING =
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids` +
      '?count=10' +
      '&api_key=' +
      API_KEY;

    axios
      .get<string[]>(APICALLSTRING)
      .then(function (response) {
        console.log(response.data);
        const matchIds: string[] = response.data.slice(0, 10);
        const matches: MatchData[] = matchIds.map((matchId, index) => ({
          participants: [],
          puuid,
          matchId,
          championName: '',
          championLevel: 0,
          itemIds: [],
          items: [],
          gameNumber: index + 1,
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
    if (!API_KEY || !selectedMatch) return;

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

        const updatedMatchHistory = matchHistory.map((match) =>
          match.matchId === matchId
            ? { ...match, championName, championLevel }
            : match,
        );
        setMatchHistory(updatedMatchHistory);
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
        setMatchHistory((prevMatchHistory) => {
          return prevMatchHistory.map((match) => {
            if (match.championName === championName) {
              return { ...match, championImageUrl };
            }
            return match;
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>League of Legends Player Searcher</h1>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className={styles.button} onClick={searchForPlayer}>
        Search for player
      </button>
      {playerData ? (
        <>
          <p className={styles.h1}>{playerData.name}</p>
          <img
            width="100"
            height="100"
            alt="showing profile"
            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/${playerData.profileIconId}.png`}
          />
          <p className={styles.matches}>
            Summoner Level {playerData.summonerLevel}
          </p>
          {matchHistory && matchHistory.length > 0 ? (
            <div className={styles.matches}>
              <h2 className={styles.matchList}>Match History</h2>
              <ul className={styles.matchList}>
                {matchHistory.map((match: MatchData, index: number) => {
                  const key = `match-${index}`;

                  return (
                    <li className={styles.matchList} key={key}>
                      Game {match.gameNumber}
                      {match.championImageUrl && (
                        <img
                          width="50"
                          height="50"
                          alt={match.championName}
                          src={match.championImageUrl}
                        />
                      )}
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
        <div className={styles.matches}>
          <h2 className={styles.matches}>Selected Match</h2>
          <p className={styles.matches}>Match ID: {selectedMatch.gameNumber}</p>
          {selectedMatch.championImageUrl && (
            <img
              width="100"
              alt={selectedMatch.championName}
              src={selectedMatch.championImageUrl}
            />
          )}
          <p className={styles.matches}>
            Champion Name: {selectedMatch.championName}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
