
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toydetails = useLoaderData()
console.log(toydetails);   
const {name,price,_id,img,long_description}=toydetails
 return (
        <div>
            
            {/* <h2>name:{name}</h2>
            <h2>name:{price}</h2> */}
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{long_description}</p>
    <p className='text-2xl'><span className='text-bold'>price :</span> {price} <span>$</span></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyDetails;