import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function AboutUs() {
  return (
    <Fragment>
      <Menu />

      <main className="main">
        <section id="about_us">
          <h2>About Us</h2>
          <h3>Project Advisor</h3>

          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/pfp_images/generic.jpg"}
              className="profile-img"
            />
            <div className="profile-info">
              <h2 className="name">Dr. Mohan</h2>
              <p className="title">Computer Scientist</p>
              <p className="bio"></p>
              <div className="social-links">
                <a target="_blank" href="">
                  LinkedIn
                </a>{" "}
                |{" "}
                <a target="_blank" href="">
                  GitHub
                </a>{" "}
                |{" "}
                <a target="_blank" href="">
                  Email
                </a>
              </div>
            </div>
          </div>

          <hr className="rounded" />
          <h3>The Team</h3>

          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "assets/pfp_images/collins.jpg"}
              className="profile-img"
            />
            <div className="profile-info">
              <h2 className="name">Charlie Collins</h2>
              <p className="title">Computer Scientist</p>
              <p className="bio">
                Computer science major looking forward to a career in software
                engineering
              </p>
              <div className="social-links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/charlie-collins-8167b3250"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a target="_blank" href="https://github.com/CharCharC">
                  GitHub
                </a>{" "}
                |{" "}
                <a target="_blank" href="mailto:charliethomascollins@gmail.com">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/pfp_images/generic.jpg"}
              className="profile-img"
            />
            <div className="profile-info">
              <h2 className="name">Thomas Gingerelli</h2>
              <p className="title">Software Engineer</p>
              <p className="bio"></p>
              <div className="social-links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/thomas-gingerelli-95092b247/"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a target="_blank" href="https://github.com/tommylt3">
                  GitHub
                </a>{" "}
                |{" "}
                <a target="_blank" href="mailto:tgingerelli3@gmail.com">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "assets/pfp_images/klaproth.jpg"}
              className="profile-img"
            />
            <div className="profile-info">
              <h2 className="name">Logan Klaproth</h2>
              <p className="title">Cyber Security</p>
              <p className="bio">
                Computer Science student with a passion for cybersecurity and
                developing web applications
              </p>
              <div className="social-links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/logan-klaproth-a7877624a/"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a target="_blank" href="https://github.com/lKlap909">
                  GitHub
                </a>{" "}
                |{" "}
                <a target="_blank" href="mailto:lklaproth2021@my.fit.edu">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "/assets/pfp_images/generic.jpg"}
              className="profile-img"
            />
            <div className="profile-info">
              <h2 className="name">Michael Komar</h2>
              <p className="title">Computer Scientist</p>
              <p className="bio">
                Aspiring computer network engineer and programmer.
              </p>
              <div className="social-links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/michael-komar-b805ab225/"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a target="_blank" href="https://github.com/Mkomar2021">
                  GitHub
                </a>{" "}
                |{" "}
                <a target="_blank" href="mailto:mkomar2021@my.fit.edu">
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default AboutUs;
