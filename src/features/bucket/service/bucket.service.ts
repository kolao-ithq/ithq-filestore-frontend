"use server"
import ApiClinet from "@/lib/api_client";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BucketRoot } from "../model/bucket";
import { DeleteBucketModel } from "../model/delete_bucket";
import { BucketInfoRoot } from "../model/bucket_info";
import { UploadFilePayload, UploadFileRoot } from "../model/upload_file";



export const FetchBuckets = async (): Promise<BucketRoot> => {
    try {
        const res = await ApiClinet.get('/api/v1/bucket', true);
        const data: BucketRoot = res.data;
        console.log(data);

        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: BucketRoot = err.response?.data as BucketRoot;
        return dataError;
    }
}

export const CreateBucket = async (name: string): Promise<BucketRoot> => {
    try {
        const res = await ApiClinet.post('/api/v1/bucket', {
            "bucket_name": name.replace(/\s/g, "-")
        }, true);
        const data: BucketRoot = res.data;
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: BucketRoot = err.response?.data as BucketRoot;
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


export const GetBucketInfo = async (name: string): Promise<BucketInfoRoot> => {
    try {
        const res = await ApiClinet.get(`/api/v1/bucket/info/${name}`, true);
        const data: BucketInfoRoot = res.data;
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: BucketInfoRoot = err.response?.data as BucketInfoRoot;
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
