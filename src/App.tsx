import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className='bg-darkblue h-screen flex items-center px-6 py-12 flex-col font-outfit font-light gap-14'>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App