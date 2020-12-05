import React, { useState } from 'react';
import SearchInput from '../../components/home-background/search_input'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';

const ImageResultHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      {/* Header goes here */}
        <head>
        <title>Pik a pic</title>
        <link rel="icon" href="/logo_transparent.png"/>
        </head>
        {/* Navbar goes here */}
      <Navbar className="ml-3 mr-2 w-100" style={{backgroundColor: '#D3D3D3', height: '65px'}} light expand="md">

        <NavbarBrand href="/">
            <img style={{width: 180, height: 150}} src="/logo_transparent.png" alt="header logo"/>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
              <div style={{marginTop: '100px !important'}}> 
                <SearchInput style={{marginLeft: '100px !important'}} />
              </div>
          </Nav>

          <NavbarText className="btn btn-dark btn-m text-white">Get more</NavbarText>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default ImageResultHeader