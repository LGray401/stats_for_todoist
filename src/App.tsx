
import './App.css'
import { AccessTokenProvider } from './hooks/AccesTokenContext';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OAuthRedirectHandler from './components/OAuthRedirectHandler/OAuthRedirectHandler';

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <AccessTokenProvider>

        <Routes>
          <Route path="/oauth-redirect" element={<OAuthRedirectHandler />} />
          <Route path="/" element={<MainPage />} />
        </Routes>

    </AccessTokenProvider>
  );
}

export default App;