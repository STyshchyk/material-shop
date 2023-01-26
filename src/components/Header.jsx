import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = ({setCardOpen}) => {
    return (
        <AppBar position={"static"} sx={{marginBottom: 2}}>
            <Toolbar>
                <Typography
                    component={"h6"}
                    variant={"h5"}
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>
                <IconButton
                    color={"inherit"}
                    onClick={()=> setCardOpen(true)}
                >
                    <ShoppingBasket/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;