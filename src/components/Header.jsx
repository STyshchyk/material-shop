import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = ({setCardOpen, badgeLen = 0}) => {
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
                <Badge
                color={"secondary"}
                badgeContent={badgeLen}
                >
                    <IconButton
                        color={"inherit"}
                        onClick={() => setCardOpen(true)}
                    >
                        <ShoppingBasket/>
                    </IconButton>
                </Badge>
            </Toolbar>
        </AppBar>
    );
};

export default Header;