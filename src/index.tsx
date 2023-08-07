import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Application from "./components/application";
import Parser from "./components/parser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        path: "parser/:parserId",
        element: <Parser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
