import axios from "axios";
import React from "react";

export default function useFetch(url, limit, skip = 0) {
    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [error, setError] = React.useState("error")
    const [fetchData, setFetchData] = React.useState({
        url: url,
        limit: limit,
        skip: skip
    })
    const [pagesCount, setPagesCount] = React.useState(1)

    React.useEffect(() => {
        setLoading(true)
        axios
            .get(fetchData.url, {
                params: {
                    limit: fetchData.limit,
                    skip: fetchData.skip
                }
            })
            .then((response) => {
                setItems(response.data)
                setPagesCount(Math.ceil(response.data.total / fetchData.limit))
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [fetchData.url, fetchData.skip, fetchData.limit])

    return {items, isLoading, fetchData, setFetchData, pagesCount}
}