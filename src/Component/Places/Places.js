import React, {useEffect} from 'react'
import Aos from 'aos'
import './Places.css'
const Places = () => {
  useEffect(() => {
Aos.init();
  }, [])

  return (
      <div id="destination" className="places">
        <div className="wrapper" data-aos="fade-left">
            <h1>All-InClosive Resorts</h1>
            <p style={{marginTop:'1rem'}}>On the Caribation's Best Beaches</p>
        </div>
        <div className="main-image">
            <div className="image1" data-aos="zoom-out">
          <img loading='lazy' src='./Images/borabora.jpg' alt="" />
            </div>
            <div className="image1">
               <div className="image2" data-aos="zoom-out">
          <img loading='lazy' src='./Images/borabora2.jpg' alt="" />
          <img loading='lazy' src='./Images/maldives.jpg' alt="" />
          <img loading='lazy' src='./Images/maldives2.jpg' alt="" />
          <img loading='lazy' src='./Images/maldives3.jpg' alt="" />
          </div>
            </div>
         
        </div>
        </div>
  )
}

export default Places
