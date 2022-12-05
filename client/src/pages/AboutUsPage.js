//Base React libs
import React from "react";

//Bootstrap-npm-lib
import Button from "react-bootstrap/Button";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS stylesheet
import "../styles/aboutus.css";

let About = () => {
  document.body.style.background = "#28C76F";
  return (
    <div className="aboutus-box">
      <h1 className="main-heading"> &#10067; About Us &#10067;</h1>
      <div className="information-box">
        <p className="information-para">
          Home cooks are our heroes—it's as simple as that. Recipely is a
          community built by and for kitchen experts: The cooks who will
          dedicate the weekend to a perfect beef bourguignon but love the
          simplicity of a slow-cooker rendition, too. The bakers who labor over
          a showstopping 9-layer cake but will just as happily doctor boxed
          brownies for a decadent weeknight dessert. The entertainers who just
          want a solid snack spread, without tons of dirty dishes at the end of
          the night.
        </p>

        <p className="information-para">
          Most importantly, Recipely connects home cooks with their greatest
          sources of inspiration — other home cooks. We're the world's leading
          digital food brand, and that inspires us to do everything possible to
          keep our community connected. Sixty-million home cooks deserve no
          less.
        </p>
      </div>
      <Button className="back-button" variant="dark" href="/">Go Back</Button>
    </div>
  );
};

export default About;
