import React, { useEffect } from "react";
import "./Offers.css";
import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";

import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

import img from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";


const Offer = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "PQ",
    location: "PQ1",
    price: "$7, 452",
  },
  {
    id: 2,
    imgSrc: img,
    destTitle: "PQ",
    location: "PQ2",
    price: "$7, 452",
  },
  {
    id: 3,
    imgSrc: img,
    destTitle: "PQ",
    location: "PQ3",
    price: "$7, 452",
  },
  {
    id: 4,
    imgSrc: img,
    destTitle: "PQ",
    location: "PQ4",
    price: "$7, 452",
  },
];

const Offers = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historycal citirs to natural specteculars, come se the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {Offer.map((item, index) => (
            <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer" key={index}>
              <div className="desImage">
                <img src={item.imgSrc} alt="Image Name" />

                <span className="discount">30% Off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>{item.price}</h4>
                  <span className="status">For Rent</span>
                </div>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>1 Bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>

                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>{item.location}</small>
                </div>

                <button className="btn flex">
                  View Details
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
