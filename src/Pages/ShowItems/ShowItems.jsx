/* eslint-disable react/prop-types */

import { Rating } from '@mui/material';

import "./ShowItems.css"
import { Card } from 'flowbite-react';
import ViewDetailsModal from '../ViewDetailsModal/ViewDetailsModal';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
     

const ShowItems = ({item}) => {
  
  const {
    handlePassword,
    handleEmail,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setError,
    setUser,
    error,
    user,
  } = useAuth(); 
  const {img, name,rating,price }=item;
  
const [modalOpen, setModalOpen] = useState(false); 

const [stoy,setStoy]=useState([]);

   const handleViewDetails = (id) => {
        
    const isLoggedIn = checkUserLoggedIn();
    if (isLoggedIn) {
      // Redirect to toy details page
      setModalOpen(true);
      fetch(`http://localhost:5000/toys/${id}`)
      .then(response => response.json())
      .then(data => {
        // Process the toy details and show them in a modal or redirect to a details page
        setStoy(data)
        
        console.log(stoy)
      })
      
      console.log(`View Details clicked for toy ID: ${id}`);
    } else {
      // Redirect to login page
      console.log('User not logged in');
    }
  };

  const checkUserLoggedIn = () => {
      if(user.email)
      {
          return true;
      }
      else{
          return false;
      }
     // Replace with your actual authentication check
  };
  



const handleCloseModal = () => {
  setModalOpen(false);
}
    return (
     <>   

      <div className="max-w-sm  bg-slate-100">
      <Card>
        <img className="h-52 w-72 rounded " src={img} alt="Meaningful alt text for an image that is not purely decorative" />
        
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        
        <div className="  flex items-center">
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
          <button
         onClick={() => handleViewDetails(item._id, stoy)} 
         type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Details</button>
        <ViewDetailsModal 
        key={stoy._id}
        stoy={stoy}
        open={modalOpen}
        onClose={handleCloseModal}
        />
        </div>
      </Card>
    </div>

</>
    );
};

export default ShowItems;