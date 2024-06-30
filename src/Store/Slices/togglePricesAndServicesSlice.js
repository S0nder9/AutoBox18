import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToggleWindow: false
};

export const togglePricesAndServicesSlice = createSlice({
    name: "togglePricesAndServices",
    initialState,
    reducers: {
        toggleWindow(state) {
            state.isToggleWindow = !state.isToggleWindow;
        }
    }
});

export const { toggleWindow } = togglePricesAndServicesSlice.actions;

export default togglePricesAndServicesSlice.reducer;
