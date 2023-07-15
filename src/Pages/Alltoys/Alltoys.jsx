import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import AllToysPage from '../AllToysPage/AllToysPage';
//import ShowItems from '../ShowItems/ShowItems';
import './Alltoys.css'

const Alltoys = () => {
  

    const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://toy-cart-server-rakibul12212.vercel.app/toys");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  useTitle('ALL Toys')
    return (
        <>
         

        <AllToysPage></AllToysPage>
        </>
    );
};

export default Alltoys;