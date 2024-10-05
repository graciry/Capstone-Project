import axios from 'axios';

export const fetchDestinations = async () => {
  try {
    const response = await axios.post('/api/v1/security/oauth2/token', {
      grant_type: 'client_credentials',
      // Add any other necessary headers or body content
    });
    return response.data; // Return data for use in the component
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error; // Rethrow error for handling in the component
  }
};
