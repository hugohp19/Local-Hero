import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contextMessage, setContextMessage] = useState('');
  const [repData, setRepData] = useState(null);
  const [address, setAddress] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [individualRep, setIndividualRep] = useState(null);
  const [filteredRep, setFilteredRep] = useState(null);
  const user = sessionStorage.getItem('user');
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    if (user && !loginData) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setLoginData(data);
        })
        .catch((error) => {
          console.log(error);
          //alert(`Oops!`, error.toString());
        });
    }
  }, [loginData, user, loading]);

  const contextMethod = () => {
    setContextMessage('Hello from client/src/context/AppContext.jsx');
  };

  return (
    <AppContext.Provider
      value={{
        filterData,
        setFilterData,
        contextMessage,
        contextMethod,
        repData,
        setRepData,
        address,
        setAddress,
        apiData,
        setApiData,
        loginData,
        setLoginData,
        loading,
        setLoading,
        individualRep,
        setIndividualRep,
        filteredRep,
        setFilteredRep
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
