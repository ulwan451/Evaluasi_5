import React from 'react';
import { Navbar, Nav, Spinner} from 'react-bootstrap';
import './Jumbotron.css';

function Header () {
    return (
        <div className="header">
        <Navbar bg="primary" variant="dark" className="style">
            <Spinner animation="grow" variant="light" />
            <Navbar.Brand href="#home">UL-WAN</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profil">Profil</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    );
}

export default Header;
