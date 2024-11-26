// eslint-disable-next-line no-unused-vars
import React from "react";
import "../componentes css/AcercaDeMi.css";
import rodrigo from "../assets/rodrigofernandez img.webp"

const AcercaDeMi = () => {
    return (
        <section className="acerca-de-mi" id="about">
            <div className="container" id="acercafoo">
                <h2 className="section-title">Acerca de mí</h2>
                <div className="contenido">
                    <div className="texto">
                        <p>
                            Desarrollador Front-Enn con más de 2 años de experiencia creando interfaces de usuario modernas, funcionales y responsivas. Mis comienzós con la programación fue estudiando Odoo, para el desarrollo de modulos. lo que me dio una base en lógica y resolución de problemas. Con el tiempo, amplié mi enfoque hacia el desarrollo web, especializándome en tecnologías como HTML, CSS, JavaScript y React.
                        </p>
                        <p>
                            Me destaco por mi capacidad para diseñar y desarrollar soluciones web eficientes, limpias y orientadas a la experiencia del usuario, utilizando principios de arquitectura CSS y buenas prácticas de desarrollo. Además, siempre busco optimizar el rendimiento y mantener un código fácil de escalar.
                        </p>
                        <p>
                            Estoy comprometido con el aprendizaje continuo, lo que me ha permitido dominar herramientas como Git, GitHub, NPM y frameworks modernos, además de trabajar en proyectos colaborativos donde la comunicación y el trabajo en equipo son fundamentales. Mi objetivo es seguir creciendo en proyectos desafiantes y aportar valor con mi creatividad, dedicación y conocimientos técnicos.
                        </p>
                        <p>
                            Estoy buscando oportunidades donde pueda aplicar mis habilidades, impulsar proyectos innovadores y contribuir al éxito de un equipo dinámico. Si tu proyecto necesita una mente enfocada en soluciones, con una experiencia en desarrollo web y un compromiso por alcanzar resultados sobresalientes, estoy listo para sumarme al reto y aportar con mi dedicación y conocimiento técnico.
                        </p>
                        <button className="btn-cv">
                            <a href="https://www.linkedin.com/in/rodrigofernandez-/" target="_blank" rel="noopener noreferrer">
                                Linkedin
                            </a>
                        </button>
                    </div>
                    <div className="imagen">
                        <img
                            src={rodrigo}
                            alt="Foto de perfil"
                            className="foto-perfil"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcercaDeMi;
