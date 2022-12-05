import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Boat from "./images/boat.jpg";
import Villa3 from "./images/villa3.png";
import Villa from "./images/Villa.jpg";
import Villa4 from "./images/villa4.png";

function UncontrolledExample() {
  return (
    
  
    <Carousel>
      <Carousel.Item>
     
      
          <img
          className="d-block w-100"
          src={Villa3}
          alt="First slide"
        />
        
   </Carousel.Item>

      <Carousel.Item> 
        
        <img
          className="d-block w-100"
          src={Villa}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
       
      
        <img
          className="d-block w-100"
          src={Villa4}
          alt="Third slide"
        />

        
        
       
      
      </Carousel.Item>
    </Carousel>

  );
}

export default UncontrolledExample;