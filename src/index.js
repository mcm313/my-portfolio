import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main";
import "./index.css";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Project from "./Pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "projects",
            element: <Project />,
          },
          {
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
