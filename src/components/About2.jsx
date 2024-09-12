import React from 'react';
import '../css/Aboutw.css'; // Estilos para About

const About2 = () => {
    return (
        <section id="about" className="about">
            <div className='about2'>

                <h2>Misión, Visión y Valores</h2>

                <div className="mission">
                    <h3>Misión</h3>
                    <p>
                        Somos una comunidad universitaria bicultural que desarrolla profesionales competentes con una visión integral, innovadora y comprometida con la calidad.
                    </p>
                </div>

                <div className="vision">
                    <h3>Visión</h3>
                    <p>
                        Ser una comunidad universitaria multicultural de excelencia en la formación de ciudadanos globales que transformen la sociedad.
                    </p>
                </div>

                <div className="values">
                    <h3>Valores</h3>
                    <ul>
                        <li>Compromiso</li>
                        <li>Responsabilidad</li>
                        <li>Inclusión y Equidad</li>
                        <li>Integridad</li>
                        <li>Servicio a la Comunidad</li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default About2;
