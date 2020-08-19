import React from "react";
import { Container } from "react-bootstrap";
import aboutUs from "../images/about-img.svg";
// import aboutImage2 from "../images/about-extra-1.svg";
// import aboutImage3 from "../images/about-extra-2.svg";

// Animations
import Typist from "react-typist";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section id="about">
      <Container>
        <header className="section-header">
          <ScrollAnimation animateIn="bounceIn">
            <h3 style={{ color: "#ffe600" }}>About Us</h3>

            <Typist
              startDelay={3000}
              cursor={{ show: false }}
              avgTypingDelay={25}
            >
              <p style={{ color: "black", fontSize: "20px" }}>
                We are a team of three developers. (Nabeel Ahmed - Front End
                Dev) (Muhammad Jawad - Backend Dev) (Humza Ahmed - Backend Dev).
                We are currently enrolled in an undergraduate Computer Science
                program.{" "}
              </p>
            </Typist>
          </ScrollAnimation>
        </header>

        <ScrollAnimation animateIn="fadeInUp">
          <div className="row about-container">
            <div className="col-lg-6 content order-lg-1 order-2">
              <p>
                All three of us work together on every project and each of us
                specializes in different frameworks and technologies. Our
                priority is to deliver projects on time with the highest level
                of quality.
              </p>

              <div className="icon-box wow fadeInUp">
                <div className="icon">
                  <i className="fa fa-microchip" style={{ color: "green" }}></i>
                </div>
                <h4 className="title">
                  <a href="#about">Artificial Intelligence</a>
                </h4>
                <p className="description">
                  We provide cutting edge machine learning, deep learning and
                  automation solutions. using libraries like TensorFlow,
                  Pytorch, NLTK
                </p>
              </div>

              <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon">
                  <i className="fa fa-database" style={{ color: "green" }}></i>
                </div>
                <h4 className="title">
                  <a href="#about">Data Analysis</a>
                </h4>
                <p className="description">
                  We have expertise in extracting, cleaning and analyzing large
                  volumes of data. We present key insights that help in
                  decision-making. Our core objective is to make your own data
                  useful to you and your endeavors.{" "}
                </p>
              </div>

              <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon">
                  <i className="fa fa-code" style={{ color: "green" }}></i>
                </div>
                <h4 className="title">
                  <a href="#about">Web Development</a>
                </h4>
                <p className="description">
                  We provide full stack web development solutions using the
                  latest frameworks and technologies like React.js,
                  Node.js/Express.js, PostgreSQL, MongoDB etc.{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
              <img src={aboutUs} className="img-fluid" alt="" />
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
};

export default About;
