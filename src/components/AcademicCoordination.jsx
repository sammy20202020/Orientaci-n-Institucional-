// src/components/AcademicCoordination.jsx
import React from 'react';
import Slider from 'react-slick';
import Swal from 'sweetalert2';
import '../css/AcademicCoordination.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const coordinatorData = [
    {
        title: 'Coordinación Académica',
        coordinators: [
            { title: 'Coordinadora Sistemas y Software', name: 'Paola Martínez' },
            { title: 'Coordinadora Maestría Finanzas', name: 'Francisco Felipe' },
            { title: 'Coordinadora Educación', name: 'Ligia Hernández' },
            { title: 'Asistente', name: 'Clauria Ferreras' },
            { title: 'Coordinadora', name: 'Alexandra Garcia' },
            { title: 'Coordinadora Turismo y Administración', name: 'Alejandra Brunet' },
            { title: 'Asistente', name: 'Elisa Tejada' }
        ],
        contact: {
            location: 'Edificio A',
            hoursWeekdays: 'Lunes a Viernes: 9:00 AM - 9:00 PM',
            hoursSaturdays: 'Sábados: 8:00 AM - 12:00 PM'
        },
        purpose: 'Aqui se brindan asistencias relacionadas a la carrera.'
    },
    {
        title: 'Registro y Caja',
        coordinators: [
            { title: 'Supervisora', name: 'Berkis Padilla' },
            { title: 'Supervisora', name: 'Santa Geraldine' },
            { title: 'Cajera', name: 'Sugeiry de la Rosaz' },
            { title: 'Cajera', name: 'Natashar santos' }
        ],
        contact: {
            location: 'Edificio B',
            hoursWeekdays: 'Lunes a Viernes: 8:00 AM - 8:00 PM',
            hoursSaturdays: 'Sábados: 8:00 AM - 3:00 PM'
        },
        purpose: 'Se cobran todos los procesos. Inscripción y créditos, admisión , record de notas y en general cualquier documento que se expida en la universidad'
    },
    {
        title: 'Admisiones',
        coordinators: [
            { title: 'Encargada', name: 'Kamairys guzman' },
            { title: 'Asistente', name: 'Mariela Torres' }
        ],
        contact: {
            location: 'Edificio B',
            hoursWeekdays: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
            hoursSaturdays: 'Sábados: 8:00 AM - 3:00 PM'
        },
        purpose: 'Proceso de admisión, desde su examen de admisión, respuesta de su resultado e inscripción formal a la universidad.'
    },
    {
        title: 'Área de ventas',
        coordinators: [
            { title: 'Coordinadora de mercadeo', name: 'Shirlene Guerrero' },
            { title: 'Jefa', name: 'Alicia Carlo' },
            { title: 'Ejecutivo de venta', name: 'Sunil perez' },
            { title: 'Ejecutivo de venta', name: 'Miguelina puello' },
            { title: 'Ejecutivo de venta', name: 'Violeta Encarnación' }
        ],
        contact: {
            location: 'Edificio A',
            hoursWeekdays: 'Lunes a Viernes: 8:00 AM - 8:00 PM',
            hoursSaturdays: 'Sábados: 9:00 AM - 3:00 PM'
        },
        purpose: 'Ofrecen diplomados, capacitaciones, talleres. Cotizaciones, brindan información general de las áreas.'
    },
];

const AcademicCoordination = () => {
    const showDetails = (data) => {
        Swal.fire({
            title: data.title,
            html: `
                <div class="swal-details">
                    <div class="details-section">
                        <h4 class="section-title">Coordinadores:</h4>
                        ${data.coordinators.map(coordinator => `
                            <p class="coordinator-info"><strong>${coordinator.title}:</strong><br/> ${coordinator.name}</p>
                        `).join('')}
                    </div>
                    <div class="details-section">
                        <h4 class="section-title">Horario:</h4>
                        <p class="contact-info"><strong>Ubicación:</strong><br/> ${data.contact.location}</p>
                        <p class="contact-info"><strong>Horario de Lunes a Viernes:</strong><br/> ${data.contact.hoursWeekdays}</p>
                        <p class="contact-info"><strong>Horario de Sábados:</strong><br/> ${data.contact.hoursSaturdays}</p>
                    </div>
                    <div class="details-section purpose-section">
                        <h4 class="section-title">Propósito:</h4>
                        <p class="purpose-info">${data.purpose || 'Información no disponible'}</p>
                    </div>
                </div>
            `,
            showCloseButton: true,
            customClass: {
                container: 'swal-container',
                popup: 'swal-popup',
                title: 'swal-title',
                htmlContainer: 'swal-html-container'
            },
            backdrop: `rgba(0,0,0,0.3)`
        });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="academic-coordination">
            <br></br> <br></br> <br></br>
            <Slider {...settings}>
                {coordinatorData.map((slideData, index) => (
                    <div key={index} className="coordination-slide">
                        <h1 className='h1-cost'>{slideData.title}</h1>
                        <div className="coordination-details">
                            {slideData.coordinators.map((coordinator, i) => (
                                <div key={i} className="coordinator">
                                    <h3 className="mb-3">{coordinator.title}</h3>
                                    <p>{coordinator.name}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => showDetails(slideData)}
                        >
                            Ver Detalles
                        </button>
                        <br></br>
                        <br></br>
                    </div>

                ))}
            </Slider>


        </section>
    );
};

export default AcademicCoordination;