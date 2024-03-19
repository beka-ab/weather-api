import { faCloudSun, faMountainCity } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./inner.css";
const Inner = () => {
  return (
    <>
      <h1 className="title"> Choose Your Fighter</h1>
      <div className="container">
        <div className="weather-box">
          <div>
            <FontAwesomeIcon icon={faCloudSun} size="5x" color="#feb300" />
          </div>
          <Link to="/weather">
            <button className="navigate-btn">search for weather</button>
          </Link>
        </div>
        <div className="citie-box">
          <div>
            <FontAwesomeIcon icon={faMountainCity} size="5x" color="#9bc400" />
          </div>
          <Link to="/city">
            <button className="navigate-btn"> search for cities</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Inner;
