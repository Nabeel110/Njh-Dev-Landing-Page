import React from "react";
import { Container } from "react-bootstrap";

import Typist from "react-typist";
import ScrollAnimation from "react-animate-on-scroll";
const Services = () => {
  return (
    <section id="services" className="section-bg">
      <Container>
        <header className="section-header">
          <ScrollAnimation animateIn="zoomInUp">
            <h3 style={{ color: "#16df59" }}>Services</h3>

            <Typist
              startDelay={3000}
              cursor={{ show: false }}
              avgTypingDelay={25}
            >
              <p style={{ color: "gray" }}>
                We provide high quality custom software development services.
              </p>
            </Typist>
          </ScrollAnimation>
        </header>

        <ScrollAnimation animateIn="fadeInLeft">
          <div className="row">
            <div
              className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon"></div>
                <h4 className="title">
                  <a href="#services">Web Development</a>
                </h4>
                <p className="description">
                  Front end, Backend and Full Stack solutions. Our frameworks
                  include React.js, Angular.js, Node.js / Express.js and Spring.
                  We provide full deployment support on a wide range services
                  including Heroku, AWS and Surge.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5 wow bounceInUp"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon">
                  <i
                    className="ion-ios-bookmarks-outline"
                    style={{ color: "#e9bf06" }}
                  ></i>
                </div>
                <h4 className="title">
                  <a href="#services">Data Analysis</a>
                </h4>
                <p className="description">
                  Data extraction, cleaning and analytics services. We provide
                  holistic insights and detailed analysis reports.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon">
                  <i
                    className="ion-ios-paper-outline"
                    style={{ color: "#3fcdc7" }}
                  ></i>
                </div>
                <h4 className="title">
                  <a href="#services">Graphic Designing & Animation</a>
                </h4>
                <p className="description">
                  Brilliant vibrant designs for logos, websites, social media
                  posts and more. Infographics and whiteboard animations for
                  exquisite presentation.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5 wow bounceInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon">
                  <i
                    className="ion-ios-speedometer-outline"
                    style={{ color: "#41cf2e" }}
                  ></i>
                </div>
                <h4 className="title">
                  <a href="#services">Wordpress</a>
                </h4>
                <p className="description">
                  E-commerce, Blog, LMS, inventory management system solutions
                  with cutting edge Wordpress features and plugins. SEO
                  optimized website providing modern view to your website.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon">
                  <i
                    className="ion-ios-world-outline"
                    style={{ color: "#d6ff22" }}
                  ></i>
                </div>
                <h4 className="title">
                  <a href="#services">Artificial Intelligence</a>
                </h4>
                <p className="description">
                  Offering smart solutions including trend predictors, chatbots,
                  automated testers, diagnostic applications, recommender
                  systems and plagiarism detectors.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5 wow bounceInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1.4s"
            >
              <div className="box">
                <div className="icon">
                  <i
                    className="ion-ios-clock-outline"
                    style={{ color: "#4680ff" }}
                  ></i>
                </div>
                <h4 className="title">
                  <a href="#services">App Development</a>
                </h4>
                <p className="description">
                  Full scale Flutter and Android apps with emphasis on material
                  design.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
};

export default Services;
