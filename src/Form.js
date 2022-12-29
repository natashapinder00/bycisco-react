

import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';



export const ContactUs = () => {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
emailjs.sendForm('service_rqaz3ra', 'template_8kyy9tk', form.current, 
'LGtQQjd8k0V1ccFQ')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
};

return (
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>
);
};


function BasicExample() {
  return (

    <Form >

        
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
        <Form.Control type="message"  as="textarea" rows={3} placeholder="" />
        <Button className="submit-btn" variant="outline-dark" size="lg" type="submit">
        Submit 
      </Button>
      </Form.Group>
     
      
     
    </Form>
  );
}

export default BasicExample;