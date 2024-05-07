"use client"
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { FormEvent, useMemo, useState } from 'react'
import { CheckCircle2, Circle, CloudUpload, Eye, EyeOff, Link2 } from 'lucide-react'
import getScrollAnimation from '@/lib/getScrollAnimation';
import ScrollAnimationWrapper from '@/components/animation/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { LoginThunk, authSelector, togglePasswordVisibility } from '../../controller/auth.controller';
import { useAppDispatch } from '@/lib/store';
import { LoginModel, LoginPayload } from '../../models/login.model';
import { Login } from '../../services/auth.service';
import { useRouter } from 'next/navigation';
import { ToastAction } from '@/components/ui/toast';
import { toast } from 'react-toastify';
import LoaderComponent from '@/components/animation/loader';
import { render, Printer, Text } from 'react-thermal-printer';

export default function LoginPage() {
    const router = useRouter();
    const authReducer = useSelector(authSelector);
    const dispatch = useAppDispatch();
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const loginPayload = {
            username: formData.get("username"),
            password: formData.get("password")
        }
        dispatch(LoginThunk(loginPayload as LoginPayload)).then((value) => {
            const data = value.payload as LoginModel
            if (data.status) {
                toast.success("ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ITHQ File Store");
                router.push("/admin/bucket")
            } else {
                toast.error("ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ: " + data.error);
            }
        })
    }

    return (
        <div className='bg-gradient-to-tr from-white via-orange-50 to-primaryLight'>
            <ScrollAnimationWrapper className="flex flex-col items-center justify-center lg:w-full sm:w-auto min-h-screen px-4 sm:px-4 md:px-4 lg:8">
                <motion.div variants={scrollAnimation} className="inset-0 bg-white opacity-95 px-4 lg:px-8 md:px-4 sm:px-4 py-8 w-full flex-col flex items-center justify-center rounded-xl lg:w-1/3">
                    <div className="text-center mb-5 flex flex-col justify-center items-center">
                        <CloudUpload className='w-20 h-20 text-primary' />
                        <div className='pl-2 font-bold text-2xl cursor-pointer items-center text-gray-800 md:block hidden'>
                            ITHQ File Store
                        </div>
                    </div>
                    <div className="mb-8 mt-8 w-full">
                        <h4 className="text-xl text-gray-600 font-bold">
                            ເຂົ້າສູ່ລະບົບ
                        </h4>
                        <h4 className="text-lg text-gray-600">
                            ກະລຸນາປ້ອນຂໍ້ມູນຂອງທ່ານເພື່ອເຂົ້າສູ່ລະບົບ
                        </h4>
                    </div>
                    <form className="w-full" onSubmit={onSubmit}>
                        <h4 className="text-md text-gray-600 mb-2">
                            ຊື່ຜູ້ໃຊ້
                        </h4>
                        <div className='flex w-full'>
                            <div className='bg-gray-100 h-12 shadow-sm rounded-2xl flex flex-row items-center px-4 w-full'>
                                <input
                                    type='text'
                                    placeholder="ຊື່ຜູ້ໃຊ້"
                                    name='username'
                                    className={cn('border-none outline-none text-lg text-gray-600 placeholder-gray-600 flex-grow w-10 bg-gray-100',)}
                                    required
                                />
                            </div>
                        </div>
                        <h4 className="text-md text-gray-600 mb-2 mt-6">
                            ລະຫັດຜ່ານ
                        </h4>
                        <div className='flex w-full flex-row'>
                            <div className='bg-gray-100 h-12 shadow-sm rounded-2xl flex flex-row items-center px-4 w-full'>
                                <input
                                    type={authReducer.isPasswordVisible ? 'text' : 'password'}
                                    name='password'
                                    placeholder="ລະຫັດຜ່ານ"
                                    className={cn('border-none outline-none text-lg text-gray-600 placeholder-gray-600 flex-grow w-10 bg-gray-100',)}
                                    required
                                />
                                {!authReducer.isPasswordVisible ? <Eye className='text-gray-500' onClick={() => dispatch(togglePasswordVisibility())} /> : <EyeOff className='text-gray-500' onClick={() => dispatch(togglePasswordVisibility())} />}
                            </div>
                        </div>

                        <div className="my-10 ">
                            {authReducer.loginLoading ?
                                <div className='flex items-center text-white justify-center w-full bg-gradient-to-tr from-primaryLight via-primary to-primary rounded-xl text-md md:text-lg lg:text-lg h-12'>
                                    <LoaderComponent />
                                </div>
                                :
                                <Button className='w-full bg-gradient-to-tr from-primaryLight via-primary to-primary rounded-xl text-md md:text-lg lg:text-lg h-12' type={"submit"} >
                                    ເຂົ້າສູ່ລະບົບ
                                </Button>}
                        </div>

                        <div className="flex flex-row items-center justify-center">
                            <h4 className="text-lg text-gray-400">
                                ພັດທະນາໂດຍ:
                            </h4>
                            <h4 className="pl-2 text-lg font-bold text-orange-500">
                                Group IT
                            </h4>
                        </div>
                    </form>
                </motion.div>
            </ScrollAnimationWrapper >
        </div >
    )
}
