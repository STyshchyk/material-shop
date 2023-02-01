import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
    reducerPath: "goodsApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "https://dummyjson.com/products"
        }),
    endpoints: (build) => ({
        getGoods: build.query({
            query(arg) {
                const {url, limit, skip} = arg;
                return{
                    url: `${url}`,
                    params: {
                        limit,
                        skip
                    }
                }
            }

        }),
        getItem: build.query({
            query: (id) => `/${id}`,

        })
    })


})

export const {useGetGoodsQuery, useGetItemQuery} = goodsApi;

