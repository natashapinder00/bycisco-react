import React from "react";
import './App.css';
import Form from "./Form";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from './Carousel3';
import Carousel4 from './Carousel4';
import Carousel5 from './Carousel5';
import Navv from "./Navv";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import Logo2 from "./images/logo2.png";

import Container from 'react-bootstrap/Container';







function App() {

  return (
    <div className="App">
      
       <div className="background">
      
     <Navv />
<div className="caption">
     <p> "You can check in <br/> but you can never check out"
     <br/>
     
        
   </p>  </div>
 <div className="caption-2"> - Tony Pikes - </div>

     <div className="position-absolute start-50 translate-middle">
      
       <Button className="contact-btn" variant="outline-light" size="lg" href="mailto: francisco@bycisco.co.uk">Get In Touch</Button>{' '}
      
</div>
</div>
<div className="beige">
 <div className="contact">
   More Than a Concierge Service</div>
 
      <header className="App-header">
      
      </header>
  <Container>
      <Row>
       
        
       
        <Col lg={true} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>  <div className="col-text-3"> <h4>ABOUT US</h4> 
        <br/> With over 15 years experience in the Hospitality and Concierge industry, ByCisco was created.

<br/><br/>We are here to give you access to world-class villas, yachts and the most exclusive experiences in Ibiza.

<br/>At ByCisco we curate every aspect of your holiday so you don't have to. Sit back, relax, party and enjoy. 
</div> </Col> 
<Col lg={true}xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} ><Carousel /></Col>
      </Row>
     
    
       <Row>
        <Col lg={true} xs={{ span: 12, order: 3 }} md={{ span: 6, order: 3 }}><Carousel2 /></Col>
        <Col lg={true} xs={{ span: 12, order: 4 }} md={{ span: 6, order: 4 }}> <div className="col-text"> 
        
        <h4>VILLAS</h4> 
        <br/> ByCisco Lifestyle boasts a large portfolio of unique villas across the island. From beautiful modern architecture to the classic nuance of exotic elegance.

<br/><br/>So whether you dream of being right on the beach, having spectacular sea views, or relaxing in pure seclusion in the countryside, we have the perfect villa for you.
 </div></Col>
 
      
      </Row>
   
       <Row>
        
     
        <Col lg={true} xs={{ span: 12, order: 5 }} md={{ span: 6, order: 6 }}> <div className="col-text">
        <h4>BOATS & YACHTS</h4> 
        <br/>Famous for its lively nightlife and sandy beaches, our yacht charter advisors will help design your perfect charter experience to discover the Balearics Islands of Ibiza and Formentera.
<br/><br/>ByCisco has the latest Yachts in design, technology and comfort in Ibiza. From fast boats for a day of exploring, to Yachts where you can enjoy infinite days of bliss.
</div> </Col>
   <Col lg={true} xs={{ span: 12, order: 6 }} md={{ span: 6, order: 5 }}><Carousel3 /></Col>
      </Row>


     <Row> 
        
      <Col lg={true} xs={{ span: 12, order: 7 }} md={{ span: 6, order: 8 }}><Carousel4 /> </Col> 
     <Col lg={true} xs={{ span: 12, order: 8 }} md={{ span: 6, order: 7 }}> <div className="col-text-2">
      <h4>CONCIERGE SERVICES</h4>
     <br/>TRANSPORT
     <br/>
Booking an Ibiza Chauffeur is a must in high season. Let us do the organising for you so you can enjoy a hassle-free vacation.
<br/>
<br/>
RESTAURANTS<br/>

You might know exactly where you want to dine, If not, let us organise the reservation on your behalf.


  
</div></Col> 
</Row>

<Row> 
 
     <Col lg={true} xs={{ span: 12, order: 5 }} md={{ span: 6, order: 6 }} > <div className="col-text-4">
 
<br/>NIGHTLIFE<br/>

DC10, Hi, Ushuaia, Pacha, Amnesia and Destino, you name it. We will organise your entire night for the ultimate VIP experience.
<br/>
<br/>
CHEFS<br/>

Our first-class chefs use the best suppliers on the island and aim to meet you every want and need for your event, no matter how big or small.
<br/>
<br/>
YOGA<br/>

We have a selection of private yoga instructors, hand picked to suit your wants and needs.
<br/>
<br/>
NANNIES<br/>

All nannies have top qualifications paired with the utmost dedication to the children they care for at all times.

</div></Col> 
<Col lg={true} xs={{ span: 12, order: 5 }} md={{ span: 6, order: 6 }}><Carousel5 /> </Col> 
      
    </Row>
    </Container>
</div>
 <Form />
    <div className="contact-2">
     Get In Touch...  </div>
   
    <Container> 
    

<div className="icons"> 
<span><a style={{ display:'inline-flex', alignItems: 'center' }} href="mailto: francisco@bycisco.co.uk"><FaEnvelope /></a></span>

      <span> {('')}<a  style={{ display:'inline-flex', alignItems: 'center' }}href="https://www.instagram.com/by.cisco/"><FaInstagram /></a></span>
      
      <span> {('')}<a  style={{display:'inline-flex', alignItems: 'center'}} href="tel:07515483544">< FaPhone /></a></span>

              <span> {('')}<a  style={{ display:'inline-flex', alignItems: 'center' }}  href="https://www.facebook.com/ciscoagomes"><FaFacebookSquare /></a></span>
              </div>

<div className="website">
    
Call  +34 682 843 171
< br/>
< br/>
WhatsApp 
+447 798 794 660
    </div>

  <div className="image">
    <img src={Logo2}  height={130}
          width={130} alt="logo"/>
          
         </div>
         <div className="website">
www.bycisco.co.uk
    </div>



    <div className="natasha">
          This website was coded by Natasha Pinder, and is {('')}
          <span> {('')}<a  href="https://github.com/natashapinder00/">open-sourced</a></span>

    </div>
</Container> 
    </div>
  );
}

export default App;
