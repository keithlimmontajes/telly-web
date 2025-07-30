import axios from "axios";
import store, { type RootState } from "../stores/store";

export const baseURL = "https://telly-node.vercel.app/api/v1";
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state: RootState = store.getState();
    const token = state.auth.access_token || "";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
