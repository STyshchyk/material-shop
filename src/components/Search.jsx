import React from 'react';
import {TextField} from "@mui/material";

const Search = (props) => {
    const {onChange, value} = props;
    return (<TextField
        id="filled-basic" label="Search" variant="standard"
        onChange={onChange}
        value = {value}
        fullWidth
        sx={{color: "white", mb: 2}}
    >

    </TextField>);
};

export default Search;