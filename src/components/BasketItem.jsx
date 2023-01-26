import React from 'react';
import {IconButton, ListItem, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";

const BasketItem = (props) => {
    const {
        deleteFromBusket = Function.prototype,
        basketElem
    } = props
    return (
        <ListItem sx={{display: "flex"}}>
            <Typography
                variant={"body2"}
                component={"span"}
            >
                {basketElem.title} {basketElem.price} x {basketElem.quantity}
            </Typography>
            <IconButton
                sx={{marginLeft:"auto"}}
                onClick={() => deleteFromBusket(basketElem.id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;