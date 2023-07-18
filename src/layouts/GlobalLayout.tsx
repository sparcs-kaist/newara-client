import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalFooter, GlobalNav } from "@/components";

export const GlobalLayout: React.FC = () => {
  return (
    <>
      <GlobalNav />
      <Outlet />
      <GlobalFooter />
    </>
  );
};
