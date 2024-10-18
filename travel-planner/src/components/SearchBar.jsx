import { useState } from 'react';
import { fetchDestinations } from '../api/amadeus';  // Import the API function

const SearchBar = ({ setDestinations }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError('Please enter a destination to search.');
      return;
    }
    
    setLoading(true);
    setError(null);  // Reset any previous errors
    try {
      const destinations = await fetchDestinations(query);
      setDestinations(destinations);  // Update the destinations state in parent component
    } catch (err) {
      setError('Failed to fetch destinations. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  // Trigger search when Enter key is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent form submission or page refresh
      handleSearch();  // Call the search function
    }
  };



  return (
    <div className="flex justify-center items-center my-6 relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search for a destination"
        className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}  // Handle Enter key press
      />
      <button
        onClick={handleSearch}
        className="ml-4 bg-blue-500 text-black px-4 py-2 rounded-md"
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SearchBar;
