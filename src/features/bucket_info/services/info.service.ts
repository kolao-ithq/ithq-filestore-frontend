"use server"
import ApiClinet from "@/lib/api_client"
import { BucketInfoModel } from "../models/info.model"
import { AxiosError } from "axios"


const FetchInfo = async (): Promise<BucketInfoModel> => {
    try {
        const res = await ApiClinet.getMethodWithToken('/api/v1/bucket/info/LCC')
        const data: BucketInfoModel = res.data
        return data
    } catch (error) {
        const err = error as AxiosError
        const dataError: BucketInfoModel = err.response?.data as BucketInfoModel
        console.log(dataError)
        return dataError
    }
}

export { FetchInfo }