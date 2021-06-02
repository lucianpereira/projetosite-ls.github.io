import React from "react";
import "./index.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";

function NavbarMovie() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar">
        <Navbar.Brand className="navbarTitle" href="#home"><RiMovie2Line className="navbar-icon" /> ResumOOW!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="linkNavbar" href="/">Home</Nav.Link>
          <Nav.Link className="linkNavbar" href="/releases">Últimos Lançamentos</Nav.Link>
          <Nav.Link className="linkNavbar" href="/contact">Contato</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
          <Button variant="outline-primary"><BiSearch /></Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavbarMovie;
