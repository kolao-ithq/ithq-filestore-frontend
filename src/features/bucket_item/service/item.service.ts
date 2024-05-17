"use server"
import ApiClinet from "@/lib/api_client"
import { BucketItemModel } from "../models/item.model"
import { AxiosError } from "axios"


const FetchItem = async (): Promise<BucketItemModel> => {
    try {
        const res = await ApiClinet.getMethodWithToken('/api/v1/bucket/get-items/LCC')
        const data: BucketItemModel = res.data
        return data
    } catch (error) {
        const err = error as AxiosError
        const dataError: BucketItemModel = err.response?.data as BucketItemModel
        console.log(dataError)
        return dataError
    }
}

export { FetchItem }