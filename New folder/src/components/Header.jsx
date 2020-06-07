
import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";
function Header(){
    return (
        <div class="container">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Prem chandu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        
        </div>

    );
}
export default Header;