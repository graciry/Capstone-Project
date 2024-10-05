import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchDestinationDetails = async () => {
      const API_KEY = 'YOUR_AMADEUS_API_KEY'; // Replace with Amadeus API key
      const response = await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations/${id}?apikey=${API_KEY}`);
      setDestination(response.data);
    };

    const fetchWeather = async () => {
      if (destination) {
        const WEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace with OpenWeather API key
        const { latitude, longitude } = destination.location;
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);
        setWeather(weatherResponse.data);
      }
    };

    fetchDestinationDetails();
    fetchWeather();
  }, [id, destination]);

  if (!destination) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold">{destination.name}</h2>
      <p>{destination.country}</p>
      <img src={destination.image_url} alt={destination.name} className="w-full h-64 object-cover rounded-md my-4" />
      {weather && (
        <div>
          <h3 className="text-lg font-bold">Weather</h3>
          <p>{weather.main.temp} °C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
