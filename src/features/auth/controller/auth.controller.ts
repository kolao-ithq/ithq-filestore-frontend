"use client"
import { RootState } from "@/lib/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Logout } from "../services/auth.service";
import { LoginPayload } from "../models/login.model";

type StateProp = {
    isPasswordVisible: boolean,
    loginLoading: boolean,
}

const initialValue: StateProp = {
    isPasswordVisible: false,
    loginLoading: false
}

const authController = createSlice({
    name: "authController",
    initialState: initialValue,
    reducers: {
        togglePasswordVisibility(state) {
            state.isPasswordVisible = !state.isPasswordVisible
        },
        logout() {
            Logout()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LoginThunk.pending, (state) => {
            state.loginLoading = true;
        }).addCase(LoginThunk.fulfilled, (state, action) => {
            state.loginLoading = false;
        });
    }
})

export const LoginThunk = createAsyncThunk(
    'server/LoginThunk',
    async (payload: LoginPayload) => await Login(payload)
);






export const authSelector = (state: RootState) => state.authController;

export const { togglePasswordVisibility, logout } = authController.actions
export default authController.reducer;