import { configureStore } from "@reduxjs/toolkit";
import logisticSlice from "./Slice"

const Store=configureStore({
    reducer:{
        logistic:logisticSlice
    }
})

export default Store