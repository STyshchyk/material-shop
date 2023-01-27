import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Filter = (props) => {
    const {
        cardItems = [],
        removeFromBasket = Function.prototype,
        isCardOpen,
        setCardOpen = Function.prototype
    } = props;
    return (
        <Drawer
            anchor={"right"}
            open={isCardOpen}
            onClose={setCardOpen}

        >
            <List
                sx={{
                    width: {xs: "320px", sm: "400px", lg: "500px"},
                    display: "flex",
                    flexDirection: "column"

                }}
            >
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={"Basket"}/>
                </ListItem>
                <Divider/>
                {
                    cardItems.length <= 0 ?
                        <ListItem
                            sx={{
                                margin: "0 auto",
                                textAlign: "center"
                            }}
                        >
                            Basket is empty
                        </ListItem>
                        : <>
                            {cardItems.map((elem) => (
                                <BasketItem
                                    key={elem.title}
                                    removeFromBasket={removeFromBasket}
                                    basketElem={elem}
                                />))}
                            <Divider/>
                        </>


                }
            </List>
        </Drawer>
    );
};

export default Basket;