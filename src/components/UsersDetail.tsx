import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
//import { List, ListItemText } from "@mui/material";

import type { userDetail } from "../types";
import { getUserDetail } from "../store/slices/getUserDetail";


const UsersDetail = (props: { match: { params: { userName: string } } }) => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: { userDetail: userDetail }) => state.userDetail
  );
  useEffect(() => {
    dispatch(getUserDetail(props.match.params.userName));
  }, []);

  return (
    <article className="container">
      <div>
        <img src={user.avatar_url} />
        <span>{user.login}</span>
        <span>{user.name}</span>
      </div>
      <div>
        <h2>Repositories</h2>
        <div>
          {user.repos.map((repo) => {
            return <span>{repo.name}</span>;
          })}
        </div>
      </div>

      <div>
        <h2>Organizations</h2>
        <div>
          {user.orgs.map((org) => (
            <p>
              <span>{org.login}</span>
              <span>{org.description}</span>
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};
export default UsersDetail;
