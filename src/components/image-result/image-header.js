import React, { useState } from 'react';
import SearchInput from '../../components/home-background/search_input'
import styles from './img-header.module.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavbarText } from 'reactstrap';

const ImageResultHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Header goes here */}
        <title>Image Results</title>
        <link rel="icon" href="/logo_transparent.png"/>

        {/* Navbar goes here */}
      <Navbar style={{backgroundColor: '#D3D3D3'}} light expand="md">

        <NavbarBrand style={{ height: '50px'}} className="mr-4" href="/">
            <img style={{width: 100, height: 100, marginTop: '-30px'}} src="/logo_transparent.png" alt="logo"/>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className={styles.nav} navbar>
                <SearchInput />
            </Nav>

            <NavbarText className={styles.button} >Get more</NavbarText>
          </Collapse>
      </Navbar>

    </div>
  );
}

export default ImageResultHeader