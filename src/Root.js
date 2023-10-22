import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import ProjectPage from "./Pages/ProjectPage";
import Summary from "./Pages/Summary";
import { BrowserView, MobileView } from "react-device-detect";

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
      <BrowserView>
        <RouterProvider router={router1} />
      </BrowserView>
      <MobileView>
        <RouterProvider router={router2} />
      </MobileView>
    </>
  );
}

export default Root;
