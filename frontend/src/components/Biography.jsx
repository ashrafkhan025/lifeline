import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about.img" />
      </div>
      <div className="banner">
        <p>
          Biography
        </p>
        <h3>Who We Are</h3>
        <p>
  Lifeline HMS is a modern hospital management system designed to simplify and digitize healthcare operations through a centralized platform.
</p>

<p>
  It enables efficient management of patients, doctors, appointments, and medical records, reducing manual work and improving accuracy.
</p>

<p>
  The system is built with a user-friendly interface to ensure smooth interaction for both healthcare staff and administrators.
</p>

<p>
  Lifeline HMS focuses on secure data handling and real-time access to information, helping hospitals improve coordination across departments.
</p>

<p>
  By integrating modern technologies, it enhances workflow efficiency and supports better decision-making in healthcare environments.
</p>

<p>
  Our goal is to deliver a reliable solution that improves overall hospital management and patient care experience.
</p>

      </div>
      
    </div>
  );
};

export default Biography;
