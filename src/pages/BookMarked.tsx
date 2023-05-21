import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";
import MediaItem from "../components/MediaItem";

const Bookmarked = () => {
  const movies = useSelector(selectMovies);

  // Filter bookmarked movies and TV shows
  const bookmarkedMovies = movies.filter(
    (movie) => movie.isBookmarked && movie.category === "Movie"
  );
  const bookmarkedTVShows = movies.filter(
    (movie) => movie.isBookmarked && movie.category === "TV Series"
  );

  return (
    <>
      <Header />
      <Search placeholder="Search for bookmarked media" />
      <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
        Bookmarked Movies
      </h1>
      <div className="flex pl-4 mb-6">
        <ul className="grid grid-cols-2 grid-rows-2 gap-x-[15px] gap-y-[16px]">
          {bookmarkedMovies.map((movie) => (
            <MediaItem media={movie} key={movie._id} />
          ))}
        </ul>
      </div>
      <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
        Bookmarked TV Series
      </h1>
      <div className="flex flex-wrap pl-4">
        <ul className="grid grid-cols-2 grid-rows-2 gap-x-[15px] gap-y-[16px]">
          {bookmarkedTVShows.map((tvShow) => (
            <MediaItem media={tvShow} key={tvShow._id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Bookmarked;
