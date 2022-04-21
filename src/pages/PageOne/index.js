import React from "react";
import { Typography } from "@material-ui/core";

import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "navigation/CONSTANTS";
import { Math } from "./Math";

export const PageOne = () => {
  return (
    <div>
      <LinkRoute to={ROOT}>{"<"} Home</LinkRoute>
      <Typography variant="h4">Page One</Typography>
      <Math />
    </div>
  );
};
