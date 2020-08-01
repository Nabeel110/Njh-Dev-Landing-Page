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
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
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
                  <a href="#services">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
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
                  <a href="#services">Dolor Sitema</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
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
                  <a href="#services">Sed ut perspiciatis</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
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
                  <a href="#services">Magni Dolores</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
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
                  <a href="#services">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
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
                  <a href="#services">Eiusmod Tempor</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
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
