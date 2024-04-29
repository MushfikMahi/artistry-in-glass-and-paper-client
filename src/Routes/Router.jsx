
import ErrorPage from "../ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Root";
import AddCraft from "../AddCraft/AddCraft";
import UpdateCraft from "../UpdateCraft/UpdateCraft";
import AllCrafts from "../AllCrafts/AllCrafts";
import DetailCraft from "../AllCrafts/DetailCraft";
import Mycrafts from "../MyCraft/Mycrafts";
import Private from "../Private/Private";
import Profile from "../Profile/Profile";
import AllSubcategory from "../Home/AllSubcategory/AllSubcategory";

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
        {
          path: '/detail/:id',
          element:<DetailCraft></DetailCraft>,
          loader: ({params})=> fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
          path: '/mycrafts',
          element: <Private><Mycrafts></Mycrafts></Private>
        },
        {
          path: '/addcraft',
          element:<Private><AddCraft></AddCraft></Private>
        },
        {
          path: '/updateCraft/:id',
          element: <UpdateCraft></UpdateCraft>,
          loader: ({params})=> fetch(`http://localhost:5000/update/${params.id}`)
        },
        {
          path:'/profile',
          element:<Private><Profile></Profile></Private>
        }, 
        {
          path: '/subcategory/:subcategory_Name',
          element: <AllSubcategory></AllSubcategory>,
          loader: ()=> fetch('http://localhost:5000/crafts')
        }
      ],
    },
  ]);
  
  export default router;