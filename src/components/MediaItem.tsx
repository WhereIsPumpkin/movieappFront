import fullBookMark from "../assets/icon-bookmark-full.svg";
import emptyBookMark from "../assets/icon-bookmark-empty.svg";
import movieCat from "../assets/icon-category-movie.svg";
import tvCat from "../assets/icon-category-tv.svg";

export type Media = {
  _id: string;
  thumbnail: {
    regular: {
      small: string;
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
};

const MediaItem = ({ media }: MediaItemProps) => {
  const { _id, thumbnail, isBookmarked, year, category, rating, title } = media;

  return (
    <li key={_id} className="text-white relative">
      <img
        className="w-[164px] h-[110px] rounded-lg"
        src={`https://movieback.onrender.com/${thumbnail.regular.small}`}
      />

      <div className="w-8 h-8 bg-[#10141E] bg-opacity-50 absolute top-2 right-2 flex items-center justify-center rounded-[50%]">
        <img src={isBookmarked ? fullBookMark : emptyBookMark} />
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
