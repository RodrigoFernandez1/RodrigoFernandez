// eslint-disable-next-line no-unused-vars
import React from "react";
import Projects from "./componentes/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/Header";
import PresentationText from './componentes/PresentationText';
import PresentationImage from './componentes/PresentationImage';
import Experiencia from "./componentes/Experiencia";
import AcercaDeMi from "./componentes/AcercaDeMi";
import Footer from "./componentes/Footer";
import "@fortawesome/fontawesome-free/css/all.css";


const App = () => {
  return (
    <div>
      <Header />
      <div className="presentation-container">
        <PresentationText />
        <PresentationImage />
      </div>
      <Experiencia />
      <h1 id="projects" className="text-center my-4">Mis Proyectos</h1>
      <Projects />
      <AcercaDeMi />
      <Footer />
    </div>
  );
};

export default App;
