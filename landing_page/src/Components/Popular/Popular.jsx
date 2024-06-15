import React, { useEffect } from "react";
import "./Popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

import img from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";
import img1 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";

import img2 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";

import img3 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "123",
    location: "PHU QUY",
    grade: "PQ",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "123",
    location: "PHU QUY1",
    grade: "PQ",
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: "123",
    location: "PHU QUY2",
    grade: "PQ",
  },
  {
    id: 4,
    imgSrc: img1,
    destTitle: "123",
    location: "PHU QUY3",
    grade: "PQ",
  },
];

const Popular = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From history cites to natural specteculars, come see the best of
              the world!
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map((item, index) => (
            <div data-aos="fade-up" className="singleDestination" key={index}>
              <div className="destImage">
                <img src={item.imgSrc} alt="Image title" />

                <div className="overlayInfo">
                  <h3>Some text</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  <BsArrowRightShort className="icon" />
                </div>
              </div>

              <div className="desFooter">
                <div className="number">0{item.id}</div>

                <div className="desText flex">
                  <h6>{item.location}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className="icon" />
                    </span>
                    Dot
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
