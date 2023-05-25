import './Navbar.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
       <div>
       <div className="navbar bg-purple-700 text-white ">
                  <div className="flex-1">
                    <img src="logo.jpg" alt="logo" className='w-6'/>
                    <Link to="/"><p className='text-bold text-2xl'>ToyLand</p></Link>
                  </div>
              <div>

                  <div className="flex-none">
                     <ul className="hidden md:flex gap-8">
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/home"><a>Home</a></Link></li>
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/alltoys"><a>All Toys</a></Link></li>
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/addatoy"><a>Add A Toy</a></Link></li>
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/mytoys"><a>My Toys</a></Link></li>
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/blogs"><a>Blogs</a></Link></li>
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/aboutus"><a>About us</a></Link></li>
                        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><Link to="/contactus"><a>Contact Us</a></Link></li>
                      </ul>
                </div>
            </div>

    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

  <div className="flex-nonehidden md:flex">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>

      </label>
         <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
             <div className="card-body">
               <span className="font-bold text-lg">8 Items</span>
               <span className="text-info">Subtotal: $999</span>
               <div className="card-actions">
                 <button className="btn btn-primary btn-block">View cart</button>
               </div>
             </div>
           </div>
        </div>

    <div className="dropdown dropdown-end">
      
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://www.rri.res.in/sites/default/files/2022-09/Abhisek%20Tamang.jpg" />
        </div>
      </label>

      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>

    </div>
  </div>
</div>
       </div>
        </>
    );
};

export default Navbar;





