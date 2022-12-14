//Base React libs
import React, { useState } from "react";

//Bootstrap-npm-lib
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import RecipeReviewCard from "../components/Card";
import SearchBar from "../components/Search";

//Custom CSS stylesheet
import "../styles/main.css";

let Book = () => {
  document.body.style.background = "#28C76F";
  return (
    <Container className="main-container-book">
      <Row className="row-one" id="title-row">
        <Col className="col-one">
          <div className="main-title" id="main-title-box">
            <div className="text-center">
              <h1> 	&#128214; Recipe Book 	&#128214;</h1>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="row-two" id="searchbar-row">
        <Col className="col-two">
        <div className="text-center">
        <SearchBar />
        </div>
        </Col>
      </Row>
      <Row className="row-three" id="recipe-cardslist">
        <Col className="cols">
          <RecipeReviewCard />
        </Col>
        <Col className="cols">
          <RecipeReviewCard />
        </Col>
        <Col className="cols">
          <RecipeReviewCard />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row className="row-four" id="recipe-cardslist-two">
        <Col className="cols">
          <RecipeReviewCard />
        </Col>
        <Col className="cols">
          <RecipeReviewCard />
        </Col>
        <Col className="cols">
          <RecipeReviewCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Book;
