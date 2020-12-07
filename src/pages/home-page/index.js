import React, { Component } from 'react';
import Header from '../../components/header/header';
import HomeBackground from '../../components/home-background';
import HomepageGallery from '../../components/homepage-image-gallery/index';
import { Link } from "react-router-dom";
import {  Container } from 'reactstrap';

class HomePage extends Component {
    render() { 
        return (
            <div>     
    <Header/>
      <HomeBackground/>
      <HomepageGallery/>
      <div className="mb-2">
        <Link to="/image-result">
          <button href="/image-result" className='button'>     
            Discover More
          </button>
        </Link>
        </div>
        
          <div>
            <h1 className="text-dark mb-4" style={{textAlign: 'center', marginTop: 100, fontWeight: 'lighter'}}>Free images and illustrations you can use anywhere</h1>
            <Container>
                <p className="text-dark" style={{fontSize: 18,textAlign: 'center', marginBottom: 80, lineHeight: 1.6, fontWeight: 'light'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
             </Container>

          </div>
          </div>
          );
    }
}
 
export default HomePage;