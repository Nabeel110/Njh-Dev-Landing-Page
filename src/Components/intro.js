import React from "react";
import { Container } from "react-bootstrap";
import introImage from "../images/intro-img.svg";
import "../App.css";
const Introduction = () => {
  return (
    <>
      {/* ============================--> */}
      <section id="intro" className="clearfix">
        <Container>
          <div className="intro-img">
            <img src={introImage} alt="" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              NJH Developers
              <hr
                style={{
                  backgroundColor: "gray",
                  borderTop: "2px solid #fff",
                }}
              />
              <span>We specialize</span>
              <br />
              <span>in</span>
              <br />
              AI - Web - Data Analysis
              <br />
              Solutions
            </h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="#services" className="btn-services scrollto">
                Our Services
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Introduction;
