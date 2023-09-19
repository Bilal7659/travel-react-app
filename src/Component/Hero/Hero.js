import React from 'react'
import './Hero.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='hero'>
       <video autoPlay loop muted id='video'>
         <source loading='lazy' src='./Images/beaupak.mp4' />
       </video>
       <div className="overlay"></div>
       <div className="content" >
        <h1 data-aos="fade-left">First class Travel</h1>
        <h2 data-aos="fade-right">Top 1% Location All over <span className='pak'>Pakistan</span></h2>
        <form className='first-form' data-aos="fade-up">
            <div>
                <input type="text" name="" id="" placeholder='Search Your Favurite Destination' />
            </div>
            {/* <div>
                 <button><BiSearch className='icon'/></button>
            </div> */}
        </form>
       </div>
    </div>
  )
}

export default Hero
