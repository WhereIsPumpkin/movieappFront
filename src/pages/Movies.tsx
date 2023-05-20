import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";

const Movies = () => {
  const movies = useSelector(selectMovies);

  return (
    <>
      <Header />
      <Search placeholder="Search for movies" />
      <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
        Movies
      </h1>
      <div className="flex flex-wrap pl-4">
        <ul className="flex flex-wrap h-[1000px] flex-col gap-x-[15px] gap-y-[16px]">
          {movies
            .filter((movie) => movie.category === "Movie")
            .map((movie) => (
              <li key={movie._id} className="text-white">
                <img
                  className="w-[164px] h-[110px] rounded-lg "
                  src={`https://movieback.onrender.com/${movie.thumbnail.regular.small}`}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
