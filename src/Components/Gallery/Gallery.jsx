import React from 'react'
import './Gallery.css'
import gal_1 from '../../assets/photo1.jpeg'
import gal_2 from '../../assets/photo2.jpeg'
import gal_3 from '../../assets/photo3.jpeg'
import gal_4 from '../../assets/photo4.jpeg'
import gal_5 from '../../assets/photo5.jpeg'
import gal_6 from '../../assets/photo6.jpeg'
import gal_7 from '../../assets/photo7.jpeg'
import gal_8 from '../../assets/photo8.jpg'

const Gallery = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
        <img src={gal_1} alt="" />
        <img src={gal_2} alt="" />
        <img src={gal_3} alt="" />
        <img src={gal_4} alt="" />
        <img src={gal_5} alt="" />
        <img src={gal_6} alt="" />
        <img src={gal_7} alt="" />
        <img src={gal_8} alt="" />

        </div>
    </div>
  )
}

export default Gallery