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