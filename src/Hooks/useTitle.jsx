import React from 'react';
import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(()=>{
      document.title =`${title} - ToyLand`;
    },[title])
  };

export default useTitle;