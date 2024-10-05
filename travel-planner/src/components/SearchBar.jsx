
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store input value

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery) {
      console.error("Search query is empty");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/fetch-destinations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }), // Send the search query to the backend
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data); // Do something with the data (e.g., display results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="flex items-center justify-center p-6 bg-gray-100"
    >
      <input
        type="text"
        value={searchQuery} // Controlled input
        onChange={(e) => setSearchQuery(e.target.value)} // Update state with input value
        placeholder="Search destinations"
        className="border border-gray-300 rounded-lg py-2 px-4 w-64 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <button 
        type="submit"
        className="ml-4 bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
