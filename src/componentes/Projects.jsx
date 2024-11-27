// eslint-disable-next-line no-unused-vars
import React from "react";

const PROJECTS = [
  {
    title: "dev programing",
    description:
      "devprograming es un proyecto basado en un cuaderno que llené con recursos (webs) para aprender o mejorar en el desarrollo web.",
    link: "https://devprograming.netlify.app/",
    github: "https://github.com/RodrigoFernandez1/devprograming",
    image: "../public/devprograming.webp",
  },
  {
    title: "rodrigoproyectos",
    description:
      "He creado esta web con tecnologías básicas del front, para exponer mis proyectos de una importancia menor, además de poner recursos para ayudar a los demás.",
    link: "https://rodrigoproyectos.netlify.app/",
    github: "https://github.com/RodrigoFernandez1/rodrigoproyectos",
    image: "../public/rodrigoproyectos.webp",
  },
];

const Projects = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100%" }}
      id="projects">
      <div className="row gy-4" id="portafoliofoo">
        {PROJECTS.map(({ image, title, description, link, github }) => (
          <div className="col-12 col-md-6" key={title}>
            <div className="card shadow-lg h-100">
              <img
                src={image}
                alt={title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="mt-auto">
                  {github && (
                    <a
                      href={github}
                      className="btn btn-outline-dark btn-sm me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                  {link && (
                    <a
                      href={link}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
