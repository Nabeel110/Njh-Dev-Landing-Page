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

            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
              partiendo abhorreant vituperatoribus.
            </p>
          </ScrollAnimation>
        </header>

        <div className="row row-eq-height justify-content-center">
          <div className="col-lg-4 mb-4">
            <ScrollAnimation animateIn="bounceInUp">
              <div className="card wow bounceInUp">
                <i className="fa fa-diamond"></i>
                <div className="card-body">
                  <h5 className="card-title">Corporis dolorem</h5>
                  <p className="card-text">
                    Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                    temporibus sunt ab inventore officiis aut voluptatibus.
                  </p>
                  <a href="#home" className="readmore">
                    Read more{" "}
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-4 mb-4">
            <ScrollAnimation animateIn="bounceInUp">
              <div className="card wow bounceInUp">
                <i className="fa fa-language"></i>
                <div className="card-body">
                  <h5 className="card-title">Voluptates dolores</h5>
                  <p className="card-text">
                    Voluptates nihil et quis omnis et eaque omnis sint aut.
                    Ducimus dolorum aspernatur.
                  </p>
                  <a href="#home" className="readmore">
                    Read more{" "}
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-lg-4 mb-4">
            <ScrollAnimation animateIn="bounceInUp">
              <div className="card wow bounceInUp">
                <i className="fa fa-object-group"></i>
                <div className="card-body">
                  <h5 className="card-title">Eum ut aspernatur</h5>
                  <p className="card-text">
                    Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis
                    porro in non nemo ex.{" "}
                  </p>
                  <a href="#home" className="readmore">
                    Read more{" "}
                  </a>
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
