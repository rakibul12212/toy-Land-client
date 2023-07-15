import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Mytoys.css'

const Mytoys = () => {
    useTitle('My Toys')
    return (
       
        <div>
            <h1>this is my toys page</h1>
        </div>
    );
};

export default Mytoys;