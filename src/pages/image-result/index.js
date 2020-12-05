import React, {useEffect, useState} from 'react';
import ImageResultHeader from '../../components/image-result/image-header'
import { Row, Col } from 'reactstrap';
import {Card, CardImg} from "reactstrap";
import {useLocation} from 'react-router-dom';


const ImageResult = () => {
  // const { state } = useLocation();
  // const [images, setImages] = useState([]);
  const [images, setImage] = useState([])
  useEffect(() => {
    const getImages =  JSON.parse(localStorage.getItem("images"));
    console.log(getImages)
    setImage(getImages)
  }, [])
  // useEffect(() => {
    
  //   const getImages =  JSON.parse(localStorage.getItem("images"));
  //   console.log(getImages)
  //   setImages(getImages)
  //   // console.log(images);
  // }, [])
 
  // let imageListContent;
  // const {images} = state;
  // console.log(images);


  // if(images){
  //     imageListContent = (
  //       <Row>
  //         {images.map(image => (
  //            <Col lg="3">
  //               <img src={image.largeImageUrl} alt="api-images"></img>
  //            </Col>
  //         ))} 
  //       </Row>
  //     )
  // } else{
  //   imageListContent = null
  // }
  return (
    <>
       <ImageResultHeader/>
      {/* {imageListContent} */}
          <Row>
    <Col md={{size:10,offset:1}} className="thumbnail-gallery">
    <Row>
          {images.map(image => (
             <Col
             md="3"
             className="my-2"
             key={image.id} >
             <Card  className="image-card overflow-hidden">
               <CardImg src={image.largeImageURL} />

             </Card>
           </Col>
           ))} 
        </Row>
    </Col>
    </Row>
       
    </>
  );
}


export default ImageResult;
