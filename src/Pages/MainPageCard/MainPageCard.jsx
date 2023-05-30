import React, { useEffect, useState } from 'react';
import { Tabs } from 'flowbite-react';
import ShowItems from '../ShowItems/ShowItems';

const MainPageCard = () => {
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

  return (
    <>
      <Tabs.Group
        className="my-2 flex flex-row justify-self-center justify-center"
        aria-label="Tabs with underline"
        style="underline"
      >
        <Tabs.Item active={true} title="TRUCK">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
            {items
              .filter(item => item.category === 'Truck')
              .map(item => (
                <ShowItems key={item._id} item={item} />
              ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="SPORTS CAR">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
            {items
              .filter(item => item.category === 'Sports Car')
              .map(item => (
                <ShowItems key={item._id} item={item} />
              ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="REGULER CAR">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
            {items
              .filter(item => item.category === 'Regular Car')
              .map(item => (
                <ShowItems key={item._id} item={item} />
              ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="POLICE CAR">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-4">
            {items
              .filter(item => item.category === 'Mini Police Car')
              .map(item => (
                <ShowItems key={item._id} item={item} />
              ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="MINI FIRE TRUCK">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 justify-items-center gap-6">
            {items
              .filter(item => item.category === 'Mini Fire Truck')
              .map(item => (
                <ShowItems key={item._id} item={item} />
              ))}
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </>
  );
};

export default MainPageCard;
