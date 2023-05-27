import React, { useEffect, useState } from 'react';
import AllToysPage from '../AllToysPage/AllToysPage';
import ShowItems from '../ShowItems/ShowItems';
import './Alltoys.css'

const Alltoys = () => {

    const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/toys");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

    return (
        <>
         

        <AllToysPage></AllToysPage>
        </>
    );
};

export default Alltoys;