import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Faculty from './Components/Faculty/Faculty.jsx'
import Title from './Components/Title/Title.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='About Us' title='Our Mission and Vision'/>
        <About/>
        <Title subTitle='Faculty' title='Know About our Faculty'/>
      <Faculty />
      <Title subTitle='Gallery' title='Discover Our Captured Moments'/>
      <Gallery/>
      </div>
    </div>
  )
}

export default App
