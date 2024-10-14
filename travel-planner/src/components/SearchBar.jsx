import { useState } from 'react';
import { fetchDestinations } from '../api/amadeus';  // Import the API function

const SearchBar = ({ setDestinations }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
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

  return (
    <div className="flex justify-center items-center my-6">
      <input
        type="text"
        placeholder="Search for a destination"
        className="border border-gray-300 p-2 w-2/3 rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {loading ? 'Loading...' : 'Search'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SearchBar;
