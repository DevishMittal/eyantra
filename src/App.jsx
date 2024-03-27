import React from 'react'
import About from './Components/About/About'
// import Faculty from './Components/Faculty/Faculty'
import Gallery, { SecondSectionWithImage } from './Components/Gallery/Gallery'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import Ongoing from './Components/Ongoing/Ongoing'
import Contact from './Components/Contact/Contact'
import Gallery1 from './Components/Gallery/Gallery'
import Teacher from './Components/Teacher/Teacher'




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
      <Gallery1/>
      <SecondSectionWithImage/>
        <Title subTitle={'Faculty'} title={'Know About our Faculty'}/>
        <Teacher />
      {/* <Faculty /> */}
      <Title subTitle={'Contact Us'} title={'Get in Touch'}/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
