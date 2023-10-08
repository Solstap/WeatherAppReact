import { useState } from 'react';
import Search from './Search';
import Error from './Error';
import Weather from './Weather';

const apiKey = "bcb01e81a6e6269e5dbbf9d277de237b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const Card = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    if(loading) return;

    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);

      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (error) {
      console.error("No weather data found", error);
    }
  };

  return (
    <div className="card">
      <Search onSearch={fetchWeather} />
      {error && <Error />}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default Card;