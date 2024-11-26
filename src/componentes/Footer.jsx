// eslint-disable-next-line no-unused-vars
import React from "react";
import "../componentes css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light">
            <div className="container py-4">
                <div className="row">
                    {/* mas Información de mi*/}
                    <div className="col-md-4">
                        <h5>Sobre mí</h5>
                        <p>
                            Estoy buscando oportunidades donde pueda aplicar mis habilidades, impulsar proyectos innovadores y contribuir al éxito de un equipo dinámico. Si tu proyecto necesita una mente enfocada en soluciones, con una experiencia en desarrollo web y un compromiso por alcanzar resultados sobresalientes, estoy listo para sumarme al reto y aportar con mi dedicación y conocimiento técnico.
                        </p>
                    </div>

                    {/*  Links rápidos */}
                    <div className="col-md-4">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#aboutfoo" className="text-light" id="home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#portafoliofoo" className="text-light">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#acercafoo" className="text-light">
                                    Acerca de
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mis Redes sociales */}
                    <div className="col-md-4">
                        <h5>Redes Sociales</h5>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/rodrigofernandez-/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/RodrigoFernandez1" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/rodrigoo.fernandezz/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="mb-0">© 2024 Rodrigo Fernandez. Casi Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
