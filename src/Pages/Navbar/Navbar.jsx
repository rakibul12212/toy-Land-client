import './Navbar.css'

import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="logo.jpg" alt="logo" className='w-6'/>
    <a className="btn btn-ghost normal-case text-xl">ToyLand</a>
  </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>All Toys</a></li>
      <li><a>My Toys</a></li>
      <li><a>Add A Toy</a></li>
      <li><a>Blogs</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;