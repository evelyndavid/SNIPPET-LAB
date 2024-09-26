

import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const handleLogin = () => {
        window.location.href = '/Login'; 
    };
    
    const handleSignUp = () => {
        window.location.href = '/SignUp'; 
    };
    
    const handleHome = () => {
        window.location.href = '/'; 
    };

    return (
        <Navbar expand="lg" style={{ background: '#C5C6C7', padding: '15px 20px' ,zIndex: 1030,boxShadow : '0 0 5px rgba(0,123,255,1.5)'}}>
            <Container>
                <Navbar.Brand href="#" style={{ color: '#000', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    <img
                        src="./logo.PNG" 
                        alt="Logo"
                        style={{ width: '50px', height: '50px', marginRight: '15px' }} 
                    />
                    SnippetLab
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link onClick={handleHome} style={{ color: '#000', fontWeight: 'bold' }}>Home</Nav.Link>
                        <Nav.Link onClick={handleSignUp} style={{ color: '#000', fontWeight: 'bold' }}>Sign Up</Nav.Link>
                        <Nav.Link onClick={handleLogin} style={{ color: '#000', fontWeight: 'bold' }}>Login</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;



