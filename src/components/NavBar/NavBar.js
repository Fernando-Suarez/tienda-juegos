import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from '../CartWidget/CartWidget'
import { NavLogo } from '../NavLogo/NavLogo';


export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <NavLogo></NavLogo> 
            {' '}
            Tienda Juegos
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#juegos">Juegos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <Navbar.Brand>
          <CartWidget></CartWidget>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}


