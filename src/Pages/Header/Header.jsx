import { Carousel } from 'flowbite-react';
import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10 ">
    <Carousel >
      <img
        src="https://rare-gallery.com/uploads/posts/105503-cars-3-4k-lightning-mcqueen-poster.jpg"
        alt="..."
      /> 
      <img
        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1223&q=80"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="..."
      />
    </Carousel >
  </div>
        </>      
    );
};

export default Header;

