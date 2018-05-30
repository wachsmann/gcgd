import React from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
 
export class MainNavbar extends React.Component {
  render() {
    return (
         <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="/home">Corgis</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/login">
          Login
        
          </NavItem>
          <NavItem eventKey={2} href="/cadastro">
          Cadastro
          </NavItem>
   
        </Nav>
      </Navbar>
    );
  }
}