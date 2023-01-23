import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(() => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
  height: 40,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

interface Props {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchText, setSearchText }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="SearchBar">
      <Search
        sx={{
          border: 1,
          borderColor: "#999",
          borderRadius: "10px",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar..."
          inputProps={{ "arial-label": "search" }}
          onChange={handleSearch}
        />
      </Search>
    </div>
  );
};

export default SearchBar;
