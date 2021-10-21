import React from "react";
import { InputSearch, SearchWrapper, IconWrapper1 } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "../Filter";

const Search = () => {
  return (
    <SearchWrapper>
      <IconWrapper1>
        <SearchIcon></SearchIcon>
      </IconWrapper1>
      <InputSearch
        placeholder="Search things"
        inputProps={{ "aria-label": "search" }}
      />
      <Filter></Filter>
    </SearchWrapper>
  );
};

export default Search;
