import React from 'react';
import CardItem from "./CardItem";
import {Grid} from "@mui/material";

const CardList = (props) => {

    const {
        items,
        isLoading,
        getItem = Function.prototype

    } = props;
    console.log("render")
    return (
        <Grid container spacing={2}>
            {!isLoading && items.length > 0 ?
                items.map(elem =>
                    <CardItem
                        cardElem={elem}
                        key={elem.title}
                        cardImg={elem.thumbnail}
                        cardTitle={elem.title}
                        cardDesk={elem.description}
                        cardPrice={elem.price}
                        getItem={getItem}
                    />
                )

                : <h1>Loading</h1>
            }
        </Grid>
    );
};

export default CardList;