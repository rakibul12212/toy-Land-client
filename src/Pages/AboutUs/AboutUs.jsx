import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
           <div>
  <h1 className="text-bold text-4xl text-center p-10 bg-purple-50">Contact Us</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-4">
  <div>
    <img
      src="https://cdn.shopify.com/s/files/1/0627/7169/1734/t/22/assets/aa-contact-page-img.png?v=20416449947480147881661349752"
      alt=""
    />
  </div>
  <div>
    <h1 className="text-bold text-3xl">Your faithful partners for Goods</h1>
    <p className="p-2">
      Houzez allows you to design unlimited panels and real estate custom forms to capture leads and keep a record of all information.
    </p>
    <ul className="p-5">
      <li>Better security for customer's privacy and information.</li>
      <li>More products at lower prices.</li>
      <li>Connect customers with the power of eCommerce at all times.</li>
    </ul>
    <button className='p-2 bg-slate-300 text-sm hover:bg-purple-50 '>get support<br /><span className='text-bold'>+123-456-789-10</span></button>
  </div>
</div>

         </>   
    );
};

export default AboutUs;