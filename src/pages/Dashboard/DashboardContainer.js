import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";

import { getAllUsers } from "services";
import { ROOT } from "navigation/CONSTANTS";
import { LinkRoute } from "components/LinkRoute";
import { DashboardView } from "./DashboardView";
import { UserList } from "./UserList";


export const DashboardContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((res) => {
        console.log("Dashboard > getAllUsers > res=", res);
        setUsers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setUsers([]);
        setIsLoading(false);
      });

    return () => {
      console.log("axios cleanup.");
    };
  }, []);

  const NoUserList = <Typography variant="body2">No users found!</Typography>;

  return (
    <div>
      <LinkRoute to={ROOT}>{"<"} Home</LinkRoute>
      <DashboardView />
      {isLoading ? (
        <CircularProgress />
      ) : users ? (
        <UserList users={users} />
      ) : (
        NoUserList
      )}
    </div>
  );
};
