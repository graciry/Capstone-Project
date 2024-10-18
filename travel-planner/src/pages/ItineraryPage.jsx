import React, { useState } from 'react';
import destination from '../assets/destination.jpg';

const ItineraryPage = () => {
  // State for form inputs
  const [flightDetails, setFlightDetails] = useState({ departure: '', arrival: '', flightDate: '' });
  const [accommodationDetails, setAccommodationDetails] = useState({ hotel: '', checkIn: '', checkOut: '' });
  const [destinationDetails, setDestinationDetails] = useState({ city: '', country: '' });

  // State for the list of itineraries
  const [itinerary, setItinerary] = useState([]);

  // Handle input changes for flights
  const handleFlightChange = (e) => {
    setFlightDetails({
      ...flightDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle input changes for accommodation
  const handleAccommodationChange = (e) => {
    setAccommodationDetails({
      ...accommodationDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle input changes for destination
  const handleDestinationChange = (e) => {
    setDestinationDetails({
      ...destinationDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleAddToItinerary = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Add the new itinerary details to the state
    const newItinerary = {
      flight: `${flightDetails.departure} to ${flightDetails.arrival} on ${flightDetails.flightDate}`,
      accommodation: `${accommodationDetails.hotel} from ${accommodationDetails.checkIn} to ${accommodationDetails.checkOut}`,
      destination: `${destinationDetails.city}, ${destinationDetails.country}`,
    };

    // Update the itinerary list
    setItinerary([...itinerary, newItinerary]);

    // Clear form inputs after submission
    setFlightDetails({ departure: '', arrival: '', flightDate: '' });
    setAccommodationDetails({ hotel: '', checkIn: '', checkOut: '' });
    setDestinationDetails({ city: '', country: '' });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${destination})` }} // Update with your image path
    >
      {/* Plan Your Trip Form */}
      <section className="bg-white bg-opacity-70 p-6 rounded-md m-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Plan Your Trip</h1>

        <form onSubmit={handleAddToItinerary} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Flight Details */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Flight Details</h2>
            <label htmlFor="departure" className="font-semibold">Departure City</label>
            <input
              type="text"
              id="departure"
              name="departure"
              value={flightDetails.departure}
              onChange={handleFlightChange}
              placeholder="Enter departure city"
              className="border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="arrival" className="font-semibold">Arrival City</label>
            <input
              type="text"
              id="arrival"
              name="arrival"
              value={flightDetails.arrival}
              onChange={handleFlightChange}
              placeholder="Enter arrival city"
              className="border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="flight-date" className="font-semibold">Date</label>
            <input
              type="date"
              id="flight-date"
              name="flightDate"
              value={flightDetails.flightDate}
              onChange={handleFlightChange}
              className="border border-gray-300 p-2 rounded-md mb-4"
            />
          </div>

          {/* Accommodation Details */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Accommodation Details</h2>
            <label htmlFor="hotel-name" className="font-semibold">Hotel Name</label>
            <input
              type="text"
              id="hotel-name"
              name="hotel"
              value={accommodationDetails.hotel}
              onChange={handleAccommodationChange}
              placeholder="Enter hotel name"
              className="border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="check-in" className="font-semibold">Check-in Date</label>
            <input
              type="date"
              id="check-in"
              name="checkIn"
              value={accommodationDetails.checkIn}
              onChange={handleAccommodationChange}
              className="border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="check-out" className="font-semibold">Check-out Date</label>
            <input
              type="date"
              id="check-out"
              name="checkOut"
              value={accommodationDetails.checkOut}
              onChange={handleAccommodationChange}
              className="border border-gray-300 p-2 rounded-md mb-4"
            />
          </div>

          {/* Destination Details */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Destination Details</h2>
            <label htmlFor="city" className="font-semibold">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={destinationDetails.city}
              onChange={handleDestinationChange}
              placeholder="Enter destination city"
              className="border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="country" className="font-semibold">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={destinationDetails.country}
              onChange={handleDestinationChange}
              placeholder="Enter destination country"
              className="border border-gray-300 p-2 rounded-md mb-4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add to Itinerary
            </button>
          </div>
        </form>
      </section>

      {/* Itinerary Table Section */}
      <section className="bg-white bg-opacity-70 p-6 rounded-md m-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Your Itinerary</h2>

        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Flight</th>
              <th className="p-2">Accommodation</th>
              <th className="p-2">Destination</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item.flight}</td>
                <td className="p-2">{item.accommodation}</td>
                <td className="p-2">{item.destination}</td>
                <td className="p-2">
                  <button className="bg-yellow-400 text-white px-2 py-1 rounded-md mr-2">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md mr-2">Delete</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded-md">Save</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ItineraryPage;
