// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../componentes css/Contact.css';

const Contact = () => {
    // Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState(''); // Para mostrar mensajes de éxito o error

    // Función para manejar cambios en los campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Actualiza solo el campo que cambió
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado (recargar la página)

        // Simular envío de datos
        console.log('Datos del formulario:', formData);

        // Validar datos (opcional)
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('Por favor, completa todos los campos.');
            return;
        }

        // Simular éxito del envío
        setFormStatus('¡Mensaje enviado con éxito!');

        // Limpiar el formulario
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contáctame</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Tu correo electrónico"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>

            {/* Mensaje de estado del formulario */}
            {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
    );
};

export default Contact;