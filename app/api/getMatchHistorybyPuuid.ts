const authorization = new Headers();
authorization.append('X-Riot-Token', process.env.NEXT_PUBLIC_API_KEY || '');
// Function to make the API call
export const fetchMatchhistorybyPuuid = async (puuid: string) => {
  try {
    const url = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`;

    const response = await fetch(url, {
      method: 'GET',
      headers: authorization,
    });

    const data = await response.json();
    console.log('Data: ', data);
    return data;
  } catch (error) {
    console.error('Error fetching summoner:', error);
    throw error;
  }
};
