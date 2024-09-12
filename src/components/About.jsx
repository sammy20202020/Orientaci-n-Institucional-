// src/components/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCog, faBug, faDatabase, faCloud, faMobileAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import '../css/About.css'; // Estilos para About

const About = () => {
    return (
        <section id="about" className="about">
            <div className='about2'>
                <h2>FrameWork Team</h2>
                <p>David De la Rosa 2024-0145</p>
                <p>Samuel Roa 2024-0102</p>
                <br></br>
                <br></br>
                <div className="icons">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" title="Development" />
                    <FontAwesomeIcon icon={faCog} size="2x" title="Settings" />
                    <FontAwesomeIcon icon={faBug} size="2x" title="Debugging" />
                    <FontAwesomeIcon icon={faDatabase} size="2x" title="Backend" />
                    <FontAwesomeIcon icon={faCloud} size="2x" title="Cloud Computing" />
                    <FontAwesomeIcon icon={faMobileAlt} size="2x" title="Mobile Development" />
                    <FontAwesomeIcon icon={faChartLine} size="2x" title="Data Analysis" />
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
    );
};

export default About;
