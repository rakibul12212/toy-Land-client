import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewDetails.css'

const ViewDetails = () => {
    const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/toys");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
    return (
        <div>
            
            {items.map((item) => (
  <Link key={item.id} to=" " className="p-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.img} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{item.name}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-bold'>Review</span> :{item.review}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-bold'>Description</span> :{item.long_description}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-bold'>Seller Name</span> :{item.seller}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-bold'>Seller Email</span> :{item.email}</p>
      <Link to="/cart" className="btn bg-slate-500 hover:bg-slate-700 text-white">Add to cart</Link>
    </div>
  </Link>
))}

        </div>
    );
};

export default ViewDetails;