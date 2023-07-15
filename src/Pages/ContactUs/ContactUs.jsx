import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './ContactUs.css'
const ContactUs = () => {
    useTitle('Contact Us')
    return (
        <>
        <div>
  <h1 className="text-bold text-4xl text-center p-10 bg-slate-100">Contact Us</h1>
</div>
             
<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10'>
<div className="w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">   
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3  shadow-lg p-5" src="https://cdn.shopify.com/s/files/1/0255/6526/6006/files/10_80x.png?v=1678979213" alt="icon img"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Email Address</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">info@webmail.com</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">jobs@webexample.com</span>        
    </div>   
</div>
<div className="w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">   
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3  shadow-lg p-5" src="https://cdn.shopify.com/s/files/1/0255/6526/6006/files/11_80x.png?v=1678979236" alt="icon img"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone Number</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">+0123-456789</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">+987-6543210</span>        
    </div>   
</div>
<div className="w-full max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">   
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3  shadow-lg p-5" src="https://cdn.shopify.com/s/files/1/0255/6526/6006/files/12_80x.png?v=1678979256" alt="icon img"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Office Address</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">18/A, New Born Town Hall</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">New York, US</span>        
    </div>   
</div>
</div>
    
</>

        
    );
};

export default ContactUs;