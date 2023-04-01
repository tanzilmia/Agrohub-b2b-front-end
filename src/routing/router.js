import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../AdminDashboard/AminLayout/AdminLayout";
import HomeDashboard from "../AdminDashboard/component/HomeDashboard";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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