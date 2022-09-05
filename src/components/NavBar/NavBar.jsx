import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from '../CartWidget/CartWidget'
import { NavLogo } from '../NavLogo/NavLogo';
import {NavLink} from 'react-router-dom'


export function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink to="/" className='navbar-brand'>
            <NavLogo></NavLogo> 
            {' '}
            Tienda Juegos
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/categoria/ps4" className="nav-link">Ps4</NavLink>
            <NavLink to="/categoria/ps5" className="nav-link">Ps5</NavLink>
            <NavLink to="/categoria/xbox" className="nav-link">Xbox</NavLink>
            <NavLink to="/categoria/nintendo" className="nav-link">Nintendo</NavLink>
          </Nav>
          <Navbar.Brand>
          <NavLink to="/cart"><CartWidget></CartWidget></NavLink>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}


