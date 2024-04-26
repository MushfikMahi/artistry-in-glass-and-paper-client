
import ErrorPage from "../ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root";
import AddCraft from "../AddCraft/AddCraft";
import UpdateCraft from "../UpdateCraft/UpdateCraft";
import AllCrafts from "../AllCrafts/AllCrafts";

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
        {
            path: '/allcrafts',
            element: <AllCrafts></AllCrafts>,
            loader: ()=> fetch('http://localhost:5000/crafts')
        },
        // {
        //     path: '/mycraft'
        // },
        {
            path: '/addcraft',
            element:<AddCraft></AddCraft>
        },
        {
          path: '/updateCraft',
          element: <UpdateCraft></UpdateCraft>
        }
      ],
    },
  ]);
  
  export default router;