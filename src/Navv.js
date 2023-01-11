import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./images/logo.png"


function BrandExample() {
  return (
    <>
      <Navbar  bg="transparent" variant="transparent">
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="200"
              height="200"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
        </Container>
         </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BrandExample;