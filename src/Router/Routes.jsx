import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
