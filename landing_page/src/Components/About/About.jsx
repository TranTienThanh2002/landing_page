import  React, { useEffect } from 'react'
import './About.css'

import img1 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";
import img2 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";
import img3 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'
const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <section className="about section">
            <div className="setContainer">
                <h2 data-aos="fade-up" data-aos-duration="2000" className="title">
                    Why Hiking?
                </h2>

                <div className="mainContent container grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
                        <img src={img1} alt="Image Name" />

                        <h3>100+ Mountains</h3>

                        <p>Research shows that a chance to break away from th normal rhythms of daily life reduces stress and improves health and well-being</p>

                    </div>
                    <div data-aos="fade-up" data-aos-duration="2500"  className="singleItem">
                        <img src={img2} alt="Image Name" />

                        <h3>1000+ Hiking</h3>

                        <p>Research shows that a chance to break away from th normal rhythms of daily life reduces stress and improves health and well-being</p>
                        
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000"  className="singleItem">
                        <img src={img3} alt="Image Name" />

                        <h3>2000+ Customer</h3>

                        <p>Research shows that a chance to break away from th normal rhythms of daily life reduces stress and improves health and well-being</p>
                        
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">
                        <div data-aos="fade-right" data-aos-duration="2000"  className="cardText">
                            <h2>Wonderful House experience nin there!</h2>
                            <p>The Adventure subranking is based on an equally weighted average of scores from five country</p>

                        </div>

                        <div data-aos="fade-left" data-aos-duration="2000"  className="cardVideo">
                            <video src="" autoPlay loop muted typeof='video/mp4'></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;