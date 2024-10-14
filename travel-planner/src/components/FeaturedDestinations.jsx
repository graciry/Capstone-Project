import React from 'react';

const FeaturedDestinations = ({ destinations }) => {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Destinations</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <li key={destination.id} className="bg-white text-black p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{destination.name}</h3>
            <p>{destination.iataCode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedDestinations;
