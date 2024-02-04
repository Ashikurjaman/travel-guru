import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import News from "../News/News";
import Destination from "../Destination/Destination";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRouter from "../PrivateRoute/PrivateRouter";


export const router = createBrowserRouter([


    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/news',
            element:<News/>,
        },
        {
            path:'/destination',
            element:<PrivateRouter><Destination/></PrivateRouter>,
        },
        {
            path:'/login',
            element:<Login/>,
        },
        {
            path:'/register',
            element:<Register/>,
        },
      ]
    },
  ]);
const Routes = () => {
    
  return <div></div>;
};

export default Routes;
