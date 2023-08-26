import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Content from "../pages/Content";
import { Cards } from "../pages/Cards";
import { AuthContext } from "../context/AuthContext";
import Form from "../pages/form";

const Routers = () => {
  const auth = useContext(AuthContext);
  const router = useRoutes([
    {
      index: true,
      element: <Navigate to={"form"} />,
    },
    {
      path: "form",
      element: <>{auth.isAuthorized ? <Navigate to="/home" /> : <Form />}</>,
    },
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "content", element: <Content /> },
    { path: "cards", element: <Cards /> },
    { path: "*", element: <>This Page Not Found 404</> },
  ]);
  return router;
};

export default Routers;
