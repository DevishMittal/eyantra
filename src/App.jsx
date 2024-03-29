import React, { useState } from 'react'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import Ongoing from './Components/Ongoing/Ongoing'
import Contact from './Components/Contact/Contact'
import Teacher from './Components/Teacher/Teacher'
// import Slider from './Components/Gallery/Gallery'
// import Carousel from './Components/Gallery/Carousel'
import { slides, slides2 } from './data/carouselData.json'
import { Carousel } from "./Components/Gallery/Carousel";
// import Gallery1 from './Components/Gallery/Gallery'
// import Faculty from './Components/Faculty/Faculty'
// import Gallery, { SecondSectionWithImage } from './Components/Gallery/Gallery'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle={'About Us'} title={'Our Mission and Vision'}/>
        <About/>
        <Title subTitle={'Ongoing Projects'} title={'Empowering Innovation Through Technology'}/>
        <Ongoing/>
         <Title subTitle={'Gallery'} title={'Discover Our Captured Moments'}/>
         <Title  title={'MOU-CDAC'}/>
         {/* <Slider images={images} title="Automatic Image Slider" /> */}
         <Carousel data={slides}/> 
         <Title  title={'Outreach Program'}/>
         <Carousel data={slides2}/>
        <Title subTitle={'Faculty'} title={'Know About our Faculty'}/>
        <Teacher />
      <Title subTitle={'Contact Us'} title={'Get in Touch'}/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
