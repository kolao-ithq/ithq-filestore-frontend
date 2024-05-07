import { RootState } from "@/lib/store"
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BucketModel, BucketRoot } from "../model/bucket";
import { CreateBucket, DeleteBucket, FetchBuckets, GetBucketInfo } from "../service/bucket.service";
import { DeleteBucketModel } from "../model/delete_bucket";
import { toast } from 'react-toastify';
import { BucketInfoData, BucketInfoRoot } from "../model/bucket_info";

export const fetchBuckets = createAsyncThunk("bucket/fetchBuckets", async () => await FetchBuckets());
export const createBucket = createAsyncThunk("bucket/createBucket", async (payload: string) => await CreateBucket(payload));
export const deleteBucket = createAsyncThunk("bucket/deleteBucket", async (payload: string) => await DeleteBucket(payload));
export const getBucketInfo = createAsyncThunk("bucket/getBucketInfo", async (payload: string) => await GetBucketInfo(payload));


type StateProp = {
    BucketLoading: boolean,
    Buckets: BucketModel[] | null,
    Error: string
    BucketInfo: BucketInfoData | null,
}

const initialValue: StateProp = {
    BucketLoading: false,
    Buckets: [],
    Error: "",
    BucketInfo: null
}

const bucketController = createSlice({
    name: "bucketController",
    initialState: initialValue,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state, action) => {
                    if (action.type.includes("fetchBuckets")) {
                        state.BucketLoading = true;
                    }
                },
            ).addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state, action: PayloadAction<BucketRoot | DeleteBucketModel | BucketInfoRoot>) => {
                    state.BucketLoading = false;
                    if (action.type.includes("fetchBuckets")) {
                        state.Buckets = (action.payload as BucketRoot)?.data as BucketModel[];
                    } else if (action.type.includes("createBucket")) {
                        var data: BucketRoot = action.payload as BucketRoot
                        if (data.status) {
                            var bucket = {
                                name: (data.data as BucketModel).bucket_name
                            } as BucketModel
                            state.Buckets?.push(bucket)
                            toast.success(`${bucket.name} successfully created! 🚀`);
                        } else {
                            toast.error(`${data.error}`);
                        }
                    } else if (action.type.includes("deleteBucket")) {
                        var deleteResult: DeleteBucketModel = action.payload as DeleteBucketModel
                        if (deleteResult.status) {
                            toast.success(`${deleteResult.bucketName} successfully removed! 🚀`);
                            state.Buckets = state.Buckets?.filter(bucket => bucket.name !== deleteResult.bucketName)!;
                        } else {
                            toast.error(`${deleteResult.error}`);
                        }
                    } else if (action.type.includes("getBucketInfo")) {
                        var bucketInfo: BucketInfoRoot = action.payload as BucketInfoRoot
                        if (bucketInfo.status) {
                            toast.success(`${bucketInfo.data.bucket_name} successfully removed! 🚀`);
                            state.BucketInfo = bucketInfo.data as BucketInfoData
                        } else {
                            toast.error(`${bucketInfo.error}`);
                        }
                    }
                },
            );
    }
})

export const bucketSelector = (state: RootState) => state.bucketController;
export const { } = bucketController.actions
export default bucketController.reducer;