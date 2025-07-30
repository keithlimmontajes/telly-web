import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const baseURL = "http://127.0.0.1:1001/api/v1";
export const baseURL = "https://telly-node.vercel.app/api/v1";

export const setHeaders = async (headers: Headers) => {
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  headers.set(
    "Authorization",
    `Bearer ${await localStorage.getItem("access_token")}`
  );
};

export const api = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: async (headers) => await setHeaders(headers),
});
