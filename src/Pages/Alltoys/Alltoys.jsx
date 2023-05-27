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
          {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
            {items
              .map(item => (
                <ShowItems key={item._id} item={item} />
              ))}
          </div> */}

        <AllToysPage></AllToysPage>
        </>
    );
};

export default Alltoys;