import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./Banner/bannerSlice";

const store = configureStore({
    reducer:{
        bannerState: bannerSlice.reducer,
    }
})

export default store;