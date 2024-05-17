import authController from "@/features/auth/controller/auth.controller";
import bucketController from "@/features/bugkets/controller/bucket.controller";
import infoController from "@/features/bucket_info/controller/info.controller";
import itemController from "@/features/bucket_item/controller/item.controller";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"

export const store = configureStore({
    reducer: {
        authController,
        bucketController,
        // infoController,
        // itemController
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();