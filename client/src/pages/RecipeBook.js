//Base React libs
import React, { useState } from 'react'

//Bootstrap-npm-lib
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";


//material UI 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/lab/Autocomplete';

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import RecipeReviewCard from '../components/Card';

//Custom CSS stylesheet
import "../styles/main.css";

let Book = () => {
    document.body.style.background = "#28C76F";
    return(
        <Container className="main-container-book">
            <Row className="row-one" id="title-row">
                <Col className="col-one">
                    <div className="main-title" id="main-title-box">
                        <div className="text-center">
                            <h1>Recipe Book</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="row-two" id="searchbar-row">
                <Col className="col-two">

                </Col>
            </Row>
        </Container>
    )
    
};

export default Book;