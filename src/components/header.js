import React from 'react';
import logo1 from '../assets/logo.png';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';



class Header extends React.Component {

    render() {

        return  <Navbar bg="dark" className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
                    <div className="container">
                        <Navbar.Brand className="navbar-brand col-7 col-md-3 pl-0" href="/">
                            <img className="col-12 pl-0" src={logo1} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link target="_blank" href="https://proyecto2-german.herokuapp.com/">Mis materias</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>;
    }

}

export default Header;