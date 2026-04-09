import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
               Lifeline HMS (Hospital Management System) is a modern full-stack healthcare solution designed to streamline hospital operations and improve patient care. It enables efficient management of patients,
                doctors, appointments, and medical records through a centralized and user-friendly platform. The system ensures secure data handling and provides real-time access to information, allowing smooth coordination between different departments. With features like appointment scheduling,
                 patient record management, and administrative controls, Lifeline HMS enhances operational efficiency and supports better healthcare service delivery.
                </p>

            </div>
            <div className="banner">
                <img src={imageUrl} alt="hero " className="animated-image"/>
                <span>
                    <img src="/Vector.png" alt="vector " />
                </span>

            </div>

        </div>
    );
};

export default Hero;
