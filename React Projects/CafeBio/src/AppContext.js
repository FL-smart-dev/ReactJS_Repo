import React, { createContext, useState } from 'react';

// Create a new context
const AppContext = createContext();

// Create a custom provider component for the context
const AppProvider = ({ children }) => {
    const [appUser, setAppUser ] = useState(null);
    const [appUserID, setAppUserID ] = useState(null);
    const [appMerchantHandle, setAppMerchantHandle ] = useState(null);
    

  return (
    <AppContext.Provider value={{  appUser, setAppUser,appUserID, setAppUserID ,appMerchantHandle, setAppMerchantHandle }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
