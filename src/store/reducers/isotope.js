import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterDrawer: false,
    category: 'all',
    price: {
        min: 0,
        max: 1999
    },
    rating: 3
};

const isotope = createSlice({
    name: 'isotope',
    initialState: initialState,
    reducers: {
        setFilterDrawer(state, action) {
            state.filterDrawer = action.payload.filterDrawer;
        },
        setPrice(state, action) {
            const { min, max } = action.payload.price;
            state.price = { min, max };
        },
        setCategory(state, action) {
            state.category = action.payload.category;
        },
        setRating(state, action) {
            state.rating = action.payload.rating;
        }
    }
});

export default isotope.reducer;
export const { setPrice, setRating, setCategory, setFilterDrawer } = isotope.actions;
