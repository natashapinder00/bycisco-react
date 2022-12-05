import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import Boat from "./images/boat.jpg";
import Villa2 from "./images/villa2.png";
import Villa from "./images/Villa.jpg";
import Villa4 from "./images/villa4.png";

function UncontrolledExample() {
  return (
    
  
    <Carousel>
      <Carousel.Item>
     
      
          <img
          className="d-block w-100"
          src={Villa2}
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