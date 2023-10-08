import React from 'react';
import WeatherDetails from './WeatherDetails';
import CloudsImage from '../assets/clouds.png';
import ClearImage from '../assets/clear.png';
import RainImage from '../assets/rain.png';
import DrizzleImage from '../assets/drizzle.png';
import MistImage from '../assets/mist.png';
import SnowImage from '../assets/snow.png';

const Weather = ({ data }) => {
  const weatherIconSrc = () => {
    switch (data.weather[0].main) {
      case "Clouds":
        return CloudsImage;
      case "Clear":
        return ClearImage;
      case "Rain":
        return RainImage;
      case "Drizzle":
        return DrizzleImage;
      case "Mist":
        return MistImage;
      case "Snow":
        return SnowImage;
      default:
        return "";
    }
  };

  return (
    <div className="weather">
      <img src={weatherIconSrc()} className="weather-icon" alt="weather" />
      <h1 className="temp">{Math.round(data.main.temp)}°C</h1>
      <h2 className="city">{data.name}</h2>
      <WeatherDetails data={data} />
    </div>
  );
};

export default Weather;