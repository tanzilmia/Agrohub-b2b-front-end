import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../AdminDashboard/AminLayout/AdminLayout";
import HomeDashboard from "../AdminDashboard/component/HomeDashboard";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ReviewLayout from "../Layout/ReviewLayout";
import UserReview from "../DynamicPage/UserReview";
import DetailsDescription from "../DynamicPage/DetailsDescription";
import AdditionalInformation from "../DynamicPage/AdditionalInformation";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/register', element: <Register />
            },
            {
                path: '/details', element: <ReviewLayout />,
                children: [
                    {
                        path: '/details/description', element: <DetailsDescription></DetailsDescription>
                    },
                    {
                        path: '/details/review', element: <UserReview></UserReview>
                    },
                    {
                        path: '/details/additional-information', element: <AdditionalInformation></AdditionalInformation>
                    },
                ]
            },
            {
                path: '/dashboard', element: <AdminLayout />,
                children: [
                    {
                        path: '/dashboard', element: <HomeDashboard />
                    }
                ]
            },
        ]
    }
])

export default router;
