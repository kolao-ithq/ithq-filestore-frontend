export interface BucketItemModel {
    data: DataModel[]
    status: boolean
}

export interface DataModel {
    name: string
    type: string
    file_type: string
}
  