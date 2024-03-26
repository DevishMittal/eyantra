// import React from 'react'
// import './Gallery.css'
// import gal_1 from '../../assets/photo1.jpeg'
// import gal_2 from '../../assets/photo2.jpeg'
// import gal_3 from '../../assets/photo3.jpeg'
// import gal_4 from '../../assets/photo4.jpeg'
// import gal_5 from '../../assets/photo5.jpeg'
// import gal_6 from '../../assets/photo6.jpeg'
// import gal_7 from '../../assets/photo7.jpeg'
// import gal_8 from '../../assets/photo8.jpg'

// const Gallery = () => {
//   return (
//     <div className='campus'>
//         <div className='gallery'>
//         <img src={gal_1} alt="" />
//         <img src={gal_2} alt="" />
//         <img src={gal_3} alt="" />
//         <img src={gal_4} alt="" />
//         <img src={gal_5} alt="" />
//         <img src={gal_6} alt="" />
//         <img src={gal_7} alt="" />
//         <img src={gal_8} alt="" />

//         </div>
//     </div>
//   )
// }

// export default Gallery
import React, { useState } from 'react';
import './Gallery.css'; // Import CSS file for styling
import gal_1 from '../../assets/photo6.jpeg'
import gal_2 from '../../assets/mou-collage.jpg'
import gal_3 from '../../assets/Introduction to Office tools.jpeg'
import gal_4 from '../../assets/outreach-collage.jpg'

const Gallery1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="section-with-image" onClick={handleClick}>
      <div className="image-container">
        <img src={gal_1} alt="Background" />
        <div className="overlay2"></div> {/* Gradient overlay */}
        <div className="content">
          <h3>MOU-CDAC</h3> {/* Text above the image */}
        </div>
      </div>
      {isOpen && (
        <div className="image-gallery">
          <img src={gal_2} alt="" />
        </div>
      )}
    </section>
    

    
  );
};

export default Gallery1;

export const SecondSectionWithImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="section-with-image" onClick={handleClick}>
      <div className="image-container">
        <img src={gal_3} alt="Background" />
        <div className="overlay2"></div> {/* Gradient overlay */}
        <div className="content">
          <h3>Outreach Program</h3> {/* Text above the image */}
        </div>
      </div>
      {isOpen && (
        <div className="image-gallery">
        <img src={gal_4} alt="" />
        </div>
      )}
    </section>
  );
};

