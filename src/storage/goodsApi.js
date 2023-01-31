import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
    reducerPath: "goodsApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "https://dummyjson.com/products/"
        }),
    endpoints: (builder) => ({
        getGoods: builder.query({
            query(arg) {
                const {urls = "", limit = 4, skip = 0} = arg;
                return {
                    url: `${urls}`,
                    params: {
                        limit,
                        skip
                    }

                }
            }

            ,
        })
    })


})

export const {useGetGoodsQuery} = goodsApi;

