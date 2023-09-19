import React from 'react'
import './SelectStyle.css'
import { useEffect } from 'react'
import Aos from 'aos'
const Select = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    
    <div id="travel" className="select">
        <div className="first-div">
    <div className='main-div'>
      <img src="./Images/kashmir.jpg" alt="" data-aos="zoom-in-down" />
      <div className="caption">
        <p>Kashmir</p>
      </div>
    </div>

    <div className='main-div'>
      <img src="./Images/hunza.jpg" alt="" data-aos="zoom-in-down"/>
      <div className="caption">
        <p>Hunza</p>
      </div>
    </div>
    <div className='main-div'>
      <img src="./Images/malamjaba.jpg" alt="" data-aos="zoom-in-down"/>
      <div className="caption">
        <p>MalamJaba</p>
      </div>
    </div>
    <div className='main-div'>
      <img src="./Images/babsar top.jpg" alt="" data-aos="zoom-in-down"/>
      <div className="caption">
        <p>Babusar Top</p>
      </div>
    </div>
    <div className='main-div'>
      <img src="./Images/swat.jpg" alt="" data-aos="zoom-in-down"/>
      <div className="caption">
        <p>Swat</p>
      </div>
    </div>
    <div className='main-div'>
      <img src="./Images/Naran.jpg" alt="" data-aos="zoom-in-down"/>
      <div className="caption">
        <p>Naran</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Select
