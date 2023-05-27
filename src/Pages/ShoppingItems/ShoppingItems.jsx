import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './ShoppingItems.css';

const ShoppingItems = () => {
  const [items, setItems] = useState([]);
  const [showAllItems, setShowAllItems] = useState(false);
  const initialItemsToShow = 8;
  const maxItemsToShow = 20;

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleSeeAllClick = () => {
    setShowAllItems(true);
  };

  const itemsToShow = showAllItems ? items.slice(0, maxItemsToShow) : items.slice(0, initialItemsToShow);

  return (
    <>


<h2 className="p-10 font-bold text-3xl bg-slate-200 mt-10">Shopping List</h2>

<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
  <ul className="flex flex-wrap -mb-px">
  <li className="mr-2 mb-2 sm:mr-4">
      <p className="inline-block p-4 ps-10 border-b-2 border-transparent rounded-t-lg text-black text-bold text-xl">Catagory:</p>
    </li>
    <li className="mr-2 mb-2 sm:mr-4">
      <Link to="" className="inline-block p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Sports Car</Link>
    </li>
    <li className="mr-2 mb-2 sm:mr-4">
      <Link to="" className="inline-block p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Regular Car</Link>
    </li>
    <li className="mr-2 mb-2 sm:mr-4">
      <Link to="" className="inline-block p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Police Car</Link>
    </li>
    <li className="mr-2 mb-2 sm:mr-4">
      <Link to="" className="inline-block p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Truck</Link>
    </li>
    <li className="mb-2">
      <Link to="" className="inline-block p-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Mini Fire Truck</Link>
    </li>
  </ul>
</div>



<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2 bg-slate-50">

  {itemsToShow.map((item) => (
    <div key={item.id} className="card h-82 w-72 p-5 bg-base-100 shadow-xl">
      <div className="max-w-sm bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className=" h-48 w-64 rounded-t-lg p-5" src={item.img} alt="img" />
        </a>
        <div className="p-5">
          <p className="mb-3 text-gray-700 dark:text-gray-400">
          <span className='text-bold'>Name:</span> {item.name}
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
          <span className='text-bold'>Price:</span> {item.price}$
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
          <span className='text-bold'>Rating:</span> {item.rating}
          </p>
          <div className="card-actions flex justify-end">
                   <button className="btn bg-slate-500 hover:bg-slate-700 text-white">View Details</button>
                 </div>
        </div>
      </div>
    </div>
    
  ))}
</div>
      {!showAllItems && (
           <div className=" flex justify-center">
             <button className="btn bg-slate-500 hover:bg-slate-700 text-white m-5 " onClick={handleSeeAllClick}>
            See All
          </button>
           </div>
         )}
    
    </>
  );
};

export default ShoppingItems;
