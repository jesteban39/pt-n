import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IconButton, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { getUsersList } from "../store/slices/getUsersList";

const Search = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(getUsersList(userName));
  };
  return (
    <Paper component="form" onSubmit={handleSubmit}>
      <InputBase
        onChange={handleChange}
        value={userName}
        autoComplete="on"
        placeholder="Search User (ej: leo325)"
      />
      <IconButton onSubmit={handleSubmit} type="submit">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default Search;
