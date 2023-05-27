/* eslint-disable react/prop-types */

import { Rating } from '@mui/material';

import "./ShowItems.css"
import { Card } from 'flowbite-react';
     

const ShowItems = ({item}) => {
  
   const {img, name,rating,price }=item;
    return (
        

      <div className="max-w-sm ">
      <Card>
        <img className="h-52 w-72 rounded " src={img} alt="Meaningful alt text for an image that is not purely decorative" />
        
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="flex items-center">
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
          </span>
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </Card>
    </div>


    );
};

export default ShowItems;