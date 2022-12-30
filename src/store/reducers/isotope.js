import { createSlice } from '@reduxjs/toolkit';
import { findIndex } from 'lodash';

const initialState = {
    filterDrawer: true,
    categories: [],
    price: {
        min: 0,
        max: 1999
    },
    rating: 3,
    filterFraction: {
        categories: [],
        brand: []
    }
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
        setCategories(state, action) {
            state.categories = action.payload.categories;
        },
        setRating(state, action) {
            state.rating = action.payload.rating;
        },
        setFilterFraction(state, action) {
            const { type, name, include } = action.payload;

            if (type === 'categories') {
                const index = state.filterFraction.categories.findIndex((cate) => cate === name);
                if (include) {
                    if (index >= 0) return;
                    state.filterFraction.categories.push(name);
                } else {
                    if (index === -1) return;
                    state.filterFraction.categories.splice(index, 1);
                }
            }
        }
    }
});

export default isotope.reducer;
export const { setPrice, setRating, setCategories, setFilterDrawer, setFilterFraction } = isotope.actions;
