// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    isLoggedIn: false
};

// ==============================|| SLICE - MENU ||============================== //

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            // should validate the token
            if (localStorage.getItem('token')) {
                state.isLoggedIn = true;
            }
        },
        logout(state, action) {
            localStorage.removeItem('token');
            state.isLoggedIn = false;
        }
    }
});

export default auth.reducer;

export const { login, logout } = auth.actions;
