// amadeus.js

export const fetchDestinations = async (query) => {
  try {
    const response = await fetch(`http://localhost:5000/api/destinations?keyword=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch destinations:', error);
    throw error;  // Re-throw the error to be handled by the caller
  }
};
