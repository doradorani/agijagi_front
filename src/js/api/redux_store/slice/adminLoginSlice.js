import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adminState: false,
};

const adminLoginSlice = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {
        setAdminState: (state, action) => {
            state.adminState = action.payload;
        },
    },
});

export const adminStateAction = adminLoginSlice.actions;
export default adminLoginSlice.reducer;
