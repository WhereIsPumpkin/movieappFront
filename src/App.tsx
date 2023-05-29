import { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { updateUser } from "./store/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .post("https://movieback.onrender.com/verify", {
          token,
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
    } else if (
      location.pathname !== "/register" &&
      location.pathname !== "/login"
    ) {
      navigate("/login");
    }
  }, [navigate, location]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      axios
        .post("https://movieback.onrender.com/verify", {
          token,
        })
        .then((res) => {
          if (res.data.valid) {
            dispatch(updateUser(res.data.user));
          }
        });
    }
  }, [dispatch, location]);

  return (
    <div className="bg-darkblue min-h-screen ">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route
          path="/home"
          element={<Home bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route
          path="/movies"
          element={<Movies bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route
          path="/series"
          element={
            <TvShows bookmarks={bookmarks} setBookmarks={setBookmarks} />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmarked bookmarks={bookmarks} setBookmarks={setBookmarks} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
