import React from "react";
import { Container } from "react-bootstrap";
import introImage from "../images/intro-img.svg";

// Animations
import useWebAnimations, { backInLeft } from "@wellyshen/use-web-animations";
import Typist from "react-typist";

import "../App.css";
const Introduction = () => {
  const { ref } = useWebAnimations({ ...backInLeft });
  return (
    <>
      <section id="intro" className="clearfix">
        <Container>
          <div className="intro-img" ref={ref}>
            <img src={introImage} alt="" className="img-fluid" />
          </div>

          <div className="intro-info">
            <Typist startDelay={1000} cursor={{ show: false }}>
              <h2>
                NJH Developers
                <hr
                  style={{
                    backgroundColor: "gray",
                    borderTop: "2px solid #fff",
                  }}
                />
                <span>We specialize in</span>
                <br />
                AI - Web - Data Analysis
                <br />
                Solutions
              </h2>
            </Typist>

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
