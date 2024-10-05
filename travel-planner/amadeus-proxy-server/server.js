const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Update CORS configuration to explicitly allow localhost:5173
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only your client origin
  methods: 'GET,POST,PUT,DELETE',  // Specify allowed HTTP methods
  credentials: true,               // Allow credentials if needed
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON bodies

// Proxy endpoint
app.post('/api/fetch-destinations', async (req, res) => {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
      grant_type: 'client_credentials',
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    res.status(error.response ? error.response.status : 500).json({
      message: 'Error fetching destinations',
      error: error.response ? error.response.data : 'Unknown error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
