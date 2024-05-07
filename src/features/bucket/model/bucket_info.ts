export interface BucketInfoRoot {
    data: BucketInfoData
    status: boolean
    error: string
}

export interface BucketInfoData {
    bucket_id: number
    bucket_name: string
    bucket_key: string
}
