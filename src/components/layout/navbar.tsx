'use client'
import React from 'react'
import MobileSidebar from './mobile-sidebar'
import { FileQuestion, LogOut, MessageCircleQuestion } from 'lucide-react'
import { Button } from '../ui/button'
import { useAppDispatch } from '@/lib/store'
import { logout } from '@/features/auth/controller/auth.controller'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Logout } from '@/features/auth/services/auth.service'


export default function Navbar() {
    const dispatch = useAppDispatch();
    // 
    return (
        <div className='flex items-center p-4 shadow-sm'>
            <MobileSidebar />
            <Dialog>
                <div className='w-full flex justify-end'>
                    <DialogTrigger className='flex justify-end rounded-lg bg-primary p-2 text-white items-end'>
                        ອອກຈາກລະບົບ
                        <LogOut />
                    </DialogTrigger>
                </div>

                <DialogContent className='md:ml-36'>
                    <DialogHeader justify-center>
                        <div className='flex justify-center'>
                            <MessageCircleQuestion className='h-20 w-20 text-primary' />
                        </div>
                        <DialogTitle className='flex justify-center py-10'>ທ່ານຕ້ອງການອອກຈາກລະບົບແທ້ບໍ່?</DialogTitle>
                        {/* <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription> */}
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="destructive" onClick={() => {
                            dispatch(logout())
                        }}>ຕົກລົງ</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>

    )
}
