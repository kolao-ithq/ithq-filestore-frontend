
import AppApiPath from "@/constants/api_path";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { cookies } from "next/headers";


axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;

const axiosInstance = axios.create({
    baseURL: AppApiPath.baseUrl,
    responseType: "json",
});

const getHttpHeaders1 = (isAuthenticated = false): AxiosRequestConfig => {
    const token: any = cookies().get('token')
    console.log("token: ", token);
    
    if (isAuthenticated) {
        return {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        };
    }
    return {};
};

const getHttpHeaders = (isAuthenticated = false, apiKey?: string, data?: any): AxiosRequestConfig => {
    const token: any = cookies().get('token')?.value
    if (isAuthenticated) {
        if (apiKey == null) {
            return {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            };
        } else {
            return {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "x-api-key": apiKey
                },
                data:data
            };
        }

    }
    return {};
};

const get = (path: string): Promise<AxiosResponse> =>
    axiosInstance.get(path, getHttpHeaders());

const getMethodWithToken = (path: string): Promise<AxiosResponse> =>
    axiosInstance.get(path, getHttpHeaders(true));

// const del = (path: string): Promise<AxiosResponse> =>
//     axiosInstance.delete(path, getHttpHeaders());

const del = (path: string, isAuthenticated = false): Promise<AxiosResponse> =>
    axiosInstance.delete(path, getHttpHeaders(isAuthenticated));

// const post = (path: string, data: any, auth=false): Promise<AxiosResponse> =>
//     axiosInstance.post(path, data, getHttpHeaders(auth));

const post = (path: string, data: any, isAuthenticated = false): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders(isAuthenticated));

const postWITHAPIKEY = (path: string, data: any, isAuthenticated = false, apiKey: string): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders(isAuthenticated, apiKey));

const put = (path: string, data: any): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders());

const patch = (path: string, data: any): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders());
const delAPIKEY = (path: string, data: any, isAuthenticated = false, apiKey: string): Promise<AxiosResponse> =>
    axiosInstance.delete(path,  getHttpHeaders(isAuthenticated, apiKey, data));
const ApiClinet = {
    get,
    getMethodWithToken,
    del,
    post,
    postWITHAPIKEY,
    put,
    patch,
    delAPIKEY
}
export default ApiClinet;