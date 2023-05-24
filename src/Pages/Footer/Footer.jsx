import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='nun bg-purple-200'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5'>
        <div>
            <div>
                <div className='flex'>
                    <img src="logo.jpg" alt="logo" className='w-6'/>
                    <p className='text-bold text-2xl'>ToyLand</p>
                </div>
                <p className='text-sm p-2'>Toy Land is a vibrant website offering a wide range of toys, games, and accessories. </p>
            </div>
            <div>
                <p className='p-2'>Brooklyn,New York</p>
                <p className='p-2'>+01234567890</p>
                <p className='p-2'>example@example.com</p>
            </div>
        </div>

        <div>
           <p className='text-bold text-2xl'>Company</p>
           <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/" >Home</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">About</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/blogs">Blogs</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/addatoy">Add A Toy</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/alltoys">All Toys</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/mytoys">My Toys</a></p> 
        </div>

        <div>
           <p className='text-bold text-2xl'>Services</p>
           <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">Order tracking</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">WishList</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/signin">Signin</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">My account</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">Terms & Conditions</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">Promotional Offers</a></p> 
        </div>

        <div className='transition duration-150 ease-in-out'>
           <p className='text-bold text-2xl'>Customer Care</p>
           <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/signin">Signin</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">WishList</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/signin">Order Tracking</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">My account</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">FAQ</a></p>
            <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"><a href="/">Contact us</a></p> 
        </div>

        <div>
        <p className='text-bold text-2xl'>Customer Care</p>
        <p className='text-sm p-2'>Subscribe to our weekly Newwsletter and receive updates via email.</p>
        <input type="email" placeholder="email@example.com" className="input input-bordered w-full max-w-xs m-2"/>
        <button className="btn btn-success text-white m-2">Subscribe</button>
        </div>
    </div>

    <div className='bg-purple-900 text-white flex p-5'>
            <div >
             <p >All Rights Reserved @ ToyLand 2023</p>
            </div>
            <div>
             <p>Terms & Conditions  <span className='pl-5'>Claim</span>  <span className='pl-5'>Privacy & Policy</span></p>
            </div>
    </div>
    </div>

    );
};

export default Footer;






