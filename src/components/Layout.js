import React from "react";
import { Outlet } from "react-router-dom";
import FrontPageNavbar from "./Navbars/FrontPageNavbar";

function Layout() {
  return (
    <div>
      <FrontPageNavbar />
      <Outlet />
    </div>
  );
}

export default Layout;
