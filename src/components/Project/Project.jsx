import React, { useState } from "react";
import "./project.css";

const Project = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="project">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">My Recent Projects</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
          <img src="/src/assets/AmazonClone.png" alt="Amazon Clone" />
            <h3 className="services__title">
              Weather App<br></br>
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Weather App</h3>

              <p className="services__modal-description">
                This app provides real-time weather information, like
                temperature🌡️, humidity 💧, and wind speed 💨, for any city
                worldwide.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technology Used - HTML , CSS , JS , API.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Key Learning - working with APIs to fetch data .
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Github Link -{" "}
                    <a
                      href="https://github.com/biswajit760/WeatherApp"
                      target="_blank"
                    >
                      Link
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src="" alt="" />
            <h3 className="services__title"> Amazon UI Clone</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">Amazon UI Clone</h3>

              <p className="services__modal-description">
                After learning concept of html and css 1st time used those
                concept in a project.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technology Used - HTML , CSS .
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Key Learning - Importance of flexbox and many other CSS
                    property .
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <img src="https://media.istockphoto.com/id/1374485813/vector/3d-white-clipboard-task-management-todo-check-list-with-pencil-efficient-work-on-project.jpg?s=612x612&w=0&k=20&c=oHKBMqTKxzZEkm6k-8I7MGfhpft5DVSeT8qzXZNFoPM=" alt="" />
            <h3 className="services__title"> To Do App </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">To Do App </h3>

              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis, quo!
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <img src="src/assets/News Img.jpg" alt="" />
            <h3 className="services__title">
              News App<br></br>
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">News App</h3>

              <p className="services__modal-description">
                React-based news application that brings the latest headlines
                right to your screen
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Technology Used - Tailwind CSS , React .
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Key Learning - working with APIs to fetch data .
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Github Link -{" "}
                    <a
                      href="https://github.com/biswajit760/news-mag"
                      target="_blank"
                    >
                      Link
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
