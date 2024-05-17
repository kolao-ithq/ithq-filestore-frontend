import authController from "@/features/auth/controller/auth.controller";
import bucketController from "@/features/bugkets/controller/bucket.controller";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"

export const store = configureStore({
    reducer: {
        authController,
        bucketController,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();