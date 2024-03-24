import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Faculty from './Components/Faculty/Faculty'
import Title from './Components/Title/Title'
import Gallery from './Components/Gallery/Gallery'


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
