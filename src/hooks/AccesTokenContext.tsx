import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessTokenContextData {
    accessToken: string | null;
    setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  }
// Create a context with an empty default value
const AccessTokenContext = createContext<AccessTokenContextData>({
    accessToken: null,
    setAccessToken: () => {},
  });

// Create a provider component
export const AccessTokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessTokenState] = useState<string | null>(null);

  // Load access token from local storage when component mounts
  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessTokenState(storedAccessToken);
    }
  }, []);

  // Save access token to local storage whenever it changes
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    } else {
      localStorage.removeItem('accessToken');
    }
  }, [accessToken]);

  const setAccessToken: React.Dispatch<React.SetStateAction<string | null>> = (accessToken) => {
    setAccessTokenState(accessToken);
  };
  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

// Create a hook for easy access to the access token
export const useAccessToken = () => useContext(AccessTokenContext);