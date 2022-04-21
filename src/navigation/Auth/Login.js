import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

import { useAuth } from "./ProvideAuth";
import { ROOT } from "navigation/CONSTANTS";
import { LinkRoute } from "components/LinkRoute";
import LoadingButton from "components/LoadingButton";

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    setIsLoading(true);
    auth.signin().then((res) => {
      setTimeout(() => {
        history.replace(from);
        setIsLoading(false);
      }, 2000);
    });
  };

  return (
    <>
      <LinkRoute to={ROOT}>{"<"} Home</LinkRoute>
      <Typography variant="h4">Login Page</Typography>
      <p>You must log in to view the page: {from.pathname}</p>
      <LoadingButton isLoading={isLoading} onClick={login}>
        Log in
      </LoadingButton>
    </>
  );
}
