import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entrySliceOpenState: false,
    changingTheLayoutState: false
};

export const entrySlice = createSlice({
    name: "togglePricesAndServices",
    initialState,
    reducers: {
        entrySliceOpen(state) {
            state.entrySliceOpenState = true;
        },
        entrySliceClose(state) {
            state.entrySliceOpenState = false;
        },

        changingTheLayout(state) {
            state.changingTheLayoutState = !state.changingTheLayoutState;
        },
    }
});

export const { entrySliceOpen, entrySliceClose, changingTheLayout } = entrySlice.actions;

export default entrySlice.reducer;
