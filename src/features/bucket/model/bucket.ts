export interface BucketRoot {
    data: BucketModel[] | BucketModel
    status: boolean,
    error: string
}

export interface BucketModel {
    name: string
    bucket_name: string
    type: string
    file_type: string
}