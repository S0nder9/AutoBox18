import { configureStore } from "@reduxjs/toolkit";
import entrySlice from "./Slices/entrySlice";
import openWindowPricesAndServicesSlice from "./Slices/openWindowPricesAndServicesSlice";
import changeColorState from "./Slices/changeColorSlice";

const store = configureStore({
  reducer: {
    entrySlice,
    changeColorState,
    openWindowPricesAndServices: openWindowPricesAndServicesSlice
  }
});

export default store;
