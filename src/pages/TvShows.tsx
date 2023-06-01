import { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";
import MediaItem from "../components/MediaItem";
import { Media } from "../components/MediaItem";

interface SeriesProps {
  bookmarks: string[];
  setBookmarks: (bookmarks: string[]) => void;
}

const TVShows = ({ bookmarks, setBookmarks }: SeriesProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector(selectMovies);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="lg:flex">
      <Header />
      <div className="pb-12">
        <Search placeholder="Search for TV shows" onSearch={handleSearch} />
        <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
          TV Shows
        </h1>
        <div className="flex flex-wrap pl-4">
          <ul className="grid grid-cols-2 grid-rows-2 gap-x-[15px] gap-y-[16px] md:grid md:grid-cols-3 md:grid-rows-1 md:gap-x-8 md:gap-y-6 ml-auto mr-auto md:mr-0 md:ml-0 mdx:ml-auto mdx:mr-auto lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-6  xxl:grid xxl:grid-cols-5 xxl:grid-rows-1 xxl:gap-x-8 xxl:gap-y-6">
            {movies
              .filter(
                (movie) =>
                  movie.category === "TV Series" &&
                  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((tvShow) => (
                <MediaItem
                  media={tvShow as Media}
                  key={`${tvShow._id}-${bookmarks.includes(tvShow._id)}`}
                  setBookmarks={setBookmarks}
                  bookmarks={bookmarks}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TVShows;
