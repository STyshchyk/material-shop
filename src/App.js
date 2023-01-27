import './App.css';
import React, {useState} from 'react';
import {Container, Pagination} from "@mui/material";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Snack from "./components/Snack";
import useFetch from "./hooks/useFetch";


function App() {
    const [isCardOpen, setCardOpen] = useState(false)
    const [cardItems, setCardItems] = React.useState([])
    const [isSnakeOpen, setSnakeOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [page, setPage] = React.useState(1)
    const {items, isLoading, fetchData, setFetchData, pagesCount} = useFetch("https://dummyjson.com/products/", 12, 0)

    const handleChange = (event, value) => {
        setPage(value)
    };

    // return <h1>Hello</h1>
    function getItem(basketItem) {
        let obj = cardItems.find((elem) => {
            if (elem.title === basketItem.title) {
                elem.quantity += 1;
                setCardItems([...cardItems])
                return true;
            }
        });
        if (!obj) {
            const newItem = {
                ...basketItem,
                quantity: 1
            }
            setCardItems([...cardItems, newItem])
        }
        setSnakeOpen(true)
    }

    function removeFromBasket(basketId) {
        setCardItems([...cardItems].filter(elem => {
            return elem.id !== basketId;
        }))
    }

    function getSortedItems() {
        if (searchQuery !== "" && !isLoading) return [...items?.products].filter(elem => {
                return elem.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            }
        )
        else if (!isLoading) return [...items?.products];
    }

    const sortedItems = getSortedItems();

    return (
        <div className="App">
            <Header
                setCardOpen={setCardOpen}
                badgeLen={cardItems.length}
            />
            <Container>
                <Search
                    searchQuery={setSearchQuery}
                />
                <CardList items={sortedItems}
                          getItem={getItem}
                          isLoading={isLoading}
                />
            </Container>
            <Basket
                cardItems={cardItems}
                removeFromBasket={removeFromBasket}
                anchor={"left"}
                isCardOpen={isCardOpen}
                setCardOpen={() => setCardOpen(false)}
            />
            <Snack
                isOpen={isSnakeOpen}
                handleClose={() => setSnakeOpen(false)}
            />
            <Pagination
                count={pagesCount}
                page={page}
                onChange={(e, value) => {
                    handleChange(e, value)
                    setFetchData({...fetchData, skip: fetchData.limit * value - fetchData.limit})
                }}
                size="large"
                color="primary"
                variant="outlined"
                shape="rounded"
                sx={{mt: 3, mb: 3, display: "flex", justifyContent: "center"}}
            />
        </div>

    );
}

export default App;
