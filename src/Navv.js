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
         <Navbar className="justify-content-center">
            <img
              alt="logo"
              src={logo}
              width="200"
              height="200"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar>
        </Container>
         </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BrandExample;