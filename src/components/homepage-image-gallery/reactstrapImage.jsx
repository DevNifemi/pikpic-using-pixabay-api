import React from "react";
import {
  Col,
  Row,
  Card,
  CardImgOverlay,
  CardImg,
} from "reactstrap";


class ReactstrapImageGallery extends React.Component{
 
  render(){
  const images = this.props.images

  return( 
    <Row>
      <Col md={{size:10,offset:1}} className="thumbnail-gallery">
        <Row>
            {images.map((image, index) => (
                <Col
                  md="3"
                  className="my-2"
                  key={index}
                  onClick={() => this.showModalImage(index)}
                >
                  <Card className="image-card overflow-hidden">
                    <CardImg src={image.largeImageURL} />
                      <CardImgOverlay className="hover:overlay">
                          <i className="bx bx-heart solid white"></i>
                      </CardImgOverlay>
                  </Card>
                </Col>
            ))}

          </Row>
      </Col>
    </Row>
  )
  }
}

export default ReactstrapImageGallery;