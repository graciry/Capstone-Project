import axios from 'axios';

// Function to authenticate and retrieve access token from Amadeus
export const authenticateAmadeus = async () => {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        grant_type: 'client_credentials',
        client_id: import.meta.env.VITE_AMADEUS_API_KEY,
        client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw new Error('Authentication failed');
  }
};

// Function to fetch destination data from Amadeus
export const fetchDestinations = async (query) => {
  try {
    const token = await authenticateAmadeus(); // Get the access token
    const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: query,
        subType: 'CITY',
      },
    });

    return response.data.data; // Return the destination data
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw new Error('Failed to fetch destination data');
  }
};
