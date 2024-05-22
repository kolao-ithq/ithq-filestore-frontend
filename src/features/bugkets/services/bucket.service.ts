"use server"
import ApiClinet from "@/lib/api_client"
import { RootBugketModel, BucketInfoModel, BucketItemModel } from "../models/bucket.model"
import { AxiosError } from "axios"
import { CreateBucketRoot, DeleteBucketModel, DeleteFileModel, UploadFilePayload, UploadFileRoot } from "../models/create_bucket_model"


const FetchBucket = async (): Promise<RootBugketModel> => {
    try {
        const res = await ApiClinet.getMethodWithToken('/api/v1/bucket');
        const data: RootBugketModel = res.data;
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: RootBugketModel = err.response?.data as RootBugketModel;
        console.log(dataError);
        return dataError;
    }
}


const FetchInfo = async (name: String): Promise<BucketInfoModel> => {
    console.log(`/api/v1/bucket/info/${name}`);
    try {
        const res = await ApiClinet.getMethodWithToken(`/api/v1/bucket/info/${name}`)
        const data: BucketInfoModel = res.data
        return data
    } catch (error) {
        const err = error as AxiosError
        const dataError: BucketInfoModel = err.response?.data as BucketInfoModel
        console.log(dataError)
        return dataError
    }
}


const FetchItem = async (name: string): Promise<BucketItemModel> => {
    try {
        const res = await ApiClinet.getMethodWithToken(`/api/v1/bucket/get-items/${name}`)
        const data: BucketItemModel = res.data
        return data
    } catch (error) {
        const err = error as AxiosError
        const dataError: BucketItemModel = err.response?.data as BucketItemModel
        console.log(dataError)
        return dataError
    }
}


const AddBucket = async (bucketName: string): Promise<CreateBucketRoot> => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
        const res = await ApiClinet.post('/api/v1/bucket', {
            "bucket_name" : bucketName
        },true);
        const data: CreateBucketRoot = res.data;
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: CreateBucketRoot = err.response?.data as CreateBucketRoot;
        console.log(dataError);
        return dataError;
    }
}


export const UploadFile = async (payload: UploadFilePayload): Promise<UploadFileRoot> => {
    try {
        const res = await ApiClinet.postWITHAPIKEY(`api/v1/file/upload`, payload.formData, true, payload.apiKey);
        const data: UploadFileRoot = res.data;
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: UploadFileRoot = err.response?.data as UploadFileRoot;
        return dataError;
    }
}


export const DeleteBucket = async (name: string): Promise<DeleteBucketModel> => {
    try {
        const res = await ApiClinet.del(`/api/v1/bucket/${name}`, true);
        const data: DeleteBucketModel = res.data;
        data.bucketName = name
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: DeleteBucketModel = err.response?.data as DeleteBucketModel;
        return dataError;
    }
}


export const DeleteFile = async (name: string): Promise<DeleteFileModel> => {
    try {
        const res = await ApiClinet.del(`/api/v1/file/delete/${name}`, true);
        const data: DeleteFileModel = res.data;
        data.fileName = name
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: DeleteFileModel = err.response?.data as DeleteFileModel;
        return dataError;
    }
}


export { FetchBucket, FetchInfo, FetchItem, AddBucket }