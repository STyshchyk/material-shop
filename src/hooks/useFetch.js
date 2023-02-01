import React from "react";
import {useGetGoodsQuery} from "../storage/goodsApi";

export default function useFetch(url, limit, skip = 0) {
    const [fetchData, setFetchData] = React.useState({
        url: url,
        limit: limit,
        skip: skip,
    })
    const {data, error, isLoading} = useGetGoodsQuery({
        url: fetchData.url,
        limit: fetchData.limit,
        skip: fetchData.skip
    });



    return {data, isLoading, fetchData, error, setFetchData}
}