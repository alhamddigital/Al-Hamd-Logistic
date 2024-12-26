import { createSlice } from "@reduxjs/toolkit";

const logisticSlice = createSlice({
    name: "logistic",
    initialState: {
        transportHomeTop:0,
        transportServiceTop:0,
        transportAboutTop: 0,
        transportExploreTop: 0,
        logisticsNewsTop:0,
        transportClientsTop: 0,
        transportContactTop: 0,
    },
    reducers: {
        transportHome: (state, action) => {
            state.transportHomeTop = action.payload
        },
        transportService: (state, action) => {
            state.transportServiceTop = action.payload
        },
        transportAbout: (state, action) => {
            state.transportAboutTop = action.payload
        },
        logisticsNews: (state, action) => {
            state.logisticsNewsTop = action.payload
        },
        transportClients: (state, action) => {
            state.transportClientsTop = action.payload
        },
        transportContact: (state, action) => {
            state.transportContactTop = action.payload
        }
    }
})

export const {transportHome,transportService,transportAbout,logisticsNews,transportClients,transportContact} = logisticSlice.actions
export default logisticSlice.reducer