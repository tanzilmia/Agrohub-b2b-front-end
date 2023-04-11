import { axiosInstance } from "../../axios/axios";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/seller/all_Product");
  return response.data;
};
