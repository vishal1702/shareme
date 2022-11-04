import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from './container/Home';
import Login  from './components/Login';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <>
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
        <Routes>
          <Route path='login' element={<Login />} />
        </Routes>
      </GoogleOAuthProvider>
      <Routes>
        <Route path='/*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;