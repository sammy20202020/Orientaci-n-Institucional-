import React from 'react';
import '../css/BibliotecaYRegistro.css'; // Archivo CSS para estilos combinados

const BibliotecaYRegistro = () => {
    return (
        <div className="container">
            <div className="background-animation"></div>
            <div className="section biblioteca">
                <header>
                    <h1>Biblioteca</h1>
                </header>

                <section className="content">
                    <div className="info">
                        <h2>Equipo</h2>
                        <ul>
                            <li>Nélida Cairo - Encargada</li>
                            <li>Lisette Abreu - Encargada de Catalogación</li>
                            <li>Silvia Díaz - Encargada de Desarrollo de Colección</li>
                            <li>Amarilys Beltré - Referencista Recursos Electrónicos</li>
                            <li>Yissel Filpo - Referencista Vespertino Nocturno</li>
                            <li>Glenis Guerrero - Auxiliar de Biblioteca</li>
                        </ul>
                    </div>

                    <div className="services">
                        <h2>Servicios</h2>
                        <p>Internet, acceso a computadoras, préstamos de libros y salón de estudios con pantalla de presentación.</p>
                    </div>

                    <div className="schedule">
                        <h2>Horario</h2>
                        <p>Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                        <p>Sábados: 9:00 AM - 12:00 PM</p>
                    </div>
                </section>
            </div>

            <div className="section registro">
                <header>
                    <h1>Registro</h1>
                </header>

                <section className="content">
                    <div className="info">
                        <h2>Equipo</h2>
                        <ul>
                            <li>Laurisia Concha - Encargada</li>
                            <li>Yirandris Mañón - Supervisora</li>
                            <li>Edwin Salazar - Director</li>
                        </ul>
                    </div>

                    <div className="services">
                        <h2>Servicios</h2>
                        <p>Emisión de documentación para uso público y privado, auditoría de gestión académica y de estudiantes, inscripción de estudiantes.</p>
                    </div>

                    <div className="schedule">
                        <h2>Horario</h2>
                        <p>Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                        <p>Sábados: 8:00 AM - 3:00 PM</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BibliotecaYRegistro;
