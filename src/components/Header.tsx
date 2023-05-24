import logo from "../assets/logo.svg";
import homeNav from "../assets/icon-nav-home.svg";
import moviesNav from "../assets/icon-nav-movies.svg";
import seriesNav from "../assets/icon-nav-tv-series.svg";
import bookmarkNav from "../assets/icon-nav-bookmark.svg";
import activeMoviesNav from "../assets/activeMovie.svg";
import activeSeriesNav from "../assets/activeTvSeries.svg";
import activeBookmarkNav from "../assets/activeBookmark.svg";
import activeHomeNav from "../assets/activeHome.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/features/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectUser);

  return (
    <header className="bg-semidarkblue flex w-full p-4 items-center justify-between">
      <img src={logo} alt="logo" className="w-6 h-5" />
      <div className="flex gap-6 items-center">
        <img
          src={location.pathname === "/home" ? activeHomeNav : homeNav}
          alt="home"
          className="w-4 h-4"
          onClick={() => {
            navigate("/home");
          }}
        />
        <img
          src={location.pathname === "/movies" ? activeMoviesNav : moviesNav}
          alt="movies"
          className="w-4 h-4"
          onClick={() => {
            navigate("/movies");
          }}
        />
        <img
          src={location.pathname === "/series" ? activeSeriesNav : seriesNav}
          onClick={() => {
            navigate("/series");
          }}
          alt="series"
          className="w-4 h-4"
        />
        <img
          src={
            location.pathname === "/bookmark" ? activeBookmarkNav : bookmarkNav
          }
          onClick={() => {
            navigate("/bookmark");
          }}
          alt="bookmark"
          className="w-4 h-4"
        />
      </div>
      <div className="border border-solid border-white rounded-full overflow-hidden">
        <img
          src={`https://movieback.onrender.com/${user.avatar}`}
          alt="avatar"
          className="w-6 h-6"
        />
      </div>
    </header>
  );
};

export default Header;
