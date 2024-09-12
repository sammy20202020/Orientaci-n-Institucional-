import React from 'react';
import '../css/AcademicStructure.css'; // Asegúrate de crear y ajustar este archivo CSS
import rectorImage from '../images/rector.jpg';
import vicerrectoraImage from '../images/vicerrectora.jpg';
import alejandra from '../images/lejandra.png'

const AcademicStructure = () => {
    return (
        <section className="academic-structure">
            <h1>Estructura Académica</h1>
            <div className="structure-card">
                <img src={rectorImage} alt="Rector" className="structure-image" />
                <div className="structure-info">
                    <h2>Rector</h2>
                    <p>Ing. Ramón Sosa</p>
                </div>
            </div>
            <div className="structure-card">
                <img src={vicerrectoraImage} alt="Vicerrectora Académica" className="structure-image" />
                <div className="structure-info">
                    <h2>Vicerrectora Académica</h2>
                    <p>Dra. Laura Reyes Alardo</p>
                </div>
            </div>


            <div className="structure-card">
                <img src={alejandra} alt="Vicerrectora Académica" className="structure-image" />
                <div className="structure-info">
                    <h2>Coordinadorade ciclos estudios generales</h2>
                    <p>Lic. Alejandra Brunet</p>
                </div>
            </div>
        </section>
    );
};

export default AcademicStructure;
