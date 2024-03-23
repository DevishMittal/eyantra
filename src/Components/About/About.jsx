import React from 'react'
import whatPhoto1 from '../../assets/Group.jpg'
import whatPhoto2 from '../../assets/Quiz.jpg'
import './About.css'
const Programs = () => {
  return (
    <div className='about'>
        <h1>About Us</h1>
        <h3>Our Mission and Vision</h3>
        
        <div className='mission'>
          <div className='mission-text'>
            <h2>Mission</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
            <div className='image'>
              <img src={whatPhoto1} alt="" />
              </div>
        </div>
        <div className='mission'>
        <div className='image'>
              <img src={whatPhoto2} alt="" />
              </div>
          <div className='mission-text'>
            <h2>Vision</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
 
        </div>
    </div>
  )
}

export default Programs
