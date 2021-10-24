import React, { useState } from "react";
import { useDispatch } from "react-redux";
 
import {
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  Button
} from "@mui/material"; 


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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={handleChange}
        value={userName}
        placeholder="user name (ejm: leo325)"
      />
      <input type="submit" value="Search" />
      <Button>Search</Button>
    </form>
  );
};
export default Search;
