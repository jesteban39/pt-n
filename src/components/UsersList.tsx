import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
/* import {
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
} from "@mui/material"; */

import type { user } from "../types";
import { getUsersList } from "../store/slices/getUsersList";

const UsersList = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  //useSelector((s: any) => console.log(s));

  const usersList = useSelector(
    (state: { usersList: user[] }) => state.usersList
  );

  const handleChange = (event: any) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(getUsersList(userName));
  };
  return (
    <div className="conta">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          placeholder="user name (ejm: leo325)"
          onChange={handleChange}
          value={userName}
        />
        <input type="submit" value="Search" />
      </form>
      <section className="list">
        {usersList.map((user) => (
          <Link key={user.id} href={`/user/${user.login}`}>
            <div>
              <img width="50px" src={user.avatar_url} />
              <span>{user.login}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
export default UsersList;
