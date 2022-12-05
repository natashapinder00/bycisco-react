import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Yacht from "./images/yacht.jpg";
import Boat2 from "./images/boat2.jpg";
import Boat4 from "./images/boat4.png";

function UncontrolledExample() {
  return (
    
  
    <Carousel>
      <Carousel.Item>
     
      
          <img
          className="d-block w-100"
          src={Yacht}
          alt="First slide"
        />
        
   </Carousel.Item>

      <Carousel.Item> 
        
        <img
          className="d-block w-100"
          src={Boat2}  
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
       
      
        <img
          className="d-block w-100"
          src={Boat4}
          alt="Third slide"
        />

        
        
       
      
      </Carousel.Item>
    </Carousel>

  );
}

export default UncontrolledExample;