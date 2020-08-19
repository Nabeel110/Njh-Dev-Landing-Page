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
              <a href="https://www.fiverr.com/njh_developers?source=gig_cards&referrer_gig_slug=do-your-python-machine-learning-automation-projects&ref_ctx_id=d4fac57a-a024-48a6-ae99-83f906d53b80">
                <img
                  src={require("../images/fiverr.png")}
                  className="img-fluid"
                  alt="fiverr"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-6">
            <div className="client-logo">
              <a href="https://www.guru.com/service/java-developer/pakistan/sindh/karachi/4691375">
                <img
                  src={require("../images/guru.png")}
                  className="img-fluid"
                  alt="guru"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-xs-6">
            <div className="client-logo">
              <a href="https://www.freelancer.com/u/njhdevelopers">
                <img
                  src={require("../images/freelancer.png")}
                  className="img-fluid"
                  alt="freelancer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPresence;
