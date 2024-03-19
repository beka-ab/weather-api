import { useEffect, useState } from "react";
import "./city.css";
import axios from "axios";
import Back from "./Back";
import travolta from "../assets/travolta.gif";

const City = () => {
  const [cities, setCities] = useState<string[] | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cityURL = "https://countriesnow.space/api/v0.1/countries/cities";
  useEffect(() => {
    if (enteredName !== "") {
      setLoading(true);
      axios
        .post(cityURL, { country: `${enteredName}` })
        .then((response) => {
          setCities(response.data.data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [enteredName]);
  useEffect(() => {
    setEnteredName("georgia");
  }, []);

  return (
    <div className="city-container">
      <Back />
      <div>
        <input
          className="city-input"
          value={cityName}
          placeholder="Search Country here ..."
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setEnteredName(cityName);
          }}
        >
          Search
        </button>
      </div>
      <h1>Cities of {enteredName}</h1>
      {loading ? (
        <>
          <img className="loading-img" src={travolta} alt="Loading..." />
          {error && <span>entered country is doesn't exists ... </span>}
        </>
      ) : (
        cities && (
          <div className="city-list">
            {cities.map((cityName, index) => (
              <div key={index}>
                <p className="city-name" key={index}>
                  {cityName}
                </p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default City;
