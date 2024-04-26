
import ErrorPage from "../ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root";
import AddCraft from "../AddCraft/AddCraft";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        // {
        //     path: '/allcrafts'
        // },
        // {
        //     path: '/mycraft'
        // },
        {
            path: '/addcraft',
            element:<AddCraft></AddCraft>
        }
      ],
    },
  ]);
  
  export default router;