import React, { useState } from 'react';
// import styles from './header.module.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>

      {/* Header goes here */}
            <title>Pik a pic</title>
            <link rel="icon" href="/logo_transparent.png" style={{height: 500, width: 300}}/>
            <div>
      <Navbar  color="light" light expand="md">
        <NavbarBrand style={{ height: '50px'}} className="mr-4" href="/">
            <img style={{width: 100, height: 100, marginTop: '-30px'}} src="/logo_transparent.png" alt="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Images</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Photos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Illustration</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText className="btn btn-dark btn-m text-white">Get more</NavbarText>
        </Collapse>
      </Navbar>
    </div>
 
        
    </React.Fragment>
  );
}

export default Header