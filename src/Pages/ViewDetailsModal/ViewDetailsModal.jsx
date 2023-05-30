import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Toast, Tooltip } from 'flowbite-react';
import { Alert } from '@mui/material';



const ViewDetailsModal = ({ open, onClose, stoy }) => {
  const [addToCart, setAddToCart] = useState(false);
  
  const [success, setSuccess] = useState(false);

    const {name, price , long_description, seller,email,img}=stoy;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
   
        

  const handleAddToCart = () => {
    // Add logic to add the toy to the cart
    setAddToCart(true);
    
  };

  return (
    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
        <img src={img} alt=""  />
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <span className='text-bold'>{name}</span>
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <span className='text-bold'>Price :</span> {price}$
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <span className='text-bold'>Seller name :</span> {seller}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <span className='text-bold'>Seller email :</span> {email}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <span className='text-bold'>Description :</span>
            {long_description}
          </Typography>

          <Tooltip
  content="This is a add to cart button"
  placement="top"
>
<Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              {addToCart&&(<Alert severity="success">Item added successfully!</Alert>
  )}
</Tooltip>

          
        </Box>
      </Fade>
    </Modal>
  </div>
  );
};

export default ViewDetailsModal;
