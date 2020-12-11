import React from 'react';
import ImageResultHeader from '../../components/image-result/image-header'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {CardImg} from "reactstrap";
import {useLocation} from 'react-router-dom';
import image from '../../assets/images/404-error-3060993_1280.png'

const ImageResult = () => {
  const { state } = useLocation();
  const {images} = state;

  /////////////////////{render images here}///////////////////////////////////////////
  const renderImages = () => {
    if(images.length > 0){
      return(
        <div className="pt-2 pl-3 pr-3 mt-4">
       <ResponsiveMasonry  
         columnsCountBreakPoints={{350: 2, 750: 2, 900: 4}}>
          
                <Masonry>
                  {
                    images.map((image, index) => (
                    <CardImg key={index} className="p-1 d-block" src={image.largeImageURL} />
                    ))
                  }
                </Masonry>
               
        </ResponsiveMasonry>
      </div>
      )

    } else {
        return (
          <div  className="mt4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <img alt="oops" style={{ height:300, width: 300, marginTop: 150}} src={image}/> <br/>
           <div className="text-center text-danger pl-1 pr-1" style={{fontSize: 25}}> 
           Unable to get images you searched for! Please try again...</div>
          </div>
          )
    }

  }

  return (
    <>
       <ImageResultHeader/>
       {renderImages()}
    </>
  );
}


export default ImageResult;
