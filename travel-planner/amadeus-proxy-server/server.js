const express = require('express');
const Amadeus = require('amadeus');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());  // Enable CORS for all routes

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,  // Ensure you set these in your .env file
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

app.get('/api/destinations', async (req, res) => {
  const keyword = req.query.keyword;
  try {
    const response = await amadeus.referenceData.locations.get({
      keyword: keyword,
      subType: 'CITY,AIRPORT',
      'page[limit]': 5,
    });
    res.json(response.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
