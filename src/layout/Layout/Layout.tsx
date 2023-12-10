import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@layout/Header";

export const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
}
