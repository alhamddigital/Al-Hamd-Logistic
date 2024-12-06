import { createSlice } from "@reduxjs/toolkit";

const logisticSlice = createSlice({
    name: "logistic",
    initialState: {
        transportHomeTop: 1,
        transportServicesTop: 1,
        transportAboutTop: 1,
        transportExploreTop: 1,
        transportContactTop: 1,
    },
    reducers: {
        transportHome: (state, action) => {
            state.transportHomeTop = action.payload
        },
        transportServices: (state, action) => {
            state.transportServicesTop = action.payload
        },
        transportAbout: (state, action) => {
            state.transportAboutTop = action.payload
        },
        transportExplore: (state, action) => {
            state.transportExploreTop = action.payload
        },
        transportContact: (state, action) => {
            state.transportContactTop = action.payload
        }
    }
})

export const {transportHome,transportServices,transportAbout,transportExplore,transportContact} = logisticSlice.actions
export default logisticSlice.reducer