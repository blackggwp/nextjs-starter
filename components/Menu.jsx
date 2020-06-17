import React from 'react'
import { useState } from 'react';
// import PinchZoomPan from "react-responsive-pinch-zoom-pan";
// import CustomNav from '../components/Navbars/CustomNav'

// import "react-image-gallery/styles/css/image-gallery.css";

// import ImageGallery from 'react-image-gallery';
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

const Menu = (props) => {
  const [currentPic, setCurrentPic] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const renderPic = (pic) => {
    return (
      <div key={pic.original}>
        <img src={pic.original} alt="img"
          onClick={() => {
            setIsOpen(true)
            setCurrentPic(pic.original)
          }}
        />
      </div>
    )
  }

  return (
    <div>
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={currentPic}
            onCloseRequest={() => setIsOpen(false)}
          />
        )}
      </div>
      {/* <img src="/images/normal/mn1.jpg" alt="Vercel Logo" className="logo" /> */}
      {/* {props.pic.map(pic => renderPic(pic))} */}
    </div>
  );
}
export default Menu
