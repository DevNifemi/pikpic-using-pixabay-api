import React from 'react';
import ImageResultHeader from '../../components/image-result/image-header'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {CardImg} from "reactstrap";
import {useLocation} from 'react-router-dom';


const ImageResult = () => {
  const { state } = useLocation();

  const {images} = state;
  console.log('here',images, 'yeah');

  return (
    <>
       <ImageResultHeader/>
      {/* {imageListContent} */}

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
 
    </>
  );
}


export default ImageResult;
