"use client"

import React, { FormEvent } from 'react'

import BucketOption from './option';
import InfoPage from '@/features/bugkets/views/info';
import BucketLoader from './bLoader';

import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Folder, Plus } from 'lucide-react';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Swal from 'sweetalert2'

import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';
import { bucketThunk, bucketSelector, setBugkets, createThunk } from '../controller/bucket.controller';
import { useAppDispatch } from '@/lib/store';
import { RootBugketModel } from '../models/bucket.model';
import { CreateBucketRoot } from '../models/create_bucket_model';

import TreeView from '@/features/fileDetail/views/pages/tree';


export default function BucketPage() {

    const router = useRouter()
    const bucketReducer = useSelector(bucketSelector);
    const dispatch = useAppDispatch();

    async function loadBucket() {
        dispatch(bucketThunk()).then((value: any) => {
            const data = value.payload as RootBugketModel
            dispatch(setBugkets(data.data))
        })
    }

    function openBucket(name: String) { router.push(`/admin/bucket/${name}`) }

    async function addBucket(event: FormEvent<HTMLFormElement>) {

        // setSwalProps({
        //     show: true,
        //     title: 'Create Bucket',
        //     text: 'Would you like to create new bucket?',
        //     icon: 'question',
        //     showCancelButton: true,
        //     showConfirmButton: true,
        //     reverseButtons: true,
        //     confirmButtonColor: "#F58522",
        //     confirmButtonText: "Yes, create it!"
        // });

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const bucket_name = formData.get("bucket_name")

        // const loginPayload = {
        //     username: formData.get("username"),
        //     password: formData.get("password")
        // }

        dispatch(createThunk(bucket_name as string)).then((value) => {      // dispatch(createThunk("TEST-Create3")).then((value) => {
            // dispatch(LoginThunk(loginPayload as LoginPayload)).then((value) => {

            const data = value.payload as CreateBucketRoot

            if (data.status) {

                Swal.fire({
                    title: "Created!",
                    text: "Your bucket has been created.",
                    icon: "success",
                    // confirmButtonColor: "#F58522",
                    // position: 'center-right',
                    showConfirmButton: false,
                    timer: 3000,
                    willClose: loadBucket
                });

                // loadBucket()
                // toast.success("ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ITHQ File Store");
                //                 router.push("/admin/bucket")
            } else {
                // toast.error("ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ: " + data.error);
            }
        })
    }


    const [pointBucket, setPointBucket] = React.useState<any>(null)
    const [pressBucket, setPressBucket] = React.useState<any>(null)

    const [viewDetails, setViewDetails] = React.useState<any>(null) // React.useState(true) 
    const [column, setColumn] = React.useState<number>(4)

    React.useEffect(() => {
        setColumn(viewDetails === null ? 4 : 3);
        // setViewDetails(pressBucket);
        loadBucket();
    }, [viewDetails, setColumn])    //  , setViewDetails, pressBucket


    return (
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col w-full'>

                {bucketReducer.bucketLoading ? <BucketLoader /> :
                    <>
                        <div className={'flex flex-row mt-5 ml-5 mr-5 justify-between '}>
                            <h1 className='text-gray-900 font-normal text-xl'>Buckets</h1>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className={'h-7 font-semibold text-xs text-gray-600 border-gray-500 mr-2'} >
                                        <Plus size={16} className='mr-3 text-orange-600' /> Create New Bucket
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[325px]">
                                    <form onSubmit={addBucket}>
                                        <DialogHeader>
                                            <DialogTitle>New bucket</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <Input name="bucket_name" type='text' placeholder="Bucket name" required className="col-span-3" />
                                        </div>
                                        <DialogFooter>
                                            <Button type={"submit"}>Create</Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>


                        <div className={'flex flex-col mr-2'}>
                            {bucketReducer.buckets.map((br, rkey: number) => rkey % column === 0 ?
                                <>
                                    {(rkey > 0 ? '' : <div onClick={() => setPressBucket(null)} className='h-3'></div>)}

                                    <div className='flex flex-row' key={rkey}>

                                        {bucketReducer.buckets.map((bc: any, ckey: number) => {
                                            const name = bc.name

                                            return (ckey >= rkey && ckey < rkey + column ?
                                                <>
                                                    {(ckey > rkey ? '' : <div onClick={() => setPressBucket(null)} className='w-5'></div>)}

                                                    <div key={rkey}
                                                        onDoubleClick={() => openBucket(name)} onMouseEnter={() => setPointBucket(ckey)}
                                                        onMouseLeave={() => setPointBucket(null)}       // onClick={() => setViewDetails(name)} 
                                                        className={'flex flex-col w-[287px] rounded-xl ' + (name === viewDetails ?
                                                            'bg-sky-200' : (ckey === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} >

                                                        <div className='flex flex-row justify-between mt-1 mb-1'>
                                                            <div className='flex flex-row text-xs font-medium text-gray-700 mt-2'>
                                                                <Folder size={19} className={'ml-4 mr-4 fill-gray-500 text-gray-500'} />
                                                                <span className='mt-1'>{name}</span>
                                                            </div>

                                                            <BucketOption bname={name} openBucket={openBucket}
                                                                bview={viewDetails} viewInfo={setViewDetails} id={ckey}
                                                                loadBucket={loadBucket} pointBucket={pointBucket} />
                                                        </div>
                                                    </div>

                                                    <div onClick={() => setPressBucket(null)} className='w-4'></div>
                                                </> : '')
                                        }
                                        )}

                                    </div>
                                    <div onClick={() => setPressBucket(null)} className='h-4'></div>

                                </> : '')}
                        </div>
                    </>
                }

                {/* <TreeView /> */}

                <div className='h-16'></div>        {/* <ScrollArea className="w-auto h-screen"></ScrollArea> */}
            </div>

            <div className={'bg-slate-50 h-screen w-96' + (viewDetails === null ? ' hidden' : '')}>
                <InfoPage bview={viewDetails} hideInfo={setViewDetails} />
            </div>
        </div>
    )
}