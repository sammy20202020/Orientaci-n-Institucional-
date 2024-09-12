import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de incluir Bootstrap CSS
import '../css/NursingInfo.css'; // Asegúrate de tener este archivo para los estilos

const NursingInfo = () => {
    return (
        <section id="nursing-info" className="nursing-info">
            <h1 className="text-center mb-4">Información General</h1>



            <Accordion defaultActiveKey="0">
                {/* Tarjeta de Información de Enfermería */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5 className="mb-0">Enfermería</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong> Edificio B
                        </p>
                        <p>
                            <strong>Horario:</strong>
                            <br />
                            Lunes a Viernes: 7:30 am - 8:00 pm
                            <br />
                            Sábados: 8:00 am - 12:00 pm
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Complejo Deportivo */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h5 className="mb-0">Complejo Deportivo</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Deportes Practicados:</strong>
                        </p>

                        Fútbol,  Basketball,  Volleyball

                        <p>
                            <strong>Horario:</strong>
                            <br />
                            Lunes a Viernes: 2:00 pm - 5:00 pm
                        </p>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            Edificio E, primer piso
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Dirección Cultural */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h5 className="mb-0">Dirección Cultural</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong> Edificio de la Plaza Español, justo al lado de la biblioteca
                        </p>
                        <p>
                            Ofrece una amplia oferta de programas, actividades y eventos que combina todos los aspectos del arte y la cultura en sentido global, con énfasis en la cultura estadounidense y dominicana.
                        </p>
                        <p>
                            Este departamento está bajo la directriz de su directora Sofía Otero y su asistente Elina Hernández.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Acceso a Plataformas */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h5 className="mb-0">Acceso a Plataformas</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Plataformas:</strong>
                            <br />


                        </p>
                        <p>
                            En caso de necesitar ayuda para acceder al aula virtual, contactar a <a href="mailto:cpichardo@icda.edu.do">cpichardo@icda.edu.do</a> para más asistencia.
                        </p>
                        <p>
                            Si te encuentras con algún inconveniente en la página de UNICDA, escribe a <a href="mailto:Gladys Ortiz">Gladys Ortiz</a>.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Recording Studio Podcast */}
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <h5 className="mb-0">Recording Studio Podcast</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            Edificio E, segundo piso, al lado de la oficina de Escuela de Idiomas
                        </p>
                        <p>
                            <strong>Descripción:</strong>
                            <br />
                            Handdrawn Doodle Podcast On Air Sign Icon
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de American Lounge */}
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <h5 className="mb-0">American Lounge</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            Edificio E, tercer piso, al lado de la oficina de Escuela de Idiomas
                        </p>
                        <p>
                            Es un espacio diseñado para área de estudio.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Maker Space */}
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <h5 className="mb-0">Maker Space</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            Edificio E, segundo piso, al lado de la oficina de Escuela de Idiomas
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Plaza del Estudiante */}
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        <h5 className="mb-0">Plaza del Estudiante</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            Entrada del Edificio A
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Tarjeta de Teacher Development Center */}
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        <h5 className="mb-0">Teacher Development Center</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            Parqueo de UNICDA, justo al salir de la estación del metro Francisco Caamaño
                        </p>
                    </Accordion.Body>
                </Accordion.Item>


                {/* Tarjeta de eco */}
                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        <h5 className="mb-0">Eco</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            <strong>Ubicación:</strong>
                            <br />
                            El departamento de Asesoria Estudiantil (ECO) se encuentra en el edificio A,
                            <br />
                            al lado de Admisiones y ofrece los servicios de: asesoria. guia, revisión de ensayos, y seguimiento en el proceso de solicitud de estudios en una universidad de los Estados Unidos.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>





        </section>
    );
};

export default NursingInfo;
