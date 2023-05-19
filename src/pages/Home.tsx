import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import movieCat from "../assets/icon-category-movie.svg";
import tvCat from "../assets/icon-category-tv.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Import css files for the slider
import "@splidejs/react-splide/css";

const Home = () => {
  interface Movie {
    _id: string;
    thumbnail: {
      trending: {
        small: string;
      };
    };
    title: string;
    year: number;
    category: string;
    rating: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get("https://movieback.onrender.com/movies").then((res) => {
      setMovies(res.data.movies);
    });
  }, []);

  return (
    <>
      <Header />
      <Search />
      <div className="pl-4 flex flex-col gap-4">
        <h1 className="font-outfit font-light text-[20px] leading-6 text-white">
          Trending
        </h1>
        <Splide
          options={{
            perPage: 1,
            padding: {
              right: "5rem",
            },
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

                    <div className="absolute  left-4 bottom-4 text-white flex flex-col gap-[5px]">
                      <div className="flex gap-2 items-center">
                        <p className="font-outfit  font-light text-xs  text-white opacity-75">
                          {movie.year}
                        </p>

                        <p>•</p>

                        <div className="flex gap-[6px] items-center">
                          <img
                            className="h-[12px] w-[12px]"
                            src={movie.category === "Movie" ? movieCat : tvCat}
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
    </>
  );
};

export default Home;
