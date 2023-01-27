import React from 'react';
import {TextField} from "@mui/material";

const Search = (props) => {
    const {
        search,
        searchQuery
    } = props;
    return (<TextField
        id="filled-basic" label="Search" variant="standard"
        onChange={(e)=>searchQuery(e.target.value)}
        value={search}
        fullWidth
        sx={{color: "white", mb: 2}}
    >

    </TextField>);
};

export default Search;