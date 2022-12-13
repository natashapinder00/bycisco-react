import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Experience from "./images/experience.jpg";
import Experience2 from "./images/experience2.png";
import Experience3 from "./images/experience3.png";

function UncontrolledExample() {
  return (
    
  
    <Carousel>
      <Carousel.Item>
     
      
          <img
          className="d-block w-100"
          src={Experience}
          alt="First slide"
        />
        
   </Carousel.Item>

      <Carousel.Item> 
        
        <img
          className="d-block w-100"
          src={Experience2}  
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
       
      
        <img
          className="d-block w-100"
          src={Experience3}
          alt="Third slide"
        />

        
        
       
      
      </Carousel.Item>
    </Carousel>

  );
}

export default UncontrolledExample;