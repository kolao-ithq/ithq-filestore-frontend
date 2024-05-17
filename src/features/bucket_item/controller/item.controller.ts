"use client"
import { RootState } from "@/lib/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { FetchItem } from "../service/item.service"
import { BucketItemModel } from "../models/item.model"
import { Item } from "@radix-ui/react-dropdown-menu"

type StateProp = {
    itemLoading: boolean,
    item: BucketItemModel[]
}

const initialValue: StateProp = {
    itemLoading: false,
    item: []
}

const itemController = createSlice({
    name: "itemController",
    initialState: initialValue,
    reducers: {
        setItem(state, action) {
            state.item = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(itemThunk.pending, (state) => {
            state.itemLoading = true
        }).addCase(itemThunk.fulfilled, (state) => {
            state.itemLoading = false
        })
    }
})

export const itemThunk = createAsyncThunk( 'server/itemThunk', async () => await FetchItem() )


export const itemSelector = (state: RootState) => state.itemController

export const { setItem } = itemController.actions

export default itemController.reducer