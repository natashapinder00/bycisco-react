import React from "react";
import './App.css';
import Carousel from "./Carousel"
import Navv from "./Navv";
import Button from 'react-bootstrap/Button';





                


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
      <Carousel />
    </div>
  );
}

export default App;
