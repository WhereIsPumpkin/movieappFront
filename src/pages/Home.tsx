import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import movieCat from "../assets/icon-category-movie.svg";
import fullBookMark from "../assets/icon-bookmark-full.svg";
import emptyBookMark from "../assets/icon-bookmark-empty.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies, selectMovies } from "../store/features/movieSlice";
import tvCat from "../assets/icon-category-tv.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Cookies from "js-cookie";
import { useMediaQuery } from "@mui/material";

interface HomeProps {
  bookmarks: string[];
  setBookmarks: React.Dispatch<React.SetStateAction<string[]>>;
}

const Home: React.FC<HomeProps> = ({ bookmarks, setBookmarks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    axios.get("https://movieback.onrender.com/movies").then((res) => {
      dispatch(updateMovies(res.data.movies));
    });
  }, [dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchBookmarks = async () => {
    try {
      const response = await axios.post(
        "https://movieback.onrender.com/verify",
        {
          token: Cookies.get("token"),
        }
      );
      setBookmarks(response.data.user.bookmarks);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmark = async (id: string) => {
    try {
      await axios.put(
        "https://movieback.onrender.com/bookmark",
        { movieId: id },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  fetchBookmarks();

  const isMd = useMediaQuery("(min-width:768px)");

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <div className="flex flex-col gap-6">
        {searchTerm === "" && (
          <div className="pl-4 flex flex-col gap-4">
            <h1 className="font-outfit font-light text-[20px] leading-6 text-white">
              Trending
            </h1>
            {/* Mobile Slider */}
            <div className="md:hidden">
              <Splide
                options={{
                  perPage: 1,
                  fixedWidth: 240,
                  gap: "16px",
                  arrows: false,
                  pagination: false,
                }}
              >
                {movies.map((movie) => {
                  if (
                    movie.thumbnail &&
                    movie.thumbnail.trending &&
                    movie.thumbnail.trending.small
                  ) {
                    return (
                      <SplideSlide key={movie._id}>
                        <div className="relative">
                          <img
                            className="rounded-lg w-[240px] h-[145px]"
                            src={`https://movieback.onrender.com/${movie.thumbnail.trending.small}`}
                            alt={movie.title}
                          />

                          <div className="absolute left-4 bottom-4 text-white flex flex-col gap-[5px]">
                            <div className="flex gap-2 items-center">
                              <p className="font-outfit  font-light text-xs  text-white opacity-75">
                                {movie.year}
                              </p>

                              <p>•</p>

                              <div className="flex gap-[6px] items-center">
                                <img
                                  className="h-[12px] w-[12px]"
                                  src={
                                    movie.category === "Movie"
                                      ? movieCat
                                      : tvCat
                                  }
                                />
                                <p className="font-outfit  font-light text-xs  text-white opacity-75">
                                  {" "}
                                  {movie.category}
                                </p>
                              </div>

                              <p>•</p>

                              <p className="font-outfit  font-light text-xs  text-white opacity-75">
                                {movie.rating}
                              </p>
                            </div>

                            <h1 className="font-outfit  font-medium text-[15px] text-white">
                              {movie.title}
                            </h1>
                          </div>
                        </div>
                      </SplideSlide>
                    );
                  }
                })}
              </Splide>
            </div>

            {/* Tablet Slider */}
            <div className="md:block def:hidden">
              <Splide
                options={{
                  perPage: 1,
                  fixedWidth: 470,
                  gap: "40px",
                  arrows: false,
                  pagination: false,
                }}
              >
                {movies.map((movie) => {
                  if (
                    movie.thumbnail &&
                    movie.thumbnail.trending &&
                    movie.thumbnail.trending.small
                  ) {
                    return (
                      <SplideSlide key={movie._id}>
                        <div className="relative">
                          <img
                            className="rounded-lg w-[470px] h-[230px]"
                            src={`https://movieback.onrender.com/${movie.thumbnail.trending.large}`}
                            alt={movie.title}
                          />

                          <div className="absolute left-4 bottom-4 text-white flex flex-col gap-[5px]">
                            <div className="flex gap-2 items-center">
                              <p className="font-outfit  font-light text-[15px]  text-white opacity-75">
                                {movie.year}
                              </p>

                              <p>•</p>

                              <div className="flex gap-[6px] items-center">
                                <img
                                  className="h-[12px] w-[12px]"
                                  src={
                                    movie.category === "Movie"
                                      ? movieCat
                                      : tvCat
                                  }
                                />
                                <p className="font-outfit  font-light text-xs  text-white opacity-75">
                                  {" "}
                                  {movie.category}
                                </p>
                              </div>

                              <p>•</p>

                              <p className="font-outfit  font-light text-xs  text-white opacity-75">
                                {movie.rating}
                              </p>
                            </div>

                            <h1 className="font-outfit  font-medium text-[15px] text-white">
                              {movie.title}
                            </h1>
                          </div>
                        </div>
                      </SplideSlide>
                    );
                  }
                })}
              </Splide>
            </div>
          </div>
        )}

        <section className="flex flex-wrap  gap-6 ">
          <h1 className="font-outfit font-light text-[20px] leading-6 text-white w-full pl-4 md:pl-6">
            Recommended for you
          </h1>

          <ul className=" md:pl-6 grid grid-cols-2 grid-rows-2 gap-x-[15px] gap-y-[16px] ml-auto mr-auto md:mr-0 md:ml-0 mdx:ml-auto mdx:mr-auto md:grid md:grid-cols-3 md:grid-rows-1 md:gap-x-8 md:gap-y-6 ">
            {movies
              .filter((movie) =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((movie) => (
                <li className="flex flex-col gap-2 relative" key={movie._id}>
                  <img
                    className="rounded-lg w-[164px] h-[110px] md:w-[220px] md:h-[140px]"
                    src={`https://movieback.onrender.com/${
                      isMd
                        ? movie.thumbnail.regular.medium
                        : movie.thumbnail.regular.small
                    }`}
                    alt={movie.title}
                  />

                  <div className="w-8 h-8 bg-[#10141E] bg-opacity-50 absolute top-2 right-4 flex items-center justify-center rounded-[50%]">
                    <img
                      src={
                        bookmarks.includes(movie._id)
                          ? fullBookMark
                          : emptyBookMark
                      }
                      onClick={async () => {
                        await handleBookmark(movie._id);
                        await fetchBookmarks();
                      }}
                    />
                  </div>

                  <div className=" text-white flex flex-col ">
                    <div className="flex gap-2 items-center">
                      <p className="font-outfit  font-light text-[11px]  text-white opacity-75">
                        {movie.year}
                      </p>

                      <p>•</p>

                      <div className="flex gap-[6px] items-center">
                        <img
                          className="h-[12px] w-[12px]"
                          src={movie.category === "Movie" ? movieCat : tvCat}
                        />
                        <p className="font-outfit  font-light text-[11px]  text-white opacity-75">
                          {" "}
                          {movie.category}
                        </p>
                      </div>

                      <p>•</p>

                      <p className="font-outfit  font-light text-[11px]  text-white opacity-75">
                        {movie.rating}
                      </p>
                    </div>

                    <h1 className="font-outfit  font-medium text-[14px] text-white">
                      {movie.title}
                    </h1>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
