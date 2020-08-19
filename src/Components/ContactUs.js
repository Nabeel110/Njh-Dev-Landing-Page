import React from "react";

import Typist from "react-typist";
import ScrollAnimation from "react-animate-on-scroll";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <div className="container contact-form">
        <ScrollAnimation animateIn="slideInUp">
          <div className="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
              style={{ color: "green" }}
            />
          </div>
        </ScrollAnimation>
        <form method="post">
          <Typist
            startDelay={3000}
            cursor={{ show: false }}
            avgTypingDelay={25}
          >
            <h3>Drop Us a Message</h3>
          </Typist>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
