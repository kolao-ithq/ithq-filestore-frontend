export interface CreateBucketRoot {
  data: CreateBucketData
  status: boolean
}
  
export interface CreateBucketData { 
  bucket_id: number
  bucket_name: string
  bucket_key: string
}


export interface UploadFileRoot {
  data: UploadFileData
  status: boolean
  error: string
}

export interface UploadFileData { 
  bucket: string
  file: any
  // bucket_id: number
  // bucket_name: string
  // bucket_key: string
}

export interface UploadPayload {
  bucket: string
  file: any
}


export interface DeleteBucketModel {
  error: string
  data: string
  status: boolean
  bucketName: string
}


export interface DeleteFileModel {
  error: string
  data: string
  status: boolean
  fileName: string
}
