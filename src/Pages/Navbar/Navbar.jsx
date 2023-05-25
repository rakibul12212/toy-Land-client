import './Navbar.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>


<nav className="bg-slate-300 border-gray-200 dark:bg-gray-900 sticky z-100 top-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/" className="flex items-start">
      <img src="/public/logo.jpg" className="h-8 mr-3" alt="toyland Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToyLand</span>
  </Link>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="/home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="alltoys" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">All Toys</Link>
      </li>
      <li>
        <Link to="/addatoy" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add A Toy</Link>
      </li>
      <li>
        <Link to="/mytoys" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Toys</Link>
      </li>
      <li>
        <Link to="/blogs" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
      </li>
      <li>
        <Link to="/aboutus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
      </li>
      <li>
        <Link to="/contactus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>




       {/* <div className='sticky z-50 top-0'>
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
       </div> */}
        </>
    );
};

export default Navbar;





