import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalNav } from "@/components";

export const GlobalLayout: React.FC = () => {
  return (
    <>
      <GlobalNav />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};
