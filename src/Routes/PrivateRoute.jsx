import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth()
    const location = useLocation();

    if(isLoading){
        console.log('yes loading found');
        return <div className='text-center my-12'><button className="btn btn-square loading"></button></div>
    }

    if(user && user.uid) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace ></Navigate>
   
};

export default PrivateRoute;