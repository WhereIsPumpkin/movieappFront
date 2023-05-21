import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";
import MediaItem from "../components/MediaItem";

const TVShows = () => {
  const movies = useSelector(selectMovies);

  return (
    <>
      <Header />
      <Search placeholder="Search for TV shows" />
      <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
        TV Shows
      </h1>
      <div className="flex flex-wrap pl-4">
        <ul className="flex flex-wrap h-[1200px] flex-col gap-x-[15px] gap-y-[16px]">
          {movies
            .filter((movie) => movie.category === "TV Series") // Filter TV shows based on the category
            .map((tvShow) => (
              <MediaItem media={tvShow} key={tvShow._id} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default TVShows;
