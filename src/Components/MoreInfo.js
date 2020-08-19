import React, { useState } from "react";

// import Typist from "react-typist";
import ScrollAnimation from "react-animate-on-scroll";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const MoreInfo = () => {
  const [scrollStatus, setScrollStatus] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setScrollStatus(true);
    }
  };

  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container">
        <header className="section-header">
          <ScrollAnimation animateIn="fadeInUp">
            <h3>Why choose us?</h3>
          </ScrollAnimation>
        </header>

        <div className="row row-eq-height justify-content-center">
          <div className="col-lg-4 mb-4">
            <ScrollAnimation animateIn="bounceInUp">
              <div className="card wow bounceInUp">
                <i className="fa fa-diamond"></i>
                <div className="card-body">
                  <h5 className="card-title">Quality</h5>
                  <p className="card-text">
                    We set high standards for our work and only deliver our
                    best.{" "}
                  </p>
                  {/* <a href="#home" className="readmore">
                    Read more{" "}
                  </a> */}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-4 mb-4">
            <ScrollAnimation animateIn="bounceInUp">
              <div className="card wow bounceInUp">
                <i className="fa fa-star"></i>
                <div className="card-body">
                  <h5 className="card-title">Reliability </h5>
                  <p className="card-text">
                    When we accept a project we provide a solid guarantee that
                    we will complete it within the given time. No excuses.{" "}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-4 mb-4">
            <ScrollAnimation animateIn="bounceInUp">
              <div className="card wow bounceInUp">
                <i className="fa fa-balance-scale"></i>
                <div className="card-body">
                  <h5 className="card-title">Integrity </h5>
                  <p className="card-text">
                    We always inform the client about any issues and
                    reservations we have with regards to the project before
                    accepting it. We are fully transparent in our work.{" "}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp start={0} end={scrollStatus ? 5 : 0} duration={3} />
            </VisibilitySensor>{" "}
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp start={0} end={scrollStatus ? 10 : 0} duration={3} />
            </VisibilitySensor>
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp start={0} end={scrollStatus ? 256 : 0} duration={3} />
            </VisibilitySensor>{" "}
            <p>Hours Of Support</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp start={0} end={scrollStatus ? 3 : 0} duration={3} />
            </VisibilitySensor>{" "}
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
