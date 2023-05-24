import React from 'react';

const Feature = () => {
    return (
        <div className='p-10'>
            <div>
                <p className='text-bold text-3xl p-10 text-center '>Core Feature</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-2 bg-purple-100'>
            <div className=" bg-base-100 shadow-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                   <figure className="px-10 pt-10">
                      <img src="https://www.excelestore.com.bd/public/assets/img/excel_estore_free_delivery.png?v=2" alt="Shoes" className="rounded-xl" />
                    </figure>
                 <div className=" p-2 pt-5 text-left">
                       <h2 className="card-title">Free Delivary</h2>
                       <p>We offer a hassle-free shipping experience with no additional charges. Sit back and relax while we bring your orders to your doorstep, completely free of cost.</p>
                        
                 </div>
            </div>
            <div className=" bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                   <figure className="px-10 pt-10">
                      <img src="https://www.onlygfx.com/wp-content/uploads/2020/05/high-quality-stamp-4.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                 <div className="p-2  text-left">
                       <h2 className="card-title">Quality Product</h2>
                       <p> At our store, we prioritize excellence in every product we offer. From meticulous sourcing to rigorous quality control, we ensure that our customers receive nothing but the best.</p>
                        
                 </div>
            </div>
            <div className=" bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                   <figure className="px-10 pt-10">
                      <img src="https://zeevector.com/wp-content/uploads/Cashback-Logo-PNG@zeevector.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                 <div className="p-2  text-left">
                       <h2 className="card-title">100% Cash Back</h2>
                       <p>We believe in the value of your satisfaction, which is why we offer a 100% cash back guarantee on our products. If you're not completely satisfied with your purchase, we'll refund your entire purchase amount, no questions asked. </p>
                        
                 </div>
            </div>
            <div className=" bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                   <figure className="px-10 pt-10">
                      <img src="https://www.pearson.com/content/dam/global/shared/brand/pictograms/1600x800-pictogram-lime-green-online-meeting.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                 <div className="p-2  text-left">
                       <h2 className="card-title">24/7 Support</h2>
                       <p>Our dedicated support team is available round the clock to assist you with any queries or concerns you may have. Whether it's day or night, we're here to provide prompt and reliable support to ensure your satisfaction.</p>
                        
                 </div>
            </div>
            </div>
        </div>
    );
};

export default Feature;