import React from 'react'
import './Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { BiSearch } from 'react-icons/bi'
AOS.init();
const Hero = () => {
  return (
    <div className='hero'>
       <video autoPlay loop muted id='video'>
         <source src='./Images/beaupak.mp4' />
       </video>
       <div className="overlay"></div>
       <div className="content" >
        <h1 data-aos="fade-up">First class Travel</h1>
        <h2 data-aos="fade-up">Top 1% Location All over <span className='pak'>Pakistan</span></h2>
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
