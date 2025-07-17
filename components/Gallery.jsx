import React from 'react';
import Carousel from './Carousel';

const GalleryText=()=>{
    return(
        <h2 className="section-title gallery" id='gallery'>Our Gallery</h2>
    )
  }

function Gallery() {
    return(
        <>
          <GalleryText/>
          <Carousel/>
        </>
    )
}

export default Gallery;