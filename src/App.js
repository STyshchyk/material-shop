import './App.css';
import React, {useState} from 'react';
import {Container} from "@mui/material";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Search from "./components/Search";
import Basket from "./components/Basket";
import axios from "axios";
import Snack from "./components/Snack";


function App() {
    const [isCardOpen, setCardOpen] = useState(false)
    const [items, setItems] = React.useState();
    const [cardItems, setCardItems] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [isSnakeOpen, setSnakeOpen] = React.useState(false)
    React.useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=10")
            .then((response) => {
                setItems(response.data)
            })
            .catch((error) => {
                throw new Error(error)
            })
        setLoading(false)
    }, [])

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
    function filterSearch(query){
        if (query.length === 0)return items;
        else{
            setItems()
        }
    }

    return (
        <div className="App">
            <Header
                setCardOpen={setCardOpen}
                badgeLen={cardItems.length}
            />
            <Container>
                <Search/>
                <CardList items={items}
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
                handleClose={()=>setSnakeOpen(false)}
            />
        </div>
    );
}

export default App;
