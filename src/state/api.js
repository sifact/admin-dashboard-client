import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        // baseUrl: process.env.VITE_APP_BASE_URL,
        baseUrl: import.meta.env.VITE_APP_BASE_URL,
    }),

    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Products",
        "Customers",
        "Transactions",
        "Geography",
        "Sales",
        "Admins",
    ],
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
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "api/v1/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }),
        getGeography: build.query({
            query: () => `api/v1/client`,
            providesTags: ["Geography"],
        }),
        getSales: build.query({
            query: () => `api/v1/sales`,
            providesTags: ["Sales"],
        }),
        getAdmins: build.query({
            query: () => `api/v1/management`,
            providesTags: ["Admins"],
        }),
    }),
});

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
} = api;
