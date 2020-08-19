import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>NJH Developers</h3>
              <p style={{ fontSize: "1.3rem" }}>
                We are looking forward to work with you!
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#intro">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Karachi
                <br />
                Pakistan <br />
                <strong>Email:</strong> njh.developers@gmail.com
                <br />
              </p>

              <div className="social-links">
                <a href="https://www.facebook.com/njhdev" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/67201678/admin/"
                  className="linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna veniam enim veniam illum dolore legam minim quorum culpa
                amet magna export quem marada parida nodela caramase seza.
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong>NJH Developers</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/problem-solver-nabeel-ahmed/"
            style={{ fontWeight: "bold" }}
          >
            Nabeel Ahmed
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
