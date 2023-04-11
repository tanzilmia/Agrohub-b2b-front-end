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
import BasicSettigs from "../AdminDashboard/component/settings/BasicSettings";
import Edete from "../AdminDashboard/component/settings/Edete";
import PaymentSuccess from "../DynamicPage/PaymentSuccess";
import PaymentFail from "../DynamicPage/PaymentFail";
import SellerProduct from "../Pages/SellerProduct/SellerProduct";
import Shop from "../Pages/shop/Shop";

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
        path: "/shop",
        element: <Shop />,
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
          fetch(
            `https://agrohub-b2b-backend.vercel.app/seller/all_Product/${params.id}`
          ),
        children: [
          {
            path: "/details/:id/description",
            element: <DetailsDescription />,
            loader: ({ params }) =>
              fetch(
                `https://agrohub-b2b-backend.vercel.app/seller/all_Product/${params.id}`
              ),
          },
          {
            path: "/details/:id/review",
            element: <UserReview />,
            loader: ({ params }) =>
              fetch(
                `https://agrohub-b2b-backend.vercel.app/seller/all_Product/${params.id}`
              ),
          },
          {
            path: "/details/:id/additional-information",
            element: <AdditionalInformation />,
            loader: ({ params }) =>
              fetch(
                `https://agrohub-b2b-backend.vercel.app/seller/all_Product/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/details/payment-gateway/:id",
        element: <PaymentGateway></PaymentGateway>,
        loader: ({ params }) => {
          return fetch(
            `https://agrohub-b2b-backend.vercel.app/seller/all_Product/${params.id}`
          );
        },
      },
      {
        path: "/payment-gateway/payment/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment-gateway/payment/fail",
        element: <PaymentFail></PaymentFail>,
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
            children: [
              {
                path: "/dashboard/settings",
                element: <BasicSettigs />,
              },
              {
                path: "/dashboard/settings/Profile",
                element: <BasicSettigs />,
              },
              {
                path: "/dashboard/settings/edete",
                element: <Edete />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
