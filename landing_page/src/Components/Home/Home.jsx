import  React, {useEffect} from 'react'
import './Home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 data-aos="fade-up" className="title">
                        Plan Your Trip With Travel Dot
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                        Travel to your favourite city with respecful of the environment!
                    </p>

                    <button className="btn" data-aos="fade-up" data-aos-duration="3000" >
                        <a href="">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <div data-aos="fade-right" data-aos-duration="2000"  className="locationDiv">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder='Dream Destination' />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="disDiv">
                        <label htmlFor="distance">Distance</label>
                        <input type="text" placeholder='11/Meters' />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
                        <label htmlFor="price">Price</label>
                        <input type="text" placeholder='$140-500' />
                    </div>

                    <button className="btn">
                        Search
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home;