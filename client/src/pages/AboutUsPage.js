//Base React libs
import React from "react";

//Bootstrap-npm-lib
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS stylesheet
import "../styles/aboutus.css";

let About = () => {
  document.body.style.background = "#28C76F";
    return (
      <Container fluid className="aboutus-main-container">
        <Row className="row-one">
          <Col className="col-one">
          <h1>This is col 1</h1>
          <div classname="box-left">

          </div>
          </Col>
          <Col className="col-two">
          <h1>This is col 2</h1>
          </Col>
        </Row>
        <Row className="row-two"></Row>
        <Row className="row-three"></Row>

      </Container>
    
    );
  };
  
  export default About;