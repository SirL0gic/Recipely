//Base React libs
import React from "react";
import { Link } from "react-router-dom";

//Bootstrap-npm-lib
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS stylesheet
import "../styles/home.css";

let Home = () => {
  document.body.style.background = "#28C76F";
  return (
    <div className="menu-box">
      <h1 className="main-heading"> &#127836; Recipely  &#127836;</h1>
      <div className="entire-nav">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/create">Create Recipe</Link>
          </li>
          <li>
            <Link to="/search">Search Recipe</Link>
          </li>
          <li>
            <Link to="/suggest">Suggest Recipe</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
