import React from 'react'
import './FooterStyle.css'
import { AiFillFacebook, AiFillYoutube} from 'react-icons/ai'
import { BsTwitter, BsInstagram, BsTelephonePlusFill, BsFillEnvelopePaperFill, BsLinkedin} from 'react-icons/bs'
import {FaMapMarkerAlt, FaMapPin} from 'react-icons/fa'
import { useEffect } from 'react'
import Aos from 'aos'
const Footer = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <div>
        <footer className="footer-distributed">

<div className="footer-left" data-aos="fade-left">
    <h3>Pak<span>Visits</span><FaMapPin style={{color:'#FF0000'}}/></h3>

    <p className="footer-links">
        <a href="#">Home </a>
        |
        <a href="#">About </a>
        |
        <a href="#">Contact </a>
        |
        <a href="#">Blog</a>
    </p>

    <p className="footer-company-name">Copyright © 2021 <strong>PakVisits!</strong> All rights reserved</p>
</div>

<div className="footer-center" data-aos="fade-up">
    <div>
        <FaMapMarkerAlt style={{color:'whitesmoke'}}/> <p>Peshawar, Kpk</p>      
    </div>

    <div>
    <BsTelephonePlusFill style={{color:'whitesmoke',}}/>
    <a href="phone"><p>+91 74**9**258</p></a>
    </div>
    <div>
        <BsFillEnvelopePaperFill style={{color:'whitesmoke',margin:'3px'}}/>
        <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
    </div>
</div>
<div className="footer-right" data-aos="fade-right">
    <p className="footer-company-about">
        <span>About the company</span>
        <strong>PakVisits!</strong> is a tour base company with Pakvisit you can be able to 
        visit all the beautiful places of Pakistan.
    </p>
    <div className="footer-icons">
        <a href="#"><AiFillFacebook/></a>
        <a href="#"><AiFillYoutube/></a>
        <a href="#"><BsTwitter/></a>
        <a href="#"><BsInstagram/></a>
        <a href="#"><BsLinkedin/></a>
    </div>
</div>
</footer>
    </div>
  )
}

export default Footer
