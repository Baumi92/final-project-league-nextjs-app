const authorization = new Headers();
authorization.append('X-Riot-Token', process.env.NEXT_PUBLIC_API_KEY || '');
// Function to make the API call
export const fetchProfileIcon = async (profileIconId: string) => {
  try {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.13.1/img/profileicon/1629.png`;

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
