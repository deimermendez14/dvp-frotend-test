import React, { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const [userData, setUserData] = useState(null);

  const [followersData, setFollowersData] = useState(null);

  const [error, setError] = useState(null);
  return (
    <AppContext.Provider
      value={{
        error,
        followersData,
        setError,
        setFollowersData,
        setUserData,
        setUsername,
        userData,
        username,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('AppContext must be used within a AppProvider');
  }

  return context;
};
