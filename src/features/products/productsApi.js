import { axiosInstance } from "../../axios/axios";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/seller/all_Product");
  return response.data;
};

export const getLimitProducts = async () => {
  const response = await axiosInstance.get("/seller/limit_Product");
  return response.data;
};

export const getCategories = async () => {
  const response = await axiosInstance.get("/admin/categories");
  return response.data;
};

export const getProductDetailsByID = async (id) => {
  const response = await axiosInstance.get(`/seller/all_Product/${id}`);
  return response.data;
};

export const getPostProduct = async (user, product, header) => {
  const response = await axiosInstance.post(
    `https://agrohub.vercel.app/seller/product?email=${user?.email}`,
    product,
    header
  );
  return response.data;
};
