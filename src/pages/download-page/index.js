import React from 'react';
// import ImageResultHeader from '../image-result/index'
import Header from '../../components/header/header'
import {useLocation} from 'react-router-dom';

const DownloadPage = () => {
 const {image} = useLocation()
 
  return (
    <div>
      <Header/>
        {/* <ImageResultHeader/> */}
        <img src={image} alt="clicked"/>
        <h1>Welcome, Download here lorem Ips</h1>
    </div>
  );
}


export default DownloadPage;
