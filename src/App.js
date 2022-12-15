import React from "react";
import './App.css';
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from './Carousel3';
import Carousel4 from './Carousel4';
import Navv from "./Navv";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import Logo2 from "./images/logo2.png";
import Form from "./Form.js";
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
   <p>More Than a Concierge Service</p></div>
 
      <header className="App-header">
      
      </header>
  
      <Row>
       
        
       
        <Col>  <div className="col-text-3"> <h2>ABOUT US</h2> <br/> With over 15 years experience in the Hospitality and Concierge industry, ByCisco was created.

We are here to give you access to world-class villas, yachts and the most exclusive experiences in Ibiza.

At ByCisco we curate every aspect of your holiday so you don't have to. Sit back, relax, party and enjoy. 
</div> </Col> 
<Col lg={true}> <Carousel /></Col>
      </Row>
     
    
       <Row>
        <Col lg={true}><Carousel2 /></Col>
        <Col lg={true} > <div className="col-text"> 
        
        <h2>VILLAS</h2> 
        <br/> ByCisco Lifestyle boasts a large portfolio of unique villas across the island. From beautiful modern architecture to the classic nuance of exotic elegance.

So whether you dream of being right on the beach, having spectacular sea views, or relaxing in pure seclusion in the countryside, we have the perfect villa for you.
 </div></Col>
 
      
      </Row>
   
       <Row>
        
     
        <Col lg={true}> <div className="col-text">
        <h2>BOATS & YACHTS</h2> 
        <br/>There is no better way to experience Ibizas coastline, pristine beaches and sparkling Mediterranean waters than by boat.
ByCisco has the latest Yachts in design, technology and comfort in Ibiza. From fast boats for a day of exploring, to Yachts where you can enjoy infinite days of bliss.
</div> </Col>
   <Col lg={true}><Carousel3 /></Col>
      </Row>


     <Row> 
        
      <Col lg={true}><Carousel4 /> </Col> 
     <Col lg={true}> <div className="col-text-2"><
      h2>CONCIERGE SERVICES</h2>
     <br/>TRANSPORT
     <br/>
Booking an Ibiza Chauffeur is a must in high season. Let us do the organising for you so you can enjoy a hassle-free vacation.
<br/>
<br/>
RESTAURANTS<br/>

You might know exactly where you want to dine, if not, let us inspire you. If you are running late or need to re-arrange, we will happyily do that for you.
<br/>
<br/>

  
</div></Col> 
</Row>

<Row> 
 
     <Col lg={true}> <div className="col-text-1">
 
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
<Col lg={true}><Carousel4 /> </Col> 
      
    </Row>
</div>
     <Container> 
    <div className="contact">
      <p> Get In Touch... </p>  </div>
 
   
<Form />



  <div className="image">
    <img src={Logo2}  height={180}
          width={190} alt="logo"/>
          
         </div>
         <div className="website">
www.bycisco.co.uk
    </div>

<div className="icons"> 
<span><a style={{ marginRight: '4rem' }} href="mailto: francisco@bycisco.co.uk"><FaEnvelope /></a></span>

      <span> {('')}<a  style={{ marginRight: '2rem' }}href="https://www.instagram.com/by.cisco/"><FaInstagram /></a></span>
      
      <span> {('')}<a  style={{ marginLeft: '2rem' }} href="tel:07515483544">< FaPhone /></a></span>

              <span> {('')}<a  style={{ marginLeft: '4rem' }}  href="https://www.facebook.com/ciscoagomes"><FaFacebookSquare /></a></span>
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
