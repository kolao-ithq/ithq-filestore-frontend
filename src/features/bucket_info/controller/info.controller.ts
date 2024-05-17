"use client"
import { RootState } from "@/lib/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FetchInfo } from "../services/info.service"
import { BucketInfoModel } from "../models/info.model"

type StateProp = {
    infoLoading: boolean,
    info?: BucketInfoModel | null
}

const initialValue: StateProp = {
    infoLoading: false,
    info: null
}

const infoController = createSlice({
    name: "infoController",
    initialState: initialValue,
    reducers: {
    
    },
    extraReducers: (builder) => {
        builder.addCase(infoThunk.pending, (state) => {
            state.infoLoading = true; 
        }).addCase(infoThunk.fulfilled, (state, action) => {
            state.infoLoading = false
            state.info = action.payload
        })
    }
})

export const infoThunk = createAsyncThunk( 'server/infoThunk',  async () => await FetchInfo() )


export const infoSelector = (state: RootState) => state.infoController

export const {  } = infoController.actions

export default infoController.reducer;