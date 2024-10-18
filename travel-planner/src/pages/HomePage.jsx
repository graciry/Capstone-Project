import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FeaturedDestinations from '../components/FeaturedDestinations';
import backgroundImage from '../assets/background.jpg';

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}  // Background image path
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative container mx-auto p-4 text-white flex flex-col items-center justify-center h-full w-full">
        {/* Welcome Message */}
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">
          Welcome to GlobeTrekker
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          Find Your Destination
        </p>

        {/* Search Bar */}
        <SearchBar setDestinations={setDestinations} />
        
        {/* Conditional rendering of Featured Destinations */}
        {destinations.length > 0 && <FeaturedDestinations destinations={destinations} />}
      </div>
    </div>
  );
};

export default HomePage;
