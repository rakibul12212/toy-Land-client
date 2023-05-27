/* eslint-disable react/prop-types */

import { Rating } from '@mui/material';

import "./ShowItems.css"
import { Card } from 'flowbite-react';
     

const ShowItems = ({item}) => {
  
   const {img, name,rating,price }=item;
    return (
        

      <div className="max-w-sm  bg-slate-100">
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
          <span className="text-3xl  text-gray-900 dark:text-white">
            <span className='text-4xl'>$</span>{price}
          </span>
          <a
            href="#"
            className="btn bg-slate-500 hover:bg-slate-700 text-white"
          >
            Add to cart
          </a>
        </div>
      </Card>
    </div>


    );
};

export default ShowItems;