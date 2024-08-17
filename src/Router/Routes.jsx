import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../Pages/Products/Products";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: (
          <PrivateRouter>
            <Products />
          </PrivateRouter>
        ),
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
