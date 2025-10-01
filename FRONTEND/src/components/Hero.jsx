import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>
                    Al-Shifa Hospital and Medical Institute is a modern healthcare and teaching facility dedicated to providing quality medical services along with academic excellence in medical education. Rooted in the Islamic value of “Shifa” meaning healing, the institute focuses on compassionate patient care, advanced treatment methods, and research-oriented learning. With specialized departments, experienced doctors, and well-equipped laboratories, it not only serves the community’s health needs but also nurtures future medical professionals through training and practical exposure.

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
