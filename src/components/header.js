import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      {/* Header goes here */}
            <title>Pik a pic</title>
            <link rel="icon" href="/logo_transparent.png" style={{height: 300}}/>

        {/* Navbar goes here */}
      <Navbar className="ml-3 mr-2" style={{backgroundColor: '#FFFFFF', height: '65px'}} light expand="md">

        <NavbarBrand href="/">
            <img style={{width: 180, height: 150}} src="/logo.png" alt="logo"/>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color: 'black !important'}} 
                className="pr-4" href="#">Photos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="pr-4" href="#">Images</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="pr-4" href="#">Images</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="p-2" href="#">Images</NavLink>
            </NavItem>       
          </Nav>

          <NavbarText className="btn btn-dark btn-m text-white">Get more</NavbarText>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default Header