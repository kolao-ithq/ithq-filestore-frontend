import { Button } from '@/components/ui/button'
import { useAppDispatch } from '@/lib/store';
import { Box, CirclePlus, EllipsisVertical } from 'lucide-react'
import React, { useEffect } from 'react'
import { bucketSelector, deleteBucket, fetchBuckets, getBucketInfo } from '../controller/bucket.controller';
import { useSelector } from 'react-redux';
import { DialogCreatBucket } from './component/form_create_bucket';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { cn } from '@/lib/utils';
import Link from 'next/link';
export default function IndexBucket() {

    var buckets = [
        { "name": "LCC-1" },
        { "name": "LCC-2" },
        { "name": "LCC-3" },
        { "name": "LCC-4" },
        { "name": "LCC-5" },
        { "name": "LCC-6" },
    ]
    const dispatch = useAppDispatch();
    const bucketReducer = useSelector(bucketSelector);
    useEffect(() => {
        dispatch(fetchBuckets())
    }, [dispatch]);

    return (
        <div className='flex flex-col p-8'>
            {
                bucketReducer.BucketInfo == null ?
                    <div>
                        Bucket Info Not Found
                    </div> :
                    <div className='flex flex-col'>

                        <div>
                            ID: <strong>{bucketReducer.BucketInfo.bucket_id}</strong>
                        </div>
                        <div>
                            Bucket name: <strong>{bucketReducer.BucketInfo.bucket_name}</strong>
                        </div>
                        <div>
                            Bucket Key: <strong>{bucketReducer.BucketInfo.bucket_key}</strong>
                        </div>
                    </div>
            }
            <div className='flex flex-row items-center'>
                <div className='text-xl font-bold pr-4'>
                    ຂໍ້ມູນຂອງ Buckets
                </div>
                <DialogCreatBucket />

            </div>

            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-4 pt-4">
                {
                    bucketReducer.BucketLoading ? <div>
                        Loading...
                    </div> :
                        bucketReducer.Error != "" ? <div>
                            {bucketReducer.Error}
                        </div> :
                            bucketReducer.Buckets?.map((e, index) => {
                                return (

                                    <div className=" bg-gray-100 w-full p-2 flex flex-row items-center justify-between rounded-xl" key={index}>
                                        <Link href={`/admin/bucket/${e.name}`} className='w-full'>
                                            <div className='flex flex-row items-center justify-start w-full'>
                                                <div className="text-base font-semibold leading-7 text-gray-900 mr-2">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                                        <Box className='text-white' />
                                                    </div>
                                                </div>
                                                <div className="leading-7 text-gray-600 font-bold">{e.name}</div>
                                            </div>
                                        </Link>
                                        <div className='text-gray-400'>
                                            <Menubar>
                                                <MenubarMenu>
                                                    <MenubarTrigger> <EllipsisVertical /></MenubarTrigger>
                                                    <MenubarContent>
                                                        <Button onClick={() => {
                                                            dispatch(getBucketInfo(e.name))
                                                        }} className={cn("bg-white text-black w-full hover:bg-accent text-sm text-start flex flex-row justify-start items-start")}>
                                                            <div className="px-3">
                                                                Info
                                                            </div>
                                                        </Button>
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                {/* <Button className='w-full bg-white text-black text-sm'>Show Dialog</Button> */}
                                                                <Button className={cn("bg-white text-black w-full hover:bg-accent text-sm text-start flex flex-row justify-start items-start", e.name == 'LCC' ? "hidden" : "")}>
                                                                    <div className="px-3">
                                                                        Delete
                                                                    </div>
                                                                </Button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>ເຈົ້າແນ່ໃຈແທ້ໆບໍ?</AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        <span>ຄຳສັ່ງນີ້ບໍ່ສາມາດຍົກເລີກໄດ້. ນີ້ຈະເປັນການລຶບ <strong className='font-bold text-red-500 text-xl'>
                                                                            {e.name}</strong> ຖາວອນ</span>
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>ຍົກເລີກ</AlertDialogCancel>
                                                                    <AlertDialogAction onClick={() => {
                                                                        dispatch(deleteBucket(e.name))
                                                                    }}>ຕົກລົງ</AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>

                                                    </MenubarContent>
                                                </MenubarMenu>
                                            </Menubar>
                                        </div>
                                    </div>


                                )
                            })
                }
            </dl >
        </div >
    )
}
