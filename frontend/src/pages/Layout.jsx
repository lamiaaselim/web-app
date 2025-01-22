import React from "react";
import { Outlet } from "react-router";
import MyNav from "./../components/common/MyNav";
import MyFooter from "./../components/common/MyFooter";

export default function Layout() {
  return (
    <>
      <MyNav />

      <Outlet />
      <MyFooter />
    </>
  );
}
