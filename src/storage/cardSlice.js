import {createSlice} from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        cardSlice: [],
        pagesCount: 1,
        error: "",
        isLoading: false
    },
    reducers: {
        addBasket(state, action) {
            state.cardSlice = action.payload;
        },
        setPages(state, action) {
            state.pagesCount = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})


export const {addBasket, setPages, setError} = cardSlice.actions;

export default cardSlice.reducer;
