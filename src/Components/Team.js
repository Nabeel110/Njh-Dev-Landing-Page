import React from "react";

import ScrollAnimation from "react-animate-on-scroll";
import Typist from "react-typist";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <ScrollAnimation animateIn="slideInUp">
          <div className="section-header">
            <h3 style={{ color: "black" }}>Team</h3>
            <Typist
              startDelay={2500}
              cursor={{ show: false }}
              avgTypingDelay={25}
            >
              <h4
                style={{
                  textAlign: "center",
                  paddingBottom: "25px",
                  color: "#dee8f2",
                }}
              >
                Meet the Team behind this Venture
              </h4>
            </Typist>
          </div>
        </ScrollAnimation>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="member">
              <img
                src={require("../images/Nab-02.png")}
                className="img-fluid"
                alt="Nabeel Ahmed"
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Nabeel Ahmed</h4>
                  <span>Co-Founder and CEO at NJH-Dev</span>
                  <div className="social">
                    <a href="https://www.facebook.com/nabeel.ahmed.568089">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/problem-solver-nabeel-ahmed/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="member">
              <img
                src={require("../images/jawad.png")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Muhammad Jawad</h4>
                  <span>Co-Founder and CEO at NJH-Dev</span>
                  <div className="social">
                    <a href="https://www.facebook.com/muhammad.jawwad.092">
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a href="#team">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="member">
              <img
                src={require("../images/humza.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Humza Ahmed</h4>
                  <span>Co-Founder and CEO at NJH-Dev</span>
                  <div className="social">
                    <a href="https://www.facebook.com/humza.ahmed.5099">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/humza-ahmed-10/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
