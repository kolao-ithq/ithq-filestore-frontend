export interface CreateBucketRoot {
  data: CreateBucketData
  status: boolean
}
  
export interface CreateBucketData { 
  bucket_id: number
  bucket_name: string
  bucket_key: string
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




export interface UploadFileRoot {
  data: UploadFileData
  status: boolean
  error: string
}

export interface UploadFileData {
  bucket: string
  file_name: string
  file_path: string
}


export interface UploadFilePayload {
  formData: FormData
  apiKey: string
}
