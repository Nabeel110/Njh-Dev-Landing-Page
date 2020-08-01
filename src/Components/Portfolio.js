import React from "react";
import { Container } from "react-bootstrap";
import proj1 from "../images/proj-1.png";
import proj2 from "../images/proj-2.png";

import ScrollAnimation from "react-animate-on-scroll";

const Portfolio = () => {
  return (
    <section id="portfolio" className="clearfix">
      <Container>
        <ScrollAnimation animateIn="zoomInUp">
          <header className="section-header">
            <h1 className="section-title" style={{ color: "#16DF59" }}>
              Our Portfolio
            </h1>
          </header>
        </ScrollAnimation>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeInLeftBig">
          <div className="row portfolio-container">
            <div className="col-lg-6 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={proj1} className="img-fluid" alt="iba-chat-bot" />
                <div className="portfolio-info">
                  <h4>
                    <a href="#portfolio">IBOT</a>
                  </h4>
                  <p>WebApp</p>
                  <div>
                    <a
                      href="https://iba-chat-bot.herokuapp.com/"
                      data-lightbox="portfolio"
                      data-title="IBOT"
                      className="link-preview"
                      title="Preview"
                    >
                      <i className=" fa fa-eye"></i>
                    </a>
                    <a
                      href="#portfolio"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="fa fa-external-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 portfolio-item filter-web"
              data-wow-delay="0.1s"
            >
              <div className="portfolio-wrap">
                <img src={proj2} className="img-fluid" alt="15-puzzle-game" />
                <div className="portfolio-info">
                  <h4>
                    <a href="#portfolio">15-Puzzle-Game</a>
                  </h4>
                  <p>WebApp</p>
                  <div>
                    <a
                      href="https://puzzle-game15.herokuapp.com/"
                      className="link-preview"
                      data-lightbox="portfolio"
                      data-title="Web 3"
                      title="Preview"
                    >
                      <i className="fa fa-eye"></i>
                    </a>
                    <a
                      href="#portfolio"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="fa fa-external-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
};

export default Portfolio;
