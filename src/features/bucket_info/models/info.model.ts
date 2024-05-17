export interface BucketInfoModel {
    data: DataModel
    status: boolean
}

export interface DataModel {
    bucket_id: number
    bucket_name: string
    bucket_key: string
}