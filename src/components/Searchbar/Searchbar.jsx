import "./searchbar-styles.css";
import { SearchSvg } from "../../assets";

export const Searchbar = () => {
  return (
    <article className="searchbar">
      <span className="search-icon">
        <SearchSvg />
      </span>
      <input
        className="searchbar__input"
        type="text"
        value={``}
        onChange={(e) => {}}
        placeholder={`${
          window.innerWidth < 641
            ? `Search`
            : `Search for rooms, users or categories`
        }`}
      />
    </article>
  );
};
