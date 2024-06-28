import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardToggles: {}
};

export const openWindowPricesAndServicesSlice = createSlice({
    name: "openWindowPricesAndServices",
    initialState,
    reducers: {
        toggleCard(state, action) {
            const { id } = action.payload;
            state.cardToggles[id] = !state.cardToggles[id];
        }
    }
});

export const { toggleCard } = openWindowPricesAndServicesSlice.actions;

export default openWindowPricesAndServicesSlice.reducer;
