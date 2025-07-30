import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../api-config";

interface PostLoginTypes {
  username: string;
  password: string;
}

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: api,
  endpoints: (builder) => ({
    postLogin: builder.mutation<any, any>({
      query: (payload: { email: string }) => ({
        url: "/generateCode",
        method: "POST",
        body: payload,
      }),
    }),
    postVerify: builder.mutation<any, any>({
      query: (payload: { email: string }) => ({
        url: "/verifyCode",
        method: "POST",
        body: payload,
      }),
    }),
    postRegister: builder.mutation<any, any>({
      query: (payload: PostLoginTypes) => ({
        url: "/createUser",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  usePostVerifyMutation,
} = authService;
