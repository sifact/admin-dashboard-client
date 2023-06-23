import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.VITE_APP_BASE_URL,
        baseUrl: import.meta.env.VITE_APP_BASE_URL,
    }),

    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `api/v1/users/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => `api/v1/products`,
            providesTags: ["Products"],
        }),
        getCustomers: build.query({
            query: () => `api/v1/users`,
            providesTags: ["Customers"],
        }),
    }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } =
    api;
