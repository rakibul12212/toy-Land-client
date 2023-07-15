import { Table } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import useTitle from '../../Hooks/useTitle';
import ViewDetailsModal from '../ViewDetailsModal/ViewDetailsModal'
const AllToysPage = () => {
  useTitle('About')
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
    name,
  } = useAuth();
const [modalOpen, setModalOpen] = useState(false); 

const [stoy,setStoy]=useState([]);

  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredToys, setFilteredToys] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetchToysData().then(data => {
      setToys(data);
      setFilteredToys(data);
    });
  }, []);

  const fetchToysData = () => {
    return fetch('https://toy-cart-server-rakibul12212.vercel.app/toys')
      .then(response => response.json())
      .then(data => data);
  };

  const handleSearch = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = toys.filter(
      toy => toy.name && toy.name.toLowerCase().includes(query)
    );
    setFilteredToys(filtered);
  };

  const handleViewDetails = (id) => {
        
    const isLoggedIn = checkUserLoggedIn();
    if (isLoggedIn) {
      // Redirect to toy details page
      setModalOpen(true);
      fetch(`https://toy-cart-server-rakibul12212.vercel.app/toys/${id}`)
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
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchQuery}
           onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
       
      </div>
     

<Table>
  <Table.Head>
    <Table.HeadCell>
      Seller Name
    </Table.HeadCell>
    <Table.HeadCell>
      Product Name
    </Table.HeadCell>
    <Table.HeadCell>
      Category
    </Table.HeadCell>
    <Table.HeadCell>
      Price
    </Table.HeadCell>
    <Table.HeadCell>
      Available Quantity
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    
  {filteredToys.slice(0, limit).map(toy => (  <Table.Row
  key={toy._id}
  className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      
      {toy.seller}
      </Table.Cell>
      <Table.Cell>
      {toy.name}
      </Table.Cell>
      <Table.Cell>
      {toy.category}
      </Table.Cell>
      <Table.Cell>
      {toy.price}
      </Table.Cell>
      <Table.Cell>
      {toy.quantity}
      </Table.Cell>
      <Table.Cell>
     
      <button
         onClick={() => handleViewDetails(toy._id, stoy)} 
         type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Details</button>
        <ViewDetailsModal 
        key={stoy._id}
        stoy={stoy}
        open={modalOpen}
        onClose={handleCloseModal}
        
        />

      </Table.Cell>
    </Table.Row>
  
    )
    )
    }
    
  </Table.Body>
</Table>
    </div>
  );
};

export default AllToysPage;
