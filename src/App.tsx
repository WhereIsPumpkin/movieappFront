import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ConfirmEmail from "./pages/ConfirmEmail";
import Bookmarked from "./pages/BookMarked";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .get("https://movieback.onrender.com/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (
            res.data.valid &&
            (location.pathname === "/login" ||
              location.pathname === "/register")
          ) {
            navigate("/home");
          }
        });
    }
  }, [navigate, location]);

  return (
    <div className="bg-darkblue min-h-screen ">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvShows />} />
        <Route path="/bookmark" element={<Bookmarked />} />
      </Routes>
    </div>
  );
}

export default App;
