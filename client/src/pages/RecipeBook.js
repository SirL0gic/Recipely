//Base React libs
import React from "react";

//Bootstrap-npm-lib
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Row></Row>
        </Container>
    )
    
};

export default Book;