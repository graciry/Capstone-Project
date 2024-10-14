import axios from 'axios';

const AMADEUS_API_URL = 'https://test.api.amadeus.com/v1/security/oauth2/token'; // Test environment URL
const LOCATION_API_URL = 'https://test.api.amadeus.com/v1/reference-data/locations';

const CLIENT_ID = 'f1GuSEnl5Bllvr6NbXEtyGfVKwniC8G6'; // Replace with your actual Client ID
const CLIENT_SECRET = 'AdhttvAoc5acowZG'; // Replace with your actual Client Secret

// Function to get an access token from Amadeus API
export const getAccessToken = async () => {
  try {
    const response = await axios.post(
      AMADEUS_API_URL,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

// Function to fetch locations based on user input
export const fetchLocations = async (accessToken, query) => {
  try {
    const response = await axios.get(`${LOCATION_API_URL}`, {
      params: {
        keyword: query,
        subType: 'AIRPORT,CITY', // Specify that we're searching for airports or cities
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.data; // Return the location data
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};
