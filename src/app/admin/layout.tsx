import Navbar from '@/components/layout/navbar'
import SideBar from '@/components/layout/sidebar'
import React from 'react'

export default function DashboradLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800 md:w-72'>
                <SideBar />
            </div>
            <main className='md:pl-72'>
                <Navbar />
                {children}
            </main>
        </div>
    )
}
