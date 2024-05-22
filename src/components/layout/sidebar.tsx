'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from "next/image";

import { Montserrat } from "next/font/google";
import { cn } from '@/lib/utils';
import { CloudUpload, LayoutDashboard, RouteOffIcon, User2Icon } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';

const montserrat = Montserrat({ weight: "800", subsets: ['latin'], })

const routes = [
    // {
    //     label: "Dashboard",
    //     icon: LayoutDashboard,
    //     herf: "/admin/dashboard"
    // },
    {
        label: "Buckets",
        icon: CloudUpload,
        herf: "/admin/bucket"
    },
    // {
    //     label: "User",
    //     icon: User2Icon,
    //     herf: "/admin/user"
    // }
]

export default function SideBar() {
    const pathname = usePathname() || null;
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-gray-50 text-white'>
            <div className='px-3 py-2 flex-1'>
                <Link href="/admin/bucket" className='flex items-center pl-3 mb-14'>
                    <div className='relative w-8 h-8 mr-4'>
                        <CloudUpload className='w-10 h-10 text-primary' />
                    </div>
                    <div className={cn("text-2xl font-bold text-gray-500", montserrat.className)}>
                        File Store
                    </div>
                </Link>
                <div className='space-y-1'>
                    {routes.map((route) => (
                        <Link href={route.herf} key={route.herf} className={cn('text-md group flex p-3 w-full justify-start font-medium cursor-pointerhover:bg-gray-200 rounded-lg transition hover:bg-slate-100', pathname == route.herf ? "bg-gray-200 text-primary" : "text-gray-500")}>
                            <div className='flex items-center flex-1'>
                                <route.icon className={cn("h-5 w-5 mr-3")} />{route.label}
                            </div>
                            <div className={cn('flex h-6 w-2 bg-primary rounded-lg items-end justify-end', pathname == route.herf ? "" : "hidden")} />
                        </Link>

                    ))}
                </div>
            </div >
        </div >
    )
}
