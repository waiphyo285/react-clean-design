import React from "react";
import { Link } from "react-router-dom";
import { LinkRoute } from "components/LinkRoute";
import {
  ROOT,
  LOGIN,
  DASHBOARD,
  PAGE_ONE,
  AUTH_PAGE,
} from "navigation/CONSTANTS";

export const NavLinks = () => {
  return (
    <>
      {/* Default Link tag. Make sure you always use Link from 'react-router-dom' and not from '@materialui...' */}
      <Link to={ROOT}>Root</Link>
      {/* Common component created for all Link tags to be used. Thus, avoiding reputation of any styling and universal reuse */}
      <LinkRoute to={DASHBOARD}>Dashboard</LinkRoute>
      <LinkRoute to={PAGE_ONE}>Index Page</LinkRoute>
      <LinkRoute to={AUTH_PAGE}>Auth Page</LinkRoute>
      <LinkRoute to={LOGIN}>Login Page</LinkRoute>
      <LinkRoute to={"/404"}>404 Page</LinkRoute>
    </>
  );
};
