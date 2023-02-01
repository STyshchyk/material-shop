import React from 'react';
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import {Container, Pagination} from "@mui/material";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Basket from "./components/Basket";
import Snack from "./components/Snack";

const App = () => {
    const [isCardOpen, setCardOpen] = React.useState(false)
    const [cardItems, setCardItems] = React.useState([])
    const [isSnakeOpen, setSnakeOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [page, setPage] = React.useState(1)
    const {data, isLoading, fetchData, setFetchData} = useFetch("", 12, 0)
    // console.log(data)
 // return <h1>hello</h1>

    const handleChange = (event, value) => {
        setPage(value)
    };

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
        if (searchQuery !== "" && !isLoading) {

            setFetchData({...fetchData, url: `https://dummyjson.com/products/search?q=${searchQuery}`})

            setSearchQuery("")
        } else if (!isLoading) return [...data?.products];

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
            {
                data !== undefined && !isLoading ? <>
                        <Pagination
                            count={Math.floor(data?.total / fetchData.limit)}
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
                    </>
                    : <>

                    </>
            }

        </div>
    )
};

export default App;