import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './ShoppingItems.css'

const ShoppingItems = () => {

    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <h1>this  is shoppingitems page : {items.length}</h1>
        </div>
    );
};

export default ShoppingItems;