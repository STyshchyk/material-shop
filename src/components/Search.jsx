import React from 'react';
import {Box, Button, TextField} from "@mui/material";

// let _ = require('lodash')
const Search = (props) => {
    const [search, setSearch] = React.useState("")
    const {
        searchQuery = Function.prototype
    } = props;
    return (
        <>
            <Box>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}
                      style={{display: "flex", flexDirection: "row"}}
                >
                    <TextField
                        id="filled-basic" label="Search" variant="standard"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        fullWidth
                        sx={{color: "white", mb: 2}}
                        type={"input"}
                    >

                    </TextField>
                    <Button
                        variant="contained"
                        onClick={() => {
                            searchQuery(search)
                        }}
                        sx={{ml: 3, height: "30px", alignSelf:"center"}}
                    >Search
                    </Button>

                </form>
            </Box>

        </>
    );
};

export default Search;