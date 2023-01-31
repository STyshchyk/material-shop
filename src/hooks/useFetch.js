import React from "react";
import {useGetGoodsQuery} from "../storage/goodsApi";

export default function useFetch(url, limit, skip = 0) {
    const { data, error, isLoading } = useGetGoodsQuery({
        url,
        limit,
        skip
    });
    const [fetchData, setFetchData] = React.useState({
        url: url,
        limit: limit,
        skip: skip,
    })
    const [pagesCount, setPagesCount] = React.useState(1)


    return {data, isLoading, fetchData, error, setFetchData, pagesCount}
}