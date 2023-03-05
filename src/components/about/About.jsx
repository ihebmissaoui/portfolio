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
              <small>7 Months Internsheep</small>
            </article>
            <article className="about__card">
              <FiUsers class="about__icon" />
              <h5>Diploma</h5>
              <small>Engeering in Data Science</small>
             
            </article>
            <article className="about__card">
              <VscFolderLibrary class="about__icon" />
              <h5>Projects</h5>
              <small>X completed projects</small>
            </article>
          </div>
          <p>
          I am  Iheb Missaoui 22 years old, I live in Tunis, I had my computer bacleaureat in Tunis, my degree in computer science at the Faculty of Fcience of Tunis and now I am in the 4th year of data science engineering in the same of science Faculty

          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
