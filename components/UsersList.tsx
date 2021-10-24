import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
 
import {
  List,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
} from "@mui/material"; 


import type { user } from "../types";

const UsersList = () => {
  const usersList = useSelector(
    (state: { usersList: user[] }) => state.usersList
  );

  return (
    <List>
      {usersList.map((user) => (
        <Link key={user.id} href={`/users/${user.login}`}>
          <div>
            <img width="50px" src={user.avatar_url} />
            <span>{user.login}</span>
          </div>
        </Link>
      ))}
    </List>
  );
};
export default UsersList;
