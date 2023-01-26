import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const Snack = ({isOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={6000}
        >
            <Alert
                severity={"success"}
            >
                Item added to basket
            </Alert>
        </Snackbar>
    );
};

export default Snack;