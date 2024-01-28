import React, { useEffect } from 'react';
import { useAccessToken } from '../../hooks/AccesTokenContext';
import { useNavigate } from 'react-router-dom';


// handle the redirect from Todoist OAuth and call Azue Function to exchange the code for an access token
const OAuthRedirectHandler: React.FC = () => {
  const { accessToken, setAccessToken } = useAccessToken();
  const navigate = useNavigate();

  // get the code from the URL query parameters
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (!code) {
      console.error('No code found in URL query parameters.');
      return;
    }

    // exchange the code for an access token
    const exchangeToken = async () => {
      try {
        const response = await fetch('https://statsfortodoistauthentication.azurewebsites.net/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error('Token exchange failed');
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Error exchanging token:', error);
      }
    };

    exchangeToken();
  }, [setAccessToken]);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return <div>Exchanging code for token...</div>;
};

export default OAuthRedirectHandler;
