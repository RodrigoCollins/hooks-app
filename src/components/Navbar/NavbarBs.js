import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';



const NavBarBs = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src='./logo192.png' alt="logo" style={{ height: '60px', width: '60px' }} />
                    <Navbar.Brand href="#home">La Tiendita</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <h1></h1>
        </>
    )
}

export default NavBarBs
