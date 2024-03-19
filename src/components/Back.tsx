import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./back.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Back = () => {
  return (
    <>
      <Link to="/">
        <div className="back-div">
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
        </div>
      </Link>
    </>
  );
};

export default Back;
