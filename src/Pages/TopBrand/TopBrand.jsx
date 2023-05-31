import React from 'react';
import './TopBrand.css'
import Marquee from "react-fast-marquee";

const TopBrand = () => {
  return (
    <>
      <div>
        <div className="text-bold text-3xl text-center">
          <h1 className="fw-bold">Top Brands</h1>
          
        </div>

        <div className="App p-10">
          
          <Marquee direction="right" speed={100} delay={5}>
            <div className="image_wrapper">
              <img src="/src/assets/img1.png" alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img2.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img3.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img4.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img5.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img6.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img7.png' alt="" />
            </div>
            
            <div className="image_wrapper">
              <img src='/src/assets/img8.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img9.png' alt="" />
            </div>
            <div className="image_wrapper">
              <img src='/src/assets/img10.png' alt="" />
            </div>
          
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default TopBrand;
