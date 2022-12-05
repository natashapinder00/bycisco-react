import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Island2 from "./images/island2.png";
import Plane from "./images/plane.png";
import Ocean from "./images/ocean.png";

function UncontrolledExample() {
  return (
    
  
    <Carousel>
      <Carousel.Item>
     
      
          <img
          className="d-block w-100"
          src={Plane}
          alt="First slide"
        />
        
   </Carousel.Item>

      <Carousel.Item> 
        
        <img
          className="d-block w-100"
          src={Island2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
       
      
        <img
          className="d-block w-100"
          src={Ocean}
          alt="Third slide"
        />

        
        
       
      
      </Carousel.Item>
    </Carousel>

  );
}

export default UncontrolledExample;