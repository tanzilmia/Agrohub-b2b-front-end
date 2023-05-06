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
import CustomeOrder from "../Pages/custome Order/CustomeOrder";
import ChatLayout from "../ChatPage/ChatLayout/ChatLayout";
import Inbox from "../ChatPage/ChatLayout/Inbox";
import Defaultinbox from "../ChatPage/ChatLayout/Defaultinbox";
import SingleSeller from "../AdminDashboard/SingleSellerInfo/SingleSeller";
import UpdateProductInfo from "../AdminDashboard/UpdateProductInfo/UpdateProductInfo";
import Cart from "../Pages/Cart/Cart";
import AdminRouting from "./AdminRouting";
import PrivetRouting from "./PrivetRouting";
// import MyProduct from "../AdminDashboard/MyProduct";
import CartProduct from "../Pages/CartProduct/CartProduct";
import MyProduct from "../AdminDashboard/sellerBoard/MyProduct";
import MyBuyers from "../AdminDashboard/sellerBoard/MyBuyers";
import SellerAndAdmin from "./SellerAndAdmin";
import CommonDashPage from "../AdminDashboard/CommonDashPage";
import AddBlog from "../AdminDashboard/AddBlog";
import BlogPost from "../DynamicPage/BlogPost";

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
        path: "/custom",
        element: <CustomeOrder />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blogs/:id",
        element: <BlogPost />,
        loader: ({ params }) =>
          fetch(
            `https://agrohub-b2b-new-server.vercel.app/seller/single-blog/${params.id}`
          ),
      },
      {
        path: "/cartProduct",
        element: <CartProduct />,
      },
      {
        path: "/seller/contact/chats",
        element: <ChatLayout />,
        children: [
          {
            path: "/seller/contact/chats",
            element: <Defaultinbox />,
          },
          {
            path: "/seller/contact/chats/:id",
            element: <Inbox />,
          },
        ],
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
            `https://agrohub-b2b-new-server.vercel.app/seller/all_Product/${params.id}`
          ),
        children: [
          {
            path: "/details/:id/description",
            element: <DetailsDescription />,
            loader: ({ params }) =>
              fetch(
                `https://agrohub-b2b-new-server.vercel.app/seller/all_Product/${params.id}`
              ),
          },
          {
            path: "/details/:id/review",
            element: <UserReview />,
            loader: ({ params }) =>
              fetch(
                `https://agrohub-b2b-new-server.vercel.app/seller/all_Product/${params.id}`
              ),
          },
          {
            path: "/details/:id/additional-information",
            element: <AdditionalInformation />,
            loader: ({ params }) =>
              fetch(
                `https://agrohub-b2b-new-server.vercel.app/seller/all_Product/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/details/payment-gateway/:id",
        element: <PaymentGateway></PaymentGateway>,
        loader: ({ params }) => {
          return fetch(
            `https://agrohub-b2b-new-server.vercel.app/seller/all_Product/${params.id}`
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
        element: (
          <SellerAndAdmin>
            <AdminLayout />
          </SellerAndAdmin>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivetRouting>
                <CommonDashPage />
              </PrivetRouting>
            ),
          },

          // seller dashboard

          {
            path: "/dashboard/myproduct",
            element: (
              <SellerAndAdmin>
                <MyProduct />
              </SellerAndAdmin>
            ),
          },
          {
            path: "/dashboard/mybuyers",
            element: (
              <SellerAndAdmin>
                <MyBuyers />
              </SellerAndAdmin>
            ),
          },
          {
            path: "/dashboard/addBlog",
            element: (
              <SellerAndAdmin>
                <AddBlog />
              </SellerAndAdmin>
            ),
          },
          {
            path: "/dashboard/admin",
            element: (
              <AdminRouting>
                <HomeDashboard />
              </AdminRouting>
            ),
          },
          {
            path: "/dashboard/seller",
            element: (
              <AdminRouting>
                <SellerDashboard />
              </AdminRouting>
            ),
          },
          {
            path: "/dashboard/Seller/:id",
            element: (
              <AdminRouting>
                <SingleSeller />
              </AdminRouting>
            ),
            loader: ({ params }) => {
              return fetch(
                `https://agrohub-b2b-new-server.vercel.app/common/seller-product/${params.id}`
              );
            },
          },
          {
            path: "/dashboard/update-product/:id",
            element: (
              <PrivetRouting>
                <UpdateProductInfo />
              </PrivetRouting>
            ),
            loader: ({ params }) => {
              return fetch(
                `https://agrohub-b2b-new-server.vercel.app/common/single-product/${params.id}`
              );
            },
          },

          {
            path: "/dashboard/buyer",
            element: (
              <AdminRouting>
                <BuyerDashboard />
              </AdminRouting>
            ),
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
                element: (
                  <AdminRouting>
                    <BasicSettigs />
                  </AdminRouting>
                ),
              },
              {
                path: "/dashboard/settings/All-Product",
                element: (
                  <AdminRouting>
                    <BasicSettigs />
                  </AdminRouting>
                ),
              },
              {
                path: "/dashboard/settings/edete",
                element: (
                  <AdminRouting>
                    <Edete />
                  </AdminRouting>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
