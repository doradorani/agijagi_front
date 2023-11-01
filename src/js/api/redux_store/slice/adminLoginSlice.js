import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    adminState : false,
};

const adminLoginSlice = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {
        setState: (state, action) => {
            state.adminState = action.payload;
        },
    },
});

export const userStateAction = adminLoginSlice.actions;
export default adminLoginSlice.reducer;