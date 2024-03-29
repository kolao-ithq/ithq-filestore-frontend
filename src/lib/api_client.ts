
import AppApiPath from "@/constants/api_path";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { cookies } from "next/headers";


axios.defaults.headers.common.Accept = "application/json";
axios.defaults.timeout = 12000;

const axiosInstance = axios.create({
    baseURL: AppApiPath.baseUrl,
    responseType: "json",
});

const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
    const token: any = cookies().get('token')
    if (isAuthenticated) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }
    return {};
};

const get = (path: string): Promise<AxiosResponse> =>
    axiosInstance.get(path, getHttpHeaders());

const del = (path: string): Promise<AxiosResponse> =>
    axiosInstance.delete(path, getHttpHeaders());

const post = (path: string, data: any): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders());

const put = (path: string, data: any): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders());

const patch = (path: string, data: any): Promise<AxiosResponse> =>
    axiosInstance.post(path, data, getHttpHeaders());

const ApiClinet = {
    get,
    del,
    post,
    put,
    patch,
}
export default ApiClinet;