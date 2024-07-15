"use client"

import React, { FormEvent } from 'react'

import BucketOption from './option';
// import BucketOption from './bOption';
import InfoPage from '@/features/bugkets/views/info';
import BucketLoader from './bLoader';

import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Folder, Plus } from 'lucide-react';
import { EllipsisVertical, FolderOpen, Info, Trash2, Eye, Table2, Navigation } from 'lucide-react';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Swal from 'sweetalert2'
import SweetAlert2 from 'react-sweetalert2';

import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';
import { bucketThunk, bucketSelector, setBugkets, createThunk } from '../controller/bucket.controller';
import { deleteBucket, infoThunk } from '../controller/bucket.controller';
import { useAppDispatch } from '@/lib/store';
import { RootBugketModel } from '../models/bucket.model';
import { CreateBucketRoot } from '../models/create_bucket_model';
import { DeleteBucketModel } from '../models/create_bucket_model';

// import TreeViewT from '@/features/fileDetail/views/pages/tree';
// import TreeView, { flattenTree } from "react-accessible-treeview";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    DropdownMenuPortal
} from "@/components/ui/dropdown-menu"


export default function BucketPage() {

    // const tags = Array.from({ length: 11 }).map(
    //     (_, i) => `kok kok mart ${i}` // (_, i, a) => `v1.2.0-beta.${a.length - i}`
    // )

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

    const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

    async function viewDetail() { dispatch(infoThunk(viewDetails)); wait().then(() => setOpen(true)); }

    async function delBucket() {

        // setSwalProps({
        //     show: true,
        //     title: 'Delete Bucket',
        //     text: 'Are you sure to delete this bucket?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     showConfirmButton: true,
        //     confirmButtonColor: "#F58522",
        //     confirmButtonText: "Yes, delete it!"
        // });

        Swal.fire({
            // title: "Do you want to save the changes?",
            // showDenyButton: true,
            // showCancelButton: true,
            // confirmButtonText: "Save",
            // denyButtonText: `Don't save`
            //     show: true,
            title: 'Delete Bucket',
            text: 'Are you sure to delete this bucket?',
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#F58522",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // Swal.fire("Saved!", "", "success");

                dispatch(deleteBucket(viewDetails)).then((value) => {

                    const data = value.payload as DeleteBucketModel

                    if (data.status) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your bucket has been deleted.",
                            icon: "success",
                            confirmButtonColor: "#F58522",
                            // showConfirmButton: false,
                            // timer: 3000,
                            willClose: loadBucket
                        });
                    } else { }
                })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }

    const [pointBucket, setPointBucket] = React.useState<any>(null)
    const [pressBucket, setPressBucket] = React.useState<any>(null)

    const [viewDetails, setViewDetails] = React.useState<any>(null) // React.useState(true) 
    const [column, setColumn] = React.useState<number>(4)

    const [open, setOpen] = React.useState(false);
    const [swalProps, setSwalProps] = React.useState({});

    React.useEffect(() => {
        // setColumn(viewDetails === null ? 4 : 3);
        // setViewDetails(pressBucket);
        loadBucket();
    }, [])    //  , setViewDetails, pressBucket         viewDetails, setColumn

    const actions = [
        { name: 'Open', icon: FolderOpen, action: openBucket },
        { name: 'Details', icon: Info, action: viewDetail },
        { name: 'Delete', icon: Trash2, action: delBucket }
    ]


    return (
        <>
            {bucketReducer.bucketLoading ? <BucketLoader /> :
                <>
                    <div className={'flex flex-row mt-5 ml-5 mr-5 mb-3 justify-between'}>
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


                    <div className="grid grid-cols-4 gap-4 ml-5 mr-6">

                        <Dialog open={open} onOpenChange={setOpen}>
                            {
                                bucketReducer.buckets.map((bk, bkey: number) => {
                                    const name = bk.name

                                    return <>
                                        <div key={bkey}
                                            onDoubleClick={() => openBucket(name)}
                                            onMouseEnter={() => { setPointBucket(bkey); setViewDetails(name) }}
                                            onMouseLeave={() => setPointBucket(null)}
                                            className={'rounded-xl ' + (name === viewDetails ?
                                                'bg-sky-200' : (bkey === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))}>

                                            <div className='flex flex-row justify-between mt-1 mb-1'>
                                                <div className='flex flex-row text-xs font-medium text-gray-700 mt-2'>
                                                    <Folder size={19} className={'ml-4 mr-4 fill-gray-500 text-gray-500'} />
                                                    <span className='mt-1'>{name}</span>
                                                </div>

                                                {/* <BucketOption bname={name} openBucket={openBucket}
                                                    bview={viewDetails} viewInfo={setViewDetails} id={bkey}
                                                    loadBucket={loadBucket} pointBucket={pointBucket} /> */}

                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        {/* <Button variant="ghost" size="sm" className={'rounded-full ' + (bname === bview ? 'bg-sky-200' : (id === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} > */}
                                                        <Button variant="ghost" size="sm" className={'rounded-full '} >
                                                            <EllipsisVertical size={16} className='text-gray-800' />
                                                        </Button>
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent align="start" className="w-[300px] font-normal text-gray-700">
                                                        {actions.map((item: any) => {
                                                            const icon = <item.icon size={14} className='text-gray-800 mr-4' />

                                                            return <DropdownMenuItem className='text-xs' disabled={item.disabled}
                                                                onClick={() => { item.action(name) }} >{icon} {item.name}</DropdownMenuItem>
                                                        }
                                                        )}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>

                                            </div>
                                        </div>
                                    </>
                                }
                                )
                            }

                            <DialogContent className="sm:max-w-[325px]">
                                {/* <DialogHeader>
                                    <DialogTitle>Bucket details</DialogTitle>
                                </DialogHeader> */}
                                <InfoPage bview={viewDetails} hideInfo={setViewDetails} />
                            </DialogContent>
                        </Dialog>

                    </div>
                </>
            }
            <div className='h-16'></div>
        </>
    )
}


//     const baseClass = "arrow";
//     const classes = cx(
//         baseClass,
//         { [`${baseClass}--closed`]: !isOpen },
//         { [`${baseClass}--open`]: isOpen },
//         className
//     );
//     return <IoMdArrowDropright className={classes} />;
// };