// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../componentes css/PresentationImage.css';
import img from '../assets/rodrigofernandez.webp'

const PresentationImage = () => {
    return (
        <div className="presentation-image">
            <img src={img} alt="Rodrigo Fernández" />
        </div>
    );
};

export default PresentationImage;
