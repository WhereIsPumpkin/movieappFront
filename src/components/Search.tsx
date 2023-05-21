import searchIcon from "../assets/icon-search.svg";

interface SearchProps {
  placeholder?: string;
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  return (
    <div className="py-6 px-4 flex gap-4">
      <img src={searchIcon} alt="search" className="w-6 h-6" />
      <input
        type="text"
        placeholder={placeholder || "Search for movies or TV series"}
        className="bg-transparent w-full focus:outline-none font-outfit font-light text-base leading-5 text-white"
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
