"use server"
import ApiClinet from "@/lib/api_client";
import { LoginModel, LoginPayload } from "../models/login.model";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



const Login = async (payload: LoginPayload): Promise<LoginModel> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
        const res = await ApiClinet.post('/api/v1/user/login', payload);
        const data: LoginModel = res.data;
        cookies().set("token", data.data.access_token);
        cookies().set("tokenRefresh", data.data.refresh_token);
        return data
    } catch (error) {
        const err = error as AxiosError;
        const dataError: LoginModel = err.response?.data as LoginModel;
        console.log(dataError);
        return dataError;
    }
}

const Logout = async () => {
    console.log("Login");
    cookies().delete("token");
    redirect("/auth/login");
}

export { Login, Logout }

