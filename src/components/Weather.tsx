import "./weather.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./city";

interface WeatherData {
  current: {
    temp_c: number;
  };
}
const Weather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const baseURL = "http://api.weatherapi.com/v1/current.json";
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const queryParam = "Alma";
  const days = 5;
  useEffect(() => {
    axios
      .get(`${baseURL}?key=${apiKey}&q=${queryParam}&days=${days}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, [apiKey, queryParam]);
  return (
    <>
      {data && <div className="weather">{data.current.temp_c}°C</div>}
      <City />
    </>
  );
};

export default Weather;
