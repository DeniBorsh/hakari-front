import React, { useState } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <StateContext.Provider value={{ isNavbarOpen, setIsNavbarOpen}}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
