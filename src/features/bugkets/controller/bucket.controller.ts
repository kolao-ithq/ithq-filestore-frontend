"use client"
import { RootState } from "@/lib/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { BugketModel, BucketInfoModel, BucketItemModel } from "../models/bucket.model"
import { FetchBucket, FetchInfo, FetchItem, AddBucket, DeleteBucket, DeleteFile, UploadFile } from "../services/bucket.service"
import { DeleteFilePayload, UploadFilePayload } from "../models/create_bucket_model"

type StateProp = {
    bucketLoading: boolean,
    infoLoading: boolean,
    itemLoading: boolean,
    addLoading: boolean, 
    isDeleted: boolean,
    isFileDeleted: boolean,
    isFileUploaded: boolean,
    buckets: BugketModel[],
    info?: BucketInfoModel | null,    
    item: BucketItemModel[]
}

const initialValue: StateProp = {
    bucketLoading: false,
    infoLoading: false,
    itemLoading: false,
    addLoading: false,
    isDeleted: false,
    isFileDeleted: false,
    isFileUploaded: false,
    buckets: [],
    info: null,
    item: []
}

const bucketController = createSlice({
    name: "bucketController",
    initialState: initialValue,
    reducers: {
        setBugkets(state, action) {
            state.buckets = action.payload
        },
        setItem(state, action) {
            state.item = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(bucketThunk.pending, (state) => { state.bucketLoading = true; })
        .addCase(bucketThunk.fulfilled, (state) => { state.bucketLoading = false; })
        
        .addCase(infoThunk.pending, (state) => { state.bucketLoading = true; })
        .addCase(infoThunk.fulfilled, (state, action) => {
            state.bucketLoading = false
            state.info = action.payload 
        })
        
        .addCase(itemThunk.pending, (state) => { state.itemLoading = true })
        .addCase(itemThunk.fulfilled, (state) => { state.itemLoading = false })
        
        .addCase(createThunk.pending, (state) => { state.addLoading = true })
        .addCase(createThunk.fulfilled, (state) => { state.addLoading = false }) 
        
        .addCase(deleteBucket.pending, (state) => { state.isDeleted = true })
        .addCase(deleteBucket.fulfilled, (state) => { state.isDeleted = false }) 

        .addCase(deleteFile.pending, (state) => { state.isFileDeleted = true })
        .addCase(deleteFile.fulfilled, (state) => { state.isFileDeleted = false }) 

        .addCase(uploadFile.pending, (state) => { state.isFileUploaded = true })
        .addCase(uploadFile.fulfilled, (state) => { state.isFileUploaded = false }) 
    }
})

export const bucketThunk = createAsyncThunk( 'server/bucketThunk', async () => await FetchBucket() );
export const infoThunk = createAsyncThunk( 'server/infoThunk',  async (payload: string) => await FetchInfo(payload) )
export const itemThunk = createAsyncThunk( 'server/itemThunk', async (payload: string) => await FetchItem(payload) )
export const createThunk = createAsyncThunk( 'server/createThunk', async (payload: string) => await AddBucket(payload) );
export const deleteBucket = createAsyncThunk( "server/deleteBucket", async (payload: string) => await DeleteBucket(payload));
export const deleteFile = createAsyncThunk( "server/deleteFile", async (payload: DeleteFilePayload) => await DeleteFile(payload));
export const uploadFile = createAsyncThunk("server/uploadFile", async (payload: UploadFilePayload) => await UploadFile(payload));

export const bucketSelector = (state: RootState) => state.bucketController;
export const { setBugkets, setItem } = bucketController.actions

export default bucketController.reducer;

