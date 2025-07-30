import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseURL } from "./axiosInstance";

export const setHeaders = async (headers: Headers) => {
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  headers.set(
    "Authorization",
    `Bearer ""`
    // `Bearer ${await localStorage.getItem('access_token')}`,
  );
};

export const api = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: async (headers) => await setHeaders(headers),
});
