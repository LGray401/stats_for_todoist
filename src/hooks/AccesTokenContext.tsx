import React, { createContext, useContext, useState } from 'react';

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
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AccessTokenContext.Provider value = {{ accessToken, setAccessToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
};

// Create a hook for easy access to the access token
export const useAccessToken = () => useContext(AccessTokenContext);