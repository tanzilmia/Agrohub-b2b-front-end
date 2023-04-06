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
import AboutUs from "../Pages/about/AboutUs";
import ContactUs from "../Pages/contactUs/ContactUs";
import Blogs from "../Pages/blogs/Blogs";
import SellerProduct from "../Pages/SellerProduct/SellerProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/selling_products",
        element: <SellerProduct />,
      },
      {
        path: "/details/:id",
        element: <ReviewLayout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/seller/all_Product/${params.id}`),
        children: [
          {
            path: "/details/:id/description",
            element: <DetailsDescription />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/seller/all_Product/${params.id}`),
          },
          {
            path: "/details/:id/review",
            element: <UserReview />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/seller/all_Product/${params.id}`),
          },
          {
            path: "/details/:id/additional-information",
            element: <AdditionalInformation />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/seller/all_Product/${params.id}`),
          },
        ],
      },
      {
        path: "/details/payment-gateway",
        element: <PaymentGateway></PaymentGateway>,
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
            element: <ProductForm />,
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
