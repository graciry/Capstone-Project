// server.js (or similar backend file)
const express = require('express');
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: 'YOUR_API_KEY',
  clientSecret: 'YOUR_API_SECRET',
});

const app = express();

app.get('/api/destinations', async (req, res) => {
  const query = req.query.keyword;
  try {
    const response = await amadeus.referenceData.locations.get({
      keyword: query,
      subType: 'CITY,AIRPORT',
      'page[limit]': 5,
    });
    res.json(response.data);  // Send destinations data to frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
