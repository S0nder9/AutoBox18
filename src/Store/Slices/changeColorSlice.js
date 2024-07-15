import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorState: false
};

export const changeColorState = createSlice({
    name: "changeColorSlice",
    initialState,
    reducers: {
        changeState(state) {
            state.colorState = !state.colorState;
        },
    }
});

export const { changeState } = changeColorState.actions;

export default changeColorState.reducer;
