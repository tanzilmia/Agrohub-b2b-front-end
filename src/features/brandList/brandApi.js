import { axiosInstance } from "../../axios/axios";

export const getAllBrand = async () => {
  const response = await axiosInstance.get(`/admin/brands?category=${brand}`);
  return response.data;
};
