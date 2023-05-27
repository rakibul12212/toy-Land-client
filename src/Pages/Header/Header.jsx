import { Carousel } from 'flowbite-react';
import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10 ">
    <Carousel >
      <img
        src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1507722661946-ec4abdfe6a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1510903117032-f1596c327647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1532578498858-e21a39e0a449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
    </Carousel >
  </div>
        </>      
    );
};

export default Header;

