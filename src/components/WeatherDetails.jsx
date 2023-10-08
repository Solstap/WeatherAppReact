import WindImage from '../assets/wind.png';
import HumidityImage from '../assets/humidity.png';

const WeatherDetails = ({ data }) => {
    return (
      <div className="details">
        <div className="col">
          <img src={HumidityImage} alt="humidity" />
          <div>
            <p className="humidity">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src={WindImage} alt="wind" />
          <div>
            <p className="wind">{data.wind.speed} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherDetails;