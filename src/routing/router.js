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
import SellerDashboard from "../AdminDashboard/component/SellerDashboard";

import BuyerDashboard from "../AdminDashboard/component/BuyerDashboard";
import DashboardSettings from "../AdminDashboard/component/settings/DashboardSettings";
import ErrorPage from "../sheardComponent/ErrorPage";
import ProductForm from "../AdminDashboard/ProductForm/ProductForm";
import PaymentGateway from "../DynamicPage/PaymentGateway";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
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
        path: "/details",
        element: <ReviewLayout />,
        children: [
          {
            path: "/details/payment-gateway",
            element: <PaymentGateway></PaymentGateway>,
          },
          {
            path: "/details/description",
            element: <DetailsDescription></DetailsDescription>,
          },
          {
            path: "/details/review",
            element: <UserReview></UserReview>,
          },
          {
            path: "/details/additional-information",
            element: <AdditionalInformation></AdditionalInformation>,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <AdminLayout />,
        children: [
         
          {
            path: "/dashboard/admin",
            element: <HomeDashboard />,
          },
          {
            path: "/dashboard/seller",
            element: <SellerDashboard />,
          },
          {
            path: "/dashboard/buyer",
            element: <BuyerDashboard />,
          },
          {
            path: "/dashboard/addproduct",
            element: <ProductForm/>
          },
          {
            path: "/dashboard/settings",
            element: <DashboardSettings />,
          },
        ],
      },


    ],
  },
]);

export default router;
