import React from 'react';
import CardItem from "./CardItem";
import {CircularProgress, Grid} from "@mui/material";

const CardList = (props) => {
    const {
        items,
        isLoading,
        getItem = Function.prototype

    } = props;
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

                : <CircularProgress color="secondary" />
            }
        </Grid>
    );
};

export default CardList;