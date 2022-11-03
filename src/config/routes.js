import React from "react";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/PageNotFound";

const routes = [
  {
    path: '/',
    component: <Login />,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    component: <Dashboard />,
    isPrivate: true,
  },
  {
    path: '/*',
    component: <PageNotFound />,
    isPrivate: true,
  },
]

export default routes;