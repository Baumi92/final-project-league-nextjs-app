const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/matchHistory', async (req, res) => {
  try {
    const { puuid, start = 0, count = 20 } = req.query;
    const response = await axios.get(
      `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`,
      {
        headers: {
          'X-Riot-Token': process.env.RIOT_API_KEY,
        },
      },
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(error.response.status || 500).send(error.response.data);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
