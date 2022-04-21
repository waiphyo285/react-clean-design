import React from "react";
import { Typography } from "@material-ui/core";

import { ROOT } from "navigation/CONSTANTS";
import { LinkRoute } from "components/LinkRoute";
import { useAuth } from "navigation/Auth/ProvideAuth";

export const Authorized = () => {
  const { user } = useAuth();
  return (
    <div>
      <LinkRoute to={ROOT}>{"<"} Home</LinkRoute>
      <Typography variant="h4">Welcome, {user.name}.</Typography>
      <Typography variant="overline">Authorized Page</Typography>
    </div>
  );
};
