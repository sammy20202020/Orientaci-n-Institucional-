// src/components/Header.js
import React from 'react';
import '../css/Header.css'; // Puedes añadir tus estilos personalizados

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Rally</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#features">Características</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
