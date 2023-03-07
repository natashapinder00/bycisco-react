import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




export default function Home() {
  return <div>


    <Form name="contact v1"
      method="POST"
      data-netlify="true"
      onSubmit="submit"
      
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v1" />

      
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="first" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="last" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicComments">
        <Form.Label>Any Comments?</Form.Label>
       
        <Form.Control required as="textarea" type="text" name="comments" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
   
  </div>
}

