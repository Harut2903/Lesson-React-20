import React from "react";
import "./About.css";
import perv from "../../assets/images/per4.svg";
import java from "../../assets/images/java.svg";
import frontEend from "../../assets/images/front-end.svg";
import javaScript from "../../assets/images/javaScript.svg";
import pythonMl from "../../assets/images/python-ml.svg";
const About = ({ aboutRef }) => {
  return (
    <section  className="courses bg-silver">
      <div className="section-title left">
        <h2 ref={aboutRef}>
          Ծրագրավորման <span>դասընթացներ</span>
        </h2>
        <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
      </div>
      <div className="container">
        <div className="section-box">
          <div className="section-info">
            <div className="courses-box active">
              <div className="course-item">
                <a href="/course/front-end-course">
                  <img src={frontEend} alt="WEB Front-End" />
                </a>
                <h2 className="h2">WEB Front-End</h2>
                <h3>Դասընթաց</h3>
                <a href="/course/front-end-course" className="btn-act">
                  Դիտել
                </a>
                <p>
                  <span>9 ամիս</span>
                  <span>58,000 ֏</span>
                </p>
              </div>

              <div className="course-item">
                <a href="/course/python-machine-learning-ml-ai-course">
                  <img src={pythonMl} alt="Python (ML / AI)" />
                </a>
                <h2 className="h2">Python (ML / AI)</h2>
                <h3>Դասընթաց</h3>
                <a
                  href="/course/python-machine-learning-ml-ai-course"
                  className="btn-act"
                >
                  Դիտել
                </a>
                <p>
                  <span>7 ամիս</span>
                  <span>68,000 ֏</span>
                </p>
              </div>

              <div className="course-item">
                <a href="/course/java-course">
                  <img src={java} alt="Java" />
                </a>
                <h2 className="h2">Java</h2>
                <h3>Դասընթաց</h3>
                <a href="/course/java-course" className="btn-act">
                  Դիտել
                </a>
                <p>
                  <span>6 ամիս</span>
                  <span>68,000 ֏</span>
                </p>
              </div>

              <div className="course-item">
                <a href="/course/javascript-course">
                  <img src={javaScript} alt="JavaScript" />
                </a>
                <h2 className="h2">JavaScript</h2>
                <h3>Դասընթաց</h3>
                <a href="/course/javascript-course" className="btn-act">
                  Դիտել
                </a>
                <p>
                  <span>3.5 ամիս</span>
                  <span>58,000 ֏</span>
                </p>
              </div>
            </div>
          </div>
          <img src={perv} className="section-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
