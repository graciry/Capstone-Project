import { useState } from 'react';

const ItineraryPlanner = () => {
  const [itinerary, setItinerary] = useState([]);

  const addToItinerary = (item) => {
    setItinerary([...itinerary, item]);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold">Your Itinerary</h2>
      <ul className="my-4">
        {itinerary.map((item, index) => (
          <li key={index} className="bg-white p-4 shadow-md rounded-md mb-2">
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={() => addToItinerary('New Item')}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add to Itinerary
      </button>
    </div>
  );
};

export default ItineraryPlanner;
