import React, { Component } from 'react';
import axios from "axios";
import {apiUrl, apiKey} from '../../assets/helpers/constant'
import "bootstrap/dist/css/bootstrap.min.css";

import ReactstrapImageGallery from "./reactstrapImage";


export default class HomepageGallery extends Component {
  constructor() {
    super();
    this.state = {
      images:[],
      imagesOnPage: 32
    };
  }

  componentDidMount(){
      axios.get(`${apiUrl}/?key=${apiKey}&image_type=photo&per_page=${this.state.imagesOnPage}`)
      .then(response => this.setState({images:response.data.hits}));
  }

  render() {
    const {images} = this.state;
    return (
      <div className='mt-3'>
        <ReactstrapImageGallery images={images} />
      </div>
    );
  }
}
