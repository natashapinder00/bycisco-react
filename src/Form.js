import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




export default function Home() {
  return <div>

    <form 
      name="contact v2"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v2" />

      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label>First name<br />
            <input type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label>Last name<br />
            <input type="text" name="last-name" />
        </label>
      </div>

      <div>
        <label htmlFor="email" >Email</label><br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>Any Comments?<br />
          <textarea name="comments"></textarea>
        </label>
      </div>

      <button type="submit">Submit The Results</button>

    </form>

  </div>
}


/*
export default function Home() {
  return <div>


    <Form name="contact v2"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v2" />

      
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

*/