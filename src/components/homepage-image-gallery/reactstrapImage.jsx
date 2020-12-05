import React from "react";
import {
  Col,
  Row,
  Card,
  CardImgOverlay,
  CardImg,
} from "reactstrap";

// import ImageCarousel from "./imageCarousel";

class ReactstrapImageGallery extends React.Component{
  contructor(){
    // super(props);
    this.state={
      // isModalOpen:false, // state for the modal popup
      images:[], // images array we receive from the parent
      imagesToShow:0, // limit 
      // currentIndex:0 // used for the carousel
    }
  }
  static getDerivedStateFromProps(props){
    const {images,limit} = props;
    const imagesToShow = props.hasOwnProperty("limit") ? limit : 64;
    return {images, imagesToShow};
  }
// for toggling the modal state
  // toggleModal = () => {
  //   this.setState({
  //     isModalOpen:!this.state.isModalOpen
  //   })
  // }

// used to set the current index of the carousel
// showModalImage = imageId => {
//   this.toggleModal();
//   this.setState({
//     currentIndex:imageId
//   })
// }


  render(){
    const {images,imagesToShow} = this.state;
    const tempImagesArray = images.slice(0,imagesToShow); //temporary array
    const hasMore = images.length !== 0 ? images.length - imagesToShow : 0;
    console.log(this.state.images)
    return <div>
    <Row>
    <Col md={{size:10,offset:1}} className="thumbnail-gallery">
<Row>
    {tempImagesArray.map((image, index) => (
            <Col
              md="3"
              className="my-2"
              key={index}
              onClick={() => this.showModalImage(index)}
            >
              <Card className="image-card overflow-hidden">
                <CardImg src={image.largeImageURL} />
                {hasMore !== 0 && index === imagesToShow - 1 ? (
                  <CardImgOverlay className="overlay">
                    <h2 className="mb-0">{hasMore}</h2>
                    <small> More </small>
                  </CardImgOverlay>
                 ) : null} 
              </Card>
            </Col>
          ))}
    </Row>
    </Col>
    </Row>

    
    </div>;
  }
}

export default ReactstrapImageGallery;