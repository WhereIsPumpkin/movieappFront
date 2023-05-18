import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import ConfirmEmail from './pages/ConfirmEmail';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      axios
        .get('https://movieback.onrender.com/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.valid) {
            navigate('/home');
          }
        });
    }
  }, [navigate]);
  


  return (
    <div className='bg-darkblue h-screen '>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </div>
  )
}

export default App