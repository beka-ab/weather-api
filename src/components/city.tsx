import { useEffect, useState } from "react";
import "./city.css";
import axios from "axios";

const City = () => {
  const [cities, setCities] = useState<string[] | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");

  const cityURL = "https://countriesnow.space/api/v0.1/countries/cities";
  useEffect(() => {
    if (enteredName !== "") {
      axios.post(cityURL, { country: `${enteredName}` }).then((response) => {
        setCities(response.data.data);
      });
    }
  }, [enteredName]);
  useEffect(() => {
    setEnteredName("georgia");
  }, []);

  return (
    <div>
      <input
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setEnteredName(cityName);
        }}
      >
        Search
      </button>
      <h1>Cities of {enteredName}</h1>
      {cities && cities.length > 0 ? (
        cities.map((cityName, index) => (
          <div key={index}>
            <p>{cityName}</p>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default City;
