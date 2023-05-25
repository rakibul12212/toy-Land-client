import React, { useEffect, useState } from 'react';
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
      <div >
        <h2 className='p-10 text-bold text-3xl bg-purple-50 mt-10'>Shopping List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2">
          {itemsToShow.map(item => (
            <div key={item.id} className="card h-82 w-72 p-5 bg-base-100 shadow-xl">
              <figure>
                <img src={item.img} alt='' className="w-full h-auto" />
              </figure>
              <div className="card-body p-4">
                <p className="mb-2"><span className='text-bold'>Product Price:</span> {item.price}$</p>
                <p className="mb-2"><span className='text-bold'>Product Name:</span> {item.name}</p>
                <p className="mb-2"><span className='text-bold'>Product Rating:</span> {item.rating}</p>
                <div className="card-actions flex justify-end">
                  <button className="btn btn-success bg-purple-300 hover:bg-purple-700 text-white">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAllItems && (
          <div className=" justify-end">
            <button className="btn btn-success bg-purple-300 hover:bg-purple-700 text-white m-5 " onClick={handleSeeAllClick}>
            See All
          </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingItems;
