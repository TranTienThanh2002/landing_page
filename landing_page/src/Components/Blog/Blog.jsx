import React, { useEffect } from "react";

import "./Blog.css";

import { BsArrowRightShort } from "react-icons/bs";

//image
import img1 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";
import img2 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";
import img3 from "../../Assets/anh-phong-canh-hung-vy-nui-va-song-820x513.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: "Beauty Phu Quy",
    desc: "Maiores culpa molestiae, auctor aliquip! Ratione sem nostrum nunc aliqua viverra ullam dolore corrupti integer, hendrerit massa quod, egestas exercitationem egestas.",
  },
  {
    id: 2,
    postImage: img1,
    title: "Beauty Phu Quy",
    desc: "Maiores culpa molestiae, auctor aliquip! Ratione sem nostrum nunc aliqua viverra ullam dolore corrupti integer, hendrerit massa quod, egestas exercitationem egestas.",
  },
  {
    id: 3,
    postImage: img1,
    title: "Beauty Phu Quy",
    desc: "Maiores culpa molestiae, auctor aliquip! Ratione sem nostrum nunc aliqua viverra ullam dolore corrupti integer, hendrerit massa quod, egestas exercitationem egestas.",
  },
  {
    id: 4,
    postImage: img1,
    title: "Beauty Phu Quy",
    desc: "Maiores culpa molestiae, auctor aliquip! Ratione sem nostrum nunc aliqua viverra ullam dolore corrupti integer, hendrerit massa quod, egestas exercitationem egestas.",
  },
];
const Blog = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
},[])
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000"  className="secTitle">Our Best Blog?</h2>
          <p data-aos="fade-up" data-aos-duration="2000" >An insight to the incredible experience in the world.</p>
        </div>

        <div className="mainContainer grid">
          {Posts.map((item, index) => {
            return (
              <div data-aos="fade-up" data-aos-duration="2000"  className="singlePost grid" key={index}>
                <div className="imgDiv">
                  <img src={item.postImage} alt="Image Name" />
                </div>
                <div   className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">{item.title}</h3>
                  <p data-aos="fade-up" data-aos-duration="4000">{item.desc} </p>
                </div>
                <a href="" className="flex" data-aos="fade-up" data-aos-duration="4500">
                  Read More
                  <BsArrowRightShort className="icon" />

                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
