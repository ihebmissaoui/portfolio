import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward class="about__icon" />
              <h5>Experience</h5>
              <small>7 month internship</small>
            </article>
            <article className="about__card">
              <FiUsers class="about__icon" />
              <h5>Diploma</h5>
              <ul>
             <li> <small>Engineering in Data Science</small></li>
             <li> <small>Bachelor in Computer Science</small></li>
              </ul>
            </article>
            <article className="about__card">
              <VscFolderLibrary class="about__icon" />
              <h5>Projects</h5>
              <br></br>
              <small>5 projects</small>
            </article>
          </div>
          <p>
          Computer technician and fourth-year student in the data science engineering program, aged 23, seeking to develop my skills and practical experience by learning new techniques and taking on challenges.

          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
