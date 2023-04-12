import { axiosInstance } from "../../axios/axios";

export const getAllCategory = async () => {
  const response = await axiosInstance.get("/admin/categories");
  return response.data;
};
