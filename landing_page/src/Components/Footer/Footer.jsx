import  React, { useEffect } from 'react'
import './Footer.css'

import {SiYourtraveldottv} from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
       <section className="footer section">
        <div className="setContainer container grid">
            <div className="logoDiv">
                <div data-aos="fade-up" data-aos-duration="2000"  className="footerLogo">
                    <a href=""className="logo flex">
                        <h1 className="flex">
                            <SiYourtraveldottv className="icon"/>Dot
                        </h1>
                    </a>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000"  className="socials flex">
                <ImFacebook className="icon"/>
                <BsTwitter className="icon"/>
                <AiFillInstagram className="icon"/>
            </div>
            </div>

            

            <div data-aos="fade-up" data-aos-duration="3000"  className="footerLinks">
                <span className="linkTitle">Information</span>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Explore</a>
                </li>
                <li>
                    <a href="">Travel</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000"  className="footerLinks">
                <span className="linkTitle">Helpful Links</span>
                <li>
                    <a href="">Destination</a>
                </li>
                <li>
                    <a href="">Supports</a>
                </li>
                <li>
                    <a href="">Travel & Conditions</a>
                </li>
                <li>
                    <a href="">Privacy</a>
                </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000"  className="footerLinks">
                <span className="linkTitle">Contact us</span>
                <span className="phone"> 0388004519</span>
                <span className="email"> nkocbabi@gmail.com</span>
            </div>
        </div>
       </section>
    )
}

export default Footer;