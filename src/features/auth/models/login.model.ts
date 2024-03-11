export interface LoginModel {
    data: DataModel
    error: string
    status: boolean
}

export interface DataModel {
    access_token: string
    refresh_token: string
}



export interface LoginPayload {
    username: string
    password: string
}
