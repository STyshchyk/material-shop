import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {useGetGoodsQuery, useGetItemQuery} from "../storage/goodsApi";

const Product = () => {
    const {id} = useParams();
    const {data, fetchData, isLoading, setFetchData, error} = useGetGoodsQuery({url: `/${id}`, limit: 10, skip : 0})
    console.log(data)

    return (
        <div>
            {data && !isLoading ?
            <>
                {data.title}
                <br/>
                {data.description}

            </>
                :
                <>
                <h1>Loading</h1>
                </>
            }
        </div>
    );
};

export default Product;