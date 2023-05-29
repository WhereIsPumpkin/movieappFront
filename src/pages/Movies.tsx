import { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";
import MediaItem from "../components/MediaItem";
import { Media } from "../components/MediaItem";

interface MoviesProps {
  bookmarks: string[];
  setBookmarks: (bookmarks: string[]) => void;
}

const Movies = ({ bookmarks, setBookmarks }: MoviesProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector(selectMovies);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header />
      <Search placeholder="Search for movies" onSearch={handleSearch} />
      <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
        Movies
      </h1>
      <div className="flex flex-wrap pl-4">
        <ul className="grid grid-cols-2 grid-rows-2 gap-x-[15px] gap-y-[16px]">
          {movies
            .filter(
              (movie) =>
                movie.category === "Movie" &&
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((movie) => (
              <MediaItem
                media={movie as Media}
                key={`${movie._id}-${bookmarks.includes(movie._id)}`}
                setBookmarks={setBookmarks}
                bookmarks={bookmarks}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
