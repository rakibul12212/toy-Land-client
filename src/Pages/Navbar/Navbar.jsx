import './Navbar.css'

import React from 'react';

const Navbar = () => {
    return (
        <>
       <div>
       <div className="navbar bg-purple-900 text-white ">
                  <div className="flex-1">
                    <img src="logo.jpg" alt="logo" className='w-6'/>
                    <a className="btn btn-ghost normal-case text-xl">ToyLand</a>
                  </div>
              <div>

                  <div className="flex-none">
                     <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                             <ul className="p-2 bg-base-100">
                               <li><a>Regular Car</a></li>
                               <li><a>Sports Car</a></li>
                               <li><a>Police Car</a></li>
                               <li><a>Mini Fire Truck</a></li>
                             </ul>
                        </li>
                              <li><a>Add A Toy</a></li>
                              <li><a>My Toy</a></li>
                              <li><a>Blogs</a></li>
                      </ul>
                </div>
            </div>

    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

  <div className="flex-none">
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





