import { configureStore } from "@reduxjs/toolkit";
import togglePricesAndServicesSlice from "./Slices/togglePricesAndServicesSlice";
import openWindowPricesAndServicesSlice from "./Slices/openWindowPricesAndServicesSlice";

const store = configureStore({
    reducer: {
        togglePricesAndServices: togglePricesAndServicesSlice,
        openWindowPricesAndServices: openWindowPricesAndServicesSlice
    }
});

export default store;
