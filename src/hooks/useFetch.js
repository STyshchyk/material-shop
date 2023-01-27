import axios from "axios";
import React from "react";

export default function useFetch (url){
    const [items, setItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [error, setError] = React.useState("error")


    React.useEffect(()=>{
        setLoading(true)
        axios
            .get(url)
            .then((response)=>{
                setItems(response.data)
            })
            .catch((err)=>{
                setError(err)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [url])

    return{items, isLoading, error}
}