import React from "react";
import './App.css';

import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from './Carousel3';
import Navv from "./Navv";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





                


function App() {
  return (
    <div className="App">
      
       <div className="background">
        
     <Navv />

     <h1> "You can check in but you can never check out" </h1>
     <div className="position-absolute top-50 start-50 translate-middle">
       <Button variant="btn btn-outline-dark" size="lg">Get In Touch</Button>{' '}
    </div>  
 </div>

   <h2>More Than a Concierge Service</h2>

      <header className="App-header">
      
      </header>
   
      <Row>
       
        <Col lg={true}> <Carousel /></Col>
       
        <Col>  <div className="col-text"> With over 15 years experience in the Hospitality and Concierge industry, ByCisco was created.

We are here to give you access to world-class villas, yachts and the most exclusive experiences in Ibiza.

At ByCisco we curate every aspect of your holiday so you don't have to. Sit back, relax, party and enjoy. 
</div> </Col> 
      </Row>
     
    
       <Row>
        <Col lg={{order:1}} xs={{ order: 4 }}> <div className="col-text">ByCisco Lifestyle boasts a large portfolio of unique villas across the island. From beautiful modern architecture to the classic nuance of exotic elegance.

So whether you dream of being right on the beach, having spectacular sea views, or relaxing in pure seclusion in the countryside, we have the perfect villa for you.
 </div></Col>
       <Col lg={true}xs={{ order: 3}}><Carousel2 /></Col>
      </Row>
   
       <Row>
        
        <Col lg={true}><Carousel3 /></Col>
        <Col lg={true}> <div className="col-text">There is no better way to experience Ibizas coastline, pristine beaches and sparkling Mediterranean waters than by boat.

ByCisco has the latest Yachts in design, technology and comfort in Ibiza. From fast boats for a day of exploring, to Yachts where you can enjoy infinite days of bliss.
</div> </Col>
      </Row>
     <Row>
        
        
        <Col> <div className="col-text">TRANSPORT<br/>
Booking an Ibiza Chauffeur is a must in high season. Let us do the organising for you so you can enjoy a hassle-free vacation.
<br/>
RESTAURANTS<br/>
You might know exactly where you want to dine, if not, let us inspire you. If you are running late or need to re-arrange, we will happyily do that for you.
<br/>
YOGA<br/>
We have a selection of private yoga instructors, hand picked to suit your wants and needs.

  
NIGHTLIFE<br/>
DC10, Hi, Ushuaia, Pacha, Amnesia and Destino, you name it. We will organise your entire night for the ultimate VIP experience.
<br/>
CHEFS<br/>
Our first-class chefs use the best suppliers on the island and aim to meet you every want and need for your event, no matter how big or small.
<br/>
NANNIES<br/>
All nannies have top qualifications paired with the utmost dedication to the children they care for at all times.

</div></Col> 
<Col lg={true} xs={{ order: 3}}><Carousel3 /> </Col> 
      
    </Row>
    </div>
  );
}

export default App;
