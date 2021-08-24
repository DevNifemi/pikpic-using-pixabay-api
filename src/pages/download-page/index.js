import React from 'react';
import Header from '../../components/header/header'

const DownloadPage = ({ match }) => {
    const imageUrl = match.params.id
 
  return (
    <div>
      <Header/>

        <div className='image-card'>
          <img className='download-image' src={`https://pixabay.com/get/${imageUrl}`} alt="clicked"/>
        </div>

        <h1>Welcome, Download image</h1>
        <p>PikPic We'll never ask for money or other stuffs for an image download bosses, Stay Jiggy and active!</p>


        <a className='btn btn-primary btn-large' href={`/get/${imageUrl}`} download rel="noopener noreferrer" target="_blank">
         Download Image
         </a>
    </div>
  );
}


export default DownloadPage;
