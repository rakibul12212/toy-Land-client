import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1679942761529-05918e71b061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
  <Link className='p-5' to='/'><button className="btn btn-success text-white m-2">back to home</button></Link>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;