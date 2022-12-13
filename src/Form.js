import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function BasicExample() {
  return (
   
    <Form>

        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Second Name</Form.Label>
        <Form.Control type="name" placeholder="" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Message</Form.Label>
        <Form.Control type="message" placeholder="" />
        <Button className="submit-btn" variant="outline-primary" type="submit">
        Submit
      </Button>
      </Form.Group>
     
      
     
    </Form>
  );
}

export default BasicExample;