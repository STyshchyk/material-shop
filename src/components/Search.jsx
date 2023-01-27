import React from 'react';
import {TextField} from "@mui/material";

let _ = require('lodash')
const Search = (props) => {
    const {
        searchQuery = Function.prototype
    } = props;
    return (<TextField
        id="filled-basic" label="Search" variant="standard"
        onChange={
            _.debounce((e) => {
                searchQuery(e.target.value)
            }, 300)

        }
        fullWidth
        sx={{color: "white", mb: 2}}
    >

    </TextField>);
};

export default Search;