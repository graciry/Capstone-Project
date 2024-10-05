import React from 'react';

const DestinationPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/src/assets/destination.jpg")' }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Paris, France</h1>
          <p className="text-xl text-white mt-4">The city of lights, home to the Eiffel Tower and rich culture.</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            Plan Your Trip
          </button>
        </div>
      </div>

      {/* Weather Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold">Current Weather</h2>
        <div className="flex space-x-4 mt-4">
          <div>
            <p className="text-xl">Sunny</p>
            <p className="text-lg">25°C</p>
          </div>
          <div>
            <p>Mon: 22°C - Clear</p>
            <p>Tue: 20°C - Rain</p>
            <p>Wed: 23°C - Sunny</p>
          </div>
        </div>
      </div>

      {/* Top Attractions */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold">Top Attractions</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* Attraction Cards */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/src/assets/eiffel.jpg" alt="Attraction 1" className="h-40 w-full object-cover rounded-md" />
            <h3 className="mt-4 font-semibold text-lg">Eiffel Tower</h3>
            <p className="mt-2 text-sm">Iconic iron lattice tower located on the Champ de Mars in Paris.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/src/assets/louvre.jpg" alt="Attraction 2" className="h-40 w-full object-cover rounded-md" />
            <h3 className="mt-4 font-semibold text-lg">Louvre Museum</h3>
            <p className="mt-2 text-sm">World's largest art museum, located in the historic Louvre Palace.</p>
          </div>
        </div>
      </div>

      {/* Flights Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold">Available Flights</h2>
        <form className="grid grid-cols-3 gap-6 mt-4">
          <div>
            <label className="block font-medium mb-2">Departure City</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none" placeholder="New York" />
          </div>
          <div>
            <label className="block font-medium mb-2">Arrival City</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none" placeholder="Paris" />
          </div>
          <div>
            <label className="block font-medium mb-2">Departure Date</label>
            <input type="date" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Travel Planner. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-500">Facebook</a> | <a href="#" className="text-blue-500">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DestinationPage;
