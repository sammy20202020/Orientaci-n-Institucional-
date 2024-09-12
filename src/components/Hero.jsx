// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import '../css/Hero.css'; // Estilos para Hero
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import party from 'party-js'; // Importa party.js para la animación de confeti

const Hero = () => {
    const buttonRef = useRef(); // Referencia para el botón

    const handleButtonClick = () => {
        // Dispara la animación de confeti
        party.confetti(buttonRef.current, {
            count: party.variation.range(50, 100), // Cantidad de confeti
            spread: 90, // Ángulo de dispersión
        });

        // Espera a que termine la animación antes de hacer el scroll
        setTimeout(() => {
            const aboutSection = document.getElementById('about'); // Sección a la que se desplazará
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }, 1500); // 1.5 segundos de espera antes de desplazarse
    };

    useEffect(() => {
        // Crear contenedor de lápices al cargar el componente
        const container = document.createElement('div');
        container.className = 'falling-pencils';
        document.body.appendChild(container);

        // Crear lápices que caen constantemente
        const intervalId = setInterval(() => {
            const pencil = document.createElement('div');
            pencil.className = 'pencil';
            pencil.innerHTML = `<i class="fas fa-pencil-alt"></i>`;
            container.appendChild(pencil);

            // Establecer posición y animación aleatoria
            pencil.style.left = Math.random() * 100 + 'vw';
            pencil.style.animationDuration = 2 + Math.random() * 3 + 's'; // Duración aleatoria de 2 a 5 segundos
            pencil.style.animationDelay = Math.random() * 2 + 's'; // Retraso aleatorio de 0 a 2 segundos

            // Remover el lápiz después de la animación
            pencil.addEventListener('animationend', () => pencil.remove());
        }, 300); // Crear un lápiz cada 300 milisegundos

        // Limpieza al desmontar el componente
        return () => {
            clearInterval(intervalId);
            container.remove();
        };
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <section id="hero" className="hero">
            <h1>Bienvenido a Rally</h1>
            <p>La plataforma que te ayudará a conocer UNICDA</p>
            <a

                className="cta-button"
                onClick={handleButtonClick}
                ref={buttonRef}
            >
                Empieza Ahora
            </a>
        </section>
    );
};

export default Hero;
