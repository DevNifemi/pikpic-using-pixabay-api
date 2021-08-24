import React from "react";
import { CardImg } from "reactstrap";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Link } from "react-router-dom";



class ReactstrapImageGallery extends React.Component{
  render(){
  const images = this.props.images

  return( 
    <div className="pt-2 pl-3 pr-3">
      <ResponsiveMasonry  
        columnsCountBreakPoints={{350: 2, 750: 2, 900: 4}}>
          
                <Masonry>
                  {
                    images.map((image, index) => (
                    <Link key={index} to={{pathname: `/photo/${image.largeImageURL.substr(24)}`}}>
                    <CardImg className="p-1 d-block" src={image.largeImageURL} />
                    </Link>
                    ))
                  }
                </Masonry>
              
            </ResponsiveMasonry>
    </div>

)
  }
}

export default ReactstrapImageGallery;