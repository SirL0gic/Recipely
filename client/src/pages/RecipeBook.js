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
import "../styles/aboutus.css";

let Book = () => {
    return(
        <Container className="main-container-book">
            <Row className="row-one">
                <Col className="col-one">
                    
                </Col>
            </Row>
            <Row></Row>
        </Container>
    )
    
};

export default Book;