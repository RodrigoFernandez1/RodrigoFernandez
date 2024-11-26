// eslint-disable-next-line no-unused-vars
import React from "react";
import "../componentes css/Experiencia.css";

const Experiencia = () => {
    const experiencias = [
        {
            puesto: "Desarrollador Front-End",
            Organicación: "Fiel Pueblo",
            periodo: " sep 2024 - Presente",
            descripcion:
                "Desarrollé interfaces de usuario interactivas y responsivas utilizando HTML, Css y JS, con estilos bootstrap.",
            proyecto: "https://github.com/RodrigoFernandez1/FielPueblo",
        },
        {
            puesto: "Diseño web",
            Organicación: "Fiel Pueblo",
            periodo: "sep 2024 - Presente",
            descripcion:
                "Diseñe desde cero todo lo visual de la web.",
            proyecto: "https://fielpueblo.vercel.app/",
        },
    ];

    return (
        <section className="experiencia" id="experience">
            <h2 className="section-title">Experiencia Profesional</h2>
            <div className="experiencia-list">
                {experiencias.map((exp, index) => (
                    <div className="experiencia-item" key={index}>
                        <h3 className="puesto">{exp.puesto}</h3>
                        <p className="empresa">{exp.Organicación}</p>
                        <p className="empresa">{exp.empresa}</p>
                        <span className="periodo">{exp.periodo}</span>
                        <p className="descripcion">{exp.descripcion}</p>
                        {exp.proyecto && (
                            <a href={exp.proyecto} target="_blank" rel="noopener noreferrer" className="buton-ver">
                                <button>Ver Ptoyecyo</button>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiencia;
