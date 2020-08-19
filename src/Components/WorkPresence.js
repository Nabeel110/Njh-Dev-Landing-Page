import React from "react";

function WorkPresence() {
  return (
    <section id="clients" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3 style={{ color: "black" }}>Freelance Platforms</h3>
          <p style={{ color: "gray", fontSize: "1.2rem" }}>
            We have a significant presence on major freelancing platforms. You
            can find us on Fiverr, Guru and Freelancer.
          </p>
        </div>

        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
          <div className="col-lg-4 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../images/fiverr.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../images/guru.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../images/freelancer.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPresence;
