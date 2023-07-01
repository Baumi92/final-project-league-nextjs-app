'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface MatchData {
  // Define the structure of the match data as per your API response
  // Include the necessary properties required for rendering the matches
  id: string;
  puuid: string;
  apiUrl: string;
  apiKey: string;
  // ... other properties
}

function App() {
  const [matches, setMatches] = useState<MatchData[]>([]);

  const API_KEY = 'RGAPI-ad140755-0a25-444b-a3cd-adc911de5419';

  useEffect(() => {
    async function fetchMatchHistory() {
      const puuid =
        '2Ujtmy1ktR2psVkUMsLj1V0n3JfjtEJu77CYUZFxqQdaGEhKUVOkP-uSPPRRopMMF542Lar0nhXnrQ'; // Replace with the actual puuid

      const apiUrl =
        `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10` +
        '?api_key' +
        API_KEY;
      try {
        const response = await axios.get<string[]>(apiUrl, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        console.log(response.data);
        // Process the match data as per your API response
        // Set the matches state variable with the processed data
        const processedMatches: MatchData[] = response.data.map(
          (id: string) => ({
            id,
            // ... other properties
          }),
        );
        setMatches(processedMatches);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMatchHistory();
  }, []);

  return (
    <div>
      <h1>Match History</h1>
      {matches.length > 0 ? (
        <div>
          <h2>Last 10 Matches:</h2>
          {matches.map((match: MatchData) => (
            <div key={match.id}>
              <p>Match ID: {match.id}</p>
              {/* Render other match information */}
            </div>
          ))}
        </div>
      ) : (
        <p>No match history found</p>
      )}
    </div>
  );
}

export default App;
