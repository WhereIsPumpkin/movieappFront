import { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/features/movieSlice";
import MediaItem from "../components/MediaItem";

interface BookmarkProps {
  bookmarks: string[];
  setBookmarks: (bookmarks: string[]) => void;
}

const Bookmarked = ({ bookmarks, setBookmarks }: BookmarkProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const movies = useSelector(selectMovies);

  const bookmarkedMovies = movies.filter(
    (movie) =>
      bookmarks.includes(movie._id) &&
      movie.category === "Movie" &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const bookmarkedTVShows = movies.filter(
    (movie) =>
      bookmarks.includes(movie._id) &&
      movie.category === "TV Series" &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Header />
      <Search
        placeholder="Search for bookmarked shows"
        onSearch={handleSearch}
      />

      {bookmarkedMovies.length > 0 ? (
        <>
          <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
            Bookmarked Movies
          </h1>
          <div className="flex pl-4 mb-6">
            <ul
              className="grid grid-cols-2 grid-rows-1 gap-x-[15px] gap-y-[16px] md:grid md:grid-cols-3 md:grid-rows-1 md:gap-x-8 md:gap-y-6
              ml-auto mr-auto md:mr-0 md:ml-0 mdx:ml-auto mdx:mr-auto"
            >
              {bookmarkedMovies.map((movie) => (
                <MediaItem
                  media={movie}
                  key={movie._id}
                  bookmarks={bookmarks}
                  setBookmarks={setBookmarks}
                />
              ))}
            </ul>
          </div>
        </>
      ) : null}

      {bookmarkedTVShows.length > 0 ? (
        <>
          <h1 className="font-outfit font-light text-[20px] text-white pl-4 mb-6">
            Bookmarked TV Series
          </h1>
          <div className="flex flex-wrap pl-4">
            <ul
              className="grid grid-cols-2 grid-rows-1 gap-x-[15px] gap-y-[16px] md:grid md:grid-cols-3 md:grid-rows-1 md:gap-x-8 md:gap-y-6 ml-auto mr-auto md:mr-0 md:ml-0 mdx:ml-auto mdx:mr-auto
"
            >
              {bookmarkedTVShows.map((tvShow) => (
                <MediaItem
                  media={tvShow}
                  key={tvShow._id}
                  setBookmarks={setBookmarks}
                  bookmarks={bookmarks}
                />
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Bookmarked;
