import { useState } from 'react';

import Login from './pages/Login'
import Register from './pages/Register'
import ConfirmEmail from './pages/ConfirmEmail';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {

  const [hasRegistered, setHasRegistered] = useState(false);


  return (
    <div className='bg-darkblue h-screen flex items-center px-6 py-12 flex-col font-outfit font-light gap-14'>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register setHasRegistered={setHasRegistered} />} />
        {hasRegistered && <Route path="/confirm-email" element={<ConfirmEmail />} />}


      </Routes>
    </div>
  )
}

export default App