import React from "react";
import { Container } from "react-bootstrap";
import aboutUs from "../images/about-img.svg";
import aboutImage2 from "../images/about-extra-1.svg";
import aboutImage3 from "../images/about-extra-2.svg";

const About = () => {
  return (
    <section id="about">
      <Container>
        <header className="section-header">
          <h3 style={{ color: "gray" }}>About Us</h3>
          <p style={{ color: "black" }}>
            We are a team of three developers. (Nabeel Ahmed - Front End Dev)
            (Muhammad Jawad - Backend Dev) (Humza Ahmed - Backend Dev). We are
            currently enrolled in an undergraduate Computer Science program.{" "}
          </p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
              All three of us work together on every project and each of us
              specializes in different frameworks and technologies. Our priority
              is to deliver projects on time with the highest level of quality.
            </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon">
                <i
                  className="fa fa-shopping-bag"
                  style={{ color: "green" }}
                ></i>
              </div>
              <h4 className="title">
                <a href="#about">Ecommerce Store</a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon">
                <i className="fa fa-photo" style={{ color: "green" }}></i>
              </div>
              <h4 className="title">
                <a href="#about">Graphic Designing</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon">
                <i className="fa fa-bar-chart" style={{ color: "green" }}></i>
              </div>
              <h4 className="title">
                <a href="#about">Data Analysis</a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={aboutUs} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
            <img src={aboutImage2} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h4>
            <p>
              Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
              possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
              Deleniti quod porro sed quisquam saepe. Numquam mollitia
              recusandae non ad at et a.
            </p>
            <p>
              Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
              Odit qui asperiores ea corporis deserunt veritatis quidem expedita
              perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum
              eum eum.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={aboutImage3} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
            <h4>
              Neque saepe temporibus repellat ea ipsum et. Id vel et quia
              tempora facere reprehenderit.
            </h4>
            <p>
              Delectus alias ut incidunt delectus nam placeat in consequatur.
              Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio.
              Cumque fugit earum est quam officiis numquam. Ducimus corporis
              autem at blanditiis beatae incidunt sunt.
            </p>
            <p>
              Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas
              mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae
              debitis. Dolorem cupiditate est perferendis iusto.
            </p>
            <p>
              Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint
              quia modi. Numquam est aut fuga mollitia exercitationem nam
              accusantium provident quia.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
