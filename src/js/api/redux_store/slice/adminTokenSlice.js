import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tokenName : '',
    tokenExpired : '',
};

const adminTokenSlice = createSlice({
    name: 'adminToken',
    initialState,
    reducers: {
        setAdminTokenName: (state, action) => {
            state.tokenName = action.payload;
        },
        setAdminTokenExpired : (state, action) => {
            state.tokenExpired = action.payload;
        }
    },
});

export const adminTokenAction = adminTokenSlice.actions;
export default adminTokenSlice.reducer;