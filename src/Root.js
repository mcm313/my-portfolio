import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import ProjectPage from "./Pages/ProjectPage";
import Summary from "./Pages/Summary";
import useMediaQuery from "@mui/material/useMediaQuery";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
    ],
  },
]);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <Summary />,
    errorElement: <ErrorPage />,
  },
]);

function Root() {
  return (
    <>
      {useMediaQuery("(max-width:1024px)") ? (
        <RouterProvider router={router1} />
      ) : (
        <RouterProvider router={router2} />
      )}
    </>
  );
}

export default Root;
