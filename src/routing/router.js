import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
=======
import AdminLayout from "../AdminDashboard/AminLayout/AdminLayout";
import HomeDashboard from "../AdminDashboard/component/HomeDashboard";
>>>>>>> origin/master
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
<<<<<<< HEAD
import MainDash from "../test/dashboard/MainDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/test",
        element: <MainDash />,
      },
    ],
  },
]);

export default router;
=======

const router = createBrowserRouter([
    {
        path: '/', element : <MainLayout/>,
        children : [
            {
                path: '/', element : <Home/>
            },
            {
                path: '/login', element : <Login/>
            },
            {
                path: '/register', element : <Register/>
            },
            {
                path: '/dashboard', element : <AdminLayout/>,
                children : [
                    {
                        path : '/dashboard', element : <HomeDashboard/>
                    }
                ]
            },
        ]
    }
])

export default router
>>>>>>> origin/master
