import "./weather.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Back from "./Back";
import travolta from "../assets/travolta.gif";

interface WeatherData {
  current: {
    temp_c: number;
    last_updated: string;
  };
  location: { name: string; country: string };
}
const Weather = () => {
  const [City, setCity] = useState<string>("");
  const [data, setData] = useState<WeatherData | null>(null);
  const [queryParam, setQueryParam] = useState<string>("tbilisi");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const baseURL = "http://api.weatherapi.com/v1/current.json";
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const days = 5;

  useEffect(() => {
    console.log(queryParam);
    console.log();
    axios
      .get(`${baseURL}?key=${apiKey}&q=${queryParam}&days=${days}`)
      .then((response) => {
        setLoading(true);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(true);
        setError(error.message);
      })
      .finally(() => {});
  }, [apiKey, queryParam]);
  return (
    <>
      <Back />
      <input
        className="city-input"
        type="text"
        placeholder="Search for a city..."
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          setQueryParam(City);
        }}
      >
        Search
      </button>

      {loading ? (
        <div>
          <img className="loading-img" src={travolta} alt="loading..." />
          {error && (
            <div>
              please enter correct name of city or check your connection ...{" "}
            </div>
          )}
        </div>
      ) : (
        data && (
          <div>
            <div className="content"> Country: {data.location.country}</div>
            <div className="content">City: {data.location.name}</div>
            <div className="weather content">
              Temperature: {data.current.temp_c}°C
            </div>
            <div className="content">
              {" "}
              last updated: {data.current.last_updated}{" "}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Weather;
