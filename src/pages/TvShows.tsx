import { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";
import MediaItem from "../components/MediaItem";

const TVShows = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector(selectMovies);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header />
      <Search placeholder="Search for TV shows" onSearch={handleSearch} />
      <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
        TV Shows
      </h1>
      <div className="flex flex-wrap pl-4">
        <ul className="grid grid-cols-2 grid-rows-2 gap-x-[15px] gap-y-[16px]">
          {movies
            .filter(
              (movie) =>
                movie.category === "TV Series" &&
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((tvShow) => (
              <MediaItem media={tvShow} key={tvShow._id} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default TVShows;
