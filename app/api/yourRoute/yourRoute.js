// api/yourRoute.js

const db = require('../path/to/db.js');
const fetch = require('node-fetch');

// Example API route
export default async function handler(req, res) {
  try {
    // Fetch data from League of Legends API
    const response = await fetch('http://localhost:3000/api/summoner');
    const data = await response.json();

    // Insert the data into your database
    const insertQuery = 'INSERT INTO accounts (colum) VALUES ($1)';
    await db.query(insertQuery, [data.field1]);

    res.status(200).json({ message: 'Data stored successfully' });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
