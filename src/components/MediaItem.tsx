import fullBookMark from "../assets/icon-bookmark-full.svg";
import emptyBookMark from "../assets/icon-bookmark-empty.svg";
import movieCat from "../assets/icon-category-movie.svg";
import tvCat from "../assets/icon-category-tv.svg";
import axios from "axios";
import Cookies from "js-cookie";
import { useMediaQuery } from "@mui/material";

export type Media = {
  _id: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  isBookmarked: boolean;
  year: number;
  category: string;
  rating: string;
  title: string;
};

type MediaItemProps = {
  media: Media;
  bookmarks: string[];
  setBookmarks: (bookmarks: string[]) => void;
};

const MediaItem = ({ media, setBookmarks, bookmarks }: MediaItemProps) => {
  const { _id, thumbnail, year, category, rating, title } = media;

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

  const isMd = useMediaQuery("(min-width:768px)");
  const isLg = useMediaQuery("(min-width:1440px)");

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

  return (
    <li key={_id} className="text-white relative">
      <img
        className="w-[164px] h-[110px] rounded-lg md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px]"
        src={`https://movieback.onrender.com/${
          isMd
            ? thumbnail.regular.medium
            : isLg
            ? thumbnail.regular.large
            : thumbnail.regular.small
        }`}
      />

      <div className="w-8 h-8 bg-[#10141E] bg-opacity-50 absolute top-2 right-2 flex items-center justify-center rounded-[50%]">
        <img
          onClick={async () => {
            await handleBookmark(_id);
            await fetchBookmarks();
          }}
          src={bookmarks.includes(_id) ? fullBookMark : emptyBookMark}
        />
      </div>

      <div className="text-white flex flex-col">
        <div className="flex gap-2 items-center">
          <p className="font-outfit font-light text-[11px] text-white opacity-75">
            {year}
          </p>

          <p>•</p>

          <div className="flex gap-[6px] items-center">
            <img
              className="h-[12px] w-[12px]"
              src={category === "Movie" ? movieCat : tvCat}
            />
            <p className="font-outfit font-light text-[11px] text-white opacity-75">
              {category}
            </p>
          </div>

          <p>•</p>

          <p className="font-outfit font-light text-[11px] text-white opacity-75">
            {rating}
          </p>
        </div>
      </div>
      <h1 className="font-outfit font-medium text-[14px] text-white">
        {title}
      </h1>
    </li>
  );
};

export default MediaItem;
