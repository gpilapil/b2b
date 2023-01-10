import React from 'react';
import './NavMenu.scss';
import {Container, Nav, Navbar} from "react-bootstrap";

export default function NavMenu() {
  return (
    <header className='main-header'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="max-full-width block" alt="" src='/logo.png' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/counter">Counter</Nav.Link>
              <Nav.Link href="/fetch-data">Fetch Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
