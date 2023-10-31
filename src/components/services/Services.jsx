import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>My INTERNSHEEP </h5>
      <h2>WORK EXPERIENCES</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>END Of Study Project</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Development of a middleware web application allowing the conversion of a course in html formats to scorm standards

              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              SPRINGBOOT,JQUERY,MYSQL,SCORM
              </p>
            </li>
         
          
        
          </ul>
        </article>
        {/* web Developmentt */}
        <article className="service">
          <div className="service__head">
            <h3>Summer  INTERNSHEEP</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Development of a mobile application for recycling raw materials in Tunisia. 

              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              FLUTTER ,MYSQL,NODE-JS
              </p>
            </li>
           
        
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
