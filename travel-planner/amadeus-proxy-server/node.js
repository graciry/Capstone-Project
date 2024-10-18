// server.js (or similar backend file)
const express = require('express');
const Amadeus = require('amadeus');

const amadeus = new Amadeus({
  clientId: 'f1GuSEnl5Bllvr6NbXEtyGfVKwniC8G6',
  clientSecret: 'AdhttvAoc5acowZG',
});

const app = express();

app.post('/api/destinations', async (req, res) => {
  const query = req.query.keyword;
  try {
    const response = await amadeus.referenceData.locations.post({
      keyword: query,
      subType: 'CITY,AIRPORT',
      'page[limit]': 5,
    });
    res.json(response.data);
    console.log(response.data); // Send destinations data to frontend
    return response.data;
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
