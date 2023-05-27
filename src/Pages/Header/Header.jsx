import { Carousel } from 'flowbite-react';
import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96  ">
    <Carousel >
      <img
        src="https://wallpaperaccess.com/full/3715894.jpg"
        alt="..."
      /> 
      <img
        src="https://getwallpapers.com/wallpaper/full/5/2/c/848983-funny-car-wallpaper-1920x1200-for-1080p.jpg"
        alt="..."
      />
      <img
        src="https://wallpaperaccess.com/full/470201.jpg"
        alt="..."
      />
      <img
        src="https://i.pinimg.com/originals/b1/ce/74/b1ce74343cc8f445caca5faca6949d94.jpg"
        alt="..."
      />
      <img
        src="https://wallpaperaccess.com/full/1303289.jpg"
        alt="..."
      />
    </Carousel >
  </div>
        </>      
    );
};

export default Header;

