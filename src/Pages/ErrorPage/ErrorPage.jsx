import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt=""  className='w-full  p-20'/>
  <div className="hero-content text-center text-neutral-content">
  <Link className='p-5' to='/'><button className="btn btn-success text-white m-2">back to home</button></Link>
  </div>
</div>
        
    );
};

export default ErrorPage;