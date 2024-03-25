import React from 'react'
import About from './Components/About/About'
import Faculty from './Components/Faculty/Faculty'
import Gallery from './Components/Gallery/Gallery'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle={'About Us'} title={'Our Mission and Vision'}/>
        <About/>
        <Title subTitle={'Faculty'} title={'Know About our Faculty'}/>
      <Faculty />
      <Title subTitle={'Gallery'} title={'Discover Our Captured Moments'}/>
      <Gallery/>
      </div>
    </div>
  )
}

export default App
