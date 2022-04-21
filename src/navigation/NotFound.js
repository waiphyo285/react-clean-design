import React from "react";
import { Typography } from "@material-ui/core";
import { LinkRoute } from "components/LinkRoute";
import { ROOT } from "./CONSTANTS";

export const NotFound = () => {
  return (
    <>
      <LinkRoute to={ROOT}>{"<"} Home</LinkRoute>
      <Typography variant="h4">404: page not found!</Typography>
      <p>This is 404 page that can navigate something actions</p>
    </>
  );
};
