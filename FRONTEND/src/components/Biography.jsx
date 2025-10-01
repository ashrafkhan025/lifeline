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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit, maiores ut nemo vel incidunt quibusdam eum deserunt necessitatibus magnam doloribus! Iure consequatur mollitia a velit saepe placeat repudiandae! Repudiandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vero laboriosam placeat dolorem illum vel quo quibusdam odio possimus, reprehenderit dolore consequuntur iusto harum, quos alias exercitationem consequatur tempora voluptates labore, suscipit ipsam vitae provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum placeat corrupti!</p>
        <p>Lorem, ipsum dolor.</p>

      </div>
      
    </div>
  );
};

export default Biography;
