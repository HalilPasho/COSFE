import { useEffect, useState, FC } from "react";

import "../css/SearchBar.css";
import { SearchBarProps } from "../Interfaces/Interfaces";

const SearchBar: FC<SearchBarProps> = ({ onSearchSubmit, clearResults }) => {
  const [term, setTerm] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>(term);

  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedValue), 500);
    return () => clearTimeout(timer);
  }, [debouncedValue]);

  // submit a new search
  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    } else {
      clearResults();
    }
  }, [term]);

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search by name. . ."
        onChange={(e) => setDebouncedValue(e.target.value)}
        value={debouncedValue}
      />
    </div>
  );
};

export default SearchBar;
