import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');
  const [repData, setRepData] = useState(null);
  const [address, setAddress] = useState(null);
  const [apiData, setApiData] = useState([]);

  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

  return (
    <AppContext.Provider
      value={{
        contextMessage,
        contextMethod,
        repData,
        setRepData,
        address,
        setAddress,
        apiData,
        setApiData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
