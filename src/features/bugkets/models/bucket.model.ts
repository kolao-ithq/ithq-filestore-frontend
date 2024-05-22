export interface RootBugketModel {
    data: BugketModel[]
    status: boolean
}
  
export interface BugketModel {
    name: string
    type: string
    file_type: string
}

// https://transform.tools/json-to-typescript
// https://react-redux.js.org/tutorials/quick-start

export interface BucketInfoModel {
    data: InfoModel
    status: boolean
}

export interface InfoModel {
    bucket_id: number
    bucket_name: string
    bucket_key: string
}


export interface BucketItemModel {
    data: ItemModel[]
    status: boolean
}

export interface ItemModel {
    name: string
    type: string
    file_type: string
}


// export interface CreateModel {
//     data: AddModel
//     error: string
//     status: boolean
// }

// export interface AddModel {
//     bucket_name: string
// }

// export interface AddPayload {
//     bucket_name: string
// }