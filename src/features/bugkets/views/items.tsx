"use client"

import React, { FormEvent } from 'react'

import ItemLoader from './iLoader';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/lib/store';
import { deleteFile } from '../controller/bucket.controller';

import { bucketSelector, itemThunk, setItem } from '../controller/bucket.controller';
import { BucketItemModel } from '../models/bucket.model';

import { EllipsisVertical, Trash2, FolderOutput, X, Download, UserPlus, Link2, FolderInput, Eye, Copy, UploadCloud } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button';

// import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Folder, Plus } from 'lucide-react';

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


import MoreActionsList from '@/features/fileDetail/views/pages/moreAction';
import { UploadFile } from '../services/bucket.service';
import { UploadFileRoot, UploadPayload } from '../models/create_bucket_model';

// import { AspectRatio } from '@radix-ui/react-aspect-ratio';


export default function ItemPage({ params }: { params: { slug: string } }) {

    const itemReducer = useSelector(bucketSelector)
    const dispatch = useAppDispatch();

    async function loadItem() {
        dispatch(itemThunk(params.slug)).then((value: any) => {
            const data = value.payload as BucketItemModel
            dispatch(setItem(data.data))
        })
    }

    const [viewDetails, setViewDetails] = React.useState(true)
    const [column, setColumn] = React.useState<number>(5)

    React.useEffect(() => {
        setColumn(viewDetails ? 5 : 4);
        loadItem();
    },
        [viewDetails, setColumn])

    const [pointItem, setPointItem] = React.useState<any>(null)
    const [pressItem, setPressItem] = React.useState<any>(null)
    const [pointSelect, setPointSelect] = React.useState<any>(null)

    const bucketUrl = 'https://ithq.file.kokkoksole.com/buckets/' + params.slug + '/';


    async function uploadFile(event: FormEvent<HTMLFormElement>) {

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
        // const bucket_name = formData.get("bucket_name")

        // setBucket_name(bucket_name)

        const uploadPayload = {
            bucket: params.slug,
            file: formData.get("file_name")
        }

        // dispatch(uploadFile(bucket_name as string)).then((value) => {      // dispatch(createThunk("TEST-Create3")).then((value) => {

        // dispatch(UploadFile(uploadPayload as UploadPayload)).then((value: any) => {

        //     const data = value.payload as UploadFileRoot

        //     if (data.status) {
        //         // loadBucket()
        //         // toast.success("ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ITHQ File Store");
        //         //                 router.push("/admin/bucket")
        //     } else {
        //         // toast.error("ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ: " + data.error);
        //     }
        // })
    }

    function copyToClipboard() {
        var textField = document.createElement('textarea')
        textField.innerText = bucketUrl + pressItem
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    };

    async function delFile() { dispatch(deleteFile(pressItem)) }

    const selects = [
        { icon: X, size: 18, tooltip: 'Clear Selection', action: setPressItem, param: null },
        { icon: Link2, size: 16, tooltip: 'Copy link', action: copyToClipboard },
        { icon: Trash2, size: 16, tooltip: 'Delete', action: delFile },
        { icon: UserPlus, size: 15, tooltip: 'Share' },
        { icon: Download, size: 15, tooltip: 'Download' },
        { icon: FolderInput, size: 15, tooltip: 'Move' },
        { icon: EllipsisVertical, size: 15, tooltip: 'More actions', more: true },
    ]


    return (
        <>
            {itemReducer.itemLoading ? <ItemLoader />
                :
                <div className={'flex flex-col mr-2'}>

                    <div className='flex flex-row mt-3 mb-2 ml-5 mr-5 justify-between '>
                        <Breadcrumb>
                            <BreadcrumbList className='font-normal text-xl'>
                                <BreadcrumbItem >
                                    <BreadcrumbLink href="/">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" className='rounded-full text-xl bg-orange-50'>
                                                        <FolderOutput className='text-gray-400 size-5 mr-3' />Bucket&nbsp; {params.slug}
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent align="start" className='text-white text-xs h-7 bg-gray-700 border-none rounded-r-sm'>
                                                    <p>Back to Bucket page</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className='ml-3 mr-3' />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Files <span className='text-orange-400 font-light ml-2'>{itemReducer.item ? itemReducer.item.length : ''}</span></BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>


                        {/* <SelectedTab pointBucket={pointBucket} pressBucket={pressBucket} pointSelect={pointSelect}
                            setPointSelect={setPointSelect} setPressBucket={setPressBucket} /> */}

                        <div className={'flex-row mt-1 ml-5 mb-2 w-auto bg-orange-50 rounded-l-full rounded-r-full mr-0 hidden' + (pressItem !== null ? '' : ' ')}>
                            {selects.map((s: any, key: any) => {
                                if (s.more) { return <MoreActionsList id={pressItem} pointBucket={pointItem} pressBucket={pressItem} /> }
                                else {
                                    return <>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="outline" size="sm" className={'rounded-full bg-orange-50 ' + (pointSelect === key ? 'border-orange-300' : 'border-orange-50')}
                                                        onMouseEnter={() => setPointSelect(key)}
                                                        onMouseLeave={() => setPointSelect(null)}
                                                        onClick={() => s.action ? s.action(s.param) : alert(s.tooltip + ' ' + pressItem)} >
                                                        {/* onClick={copyToClipboard} > */}
                                                        <s.icon size={s.size} className='text-gray-700' />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="bottom" className="text-white text-xs h-7 bg-black border-none rounded-r-sm">
                                                    <p>{s.tooltip}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        {key === 0 ? <span className='text-xs mb-0 ml-1 text-gray-600 mr-3 font-medium'>1 selected</span> : ''}
                                    </>
                                }
                            })}
                        </div>


                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className={'h-7 font-semibold text-xs text-gray-600 border-gray-500 mr-4 mt-1'} >
                                    <UploadCloud size={16} className='mr-3 text-orange-600' /> Upload New File
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[325px]">
                                <form onSubmit={uploadFile}>
                                    <DialogHeader>
                                        <DialogTitle>New File</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <Input name="file_name" type='file' placeholder="File name" required className="col-span-3" />
                                    </div>
                                    <DialogFooter>
                                        <Button type={"submit"}>Upload</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <ScrollArea className="w-auto h-[681px]">
                        {itemReducer.item && itemReducer.item.map((ir, rkey: number) => rkey % column === 0 ?

                            <>
                                <Dialog >
                                    <div className='flex flex-row'>

                                        {itemReducer.item.map((ic: any, ckey: number) => {
                                            const name = ic.name

                                            return (ckey >= rkey && ckey < rkey + column ? <>

                                                {(ckey > rkey ? '' : <div onClick={() => setPressItem(null)} className='w-5'></div>)}

                                                <div className={'flex flex-col w-[223px] h-[230px] rounded-xl ' +
                                                    (ckey === pointItem ? 'bg-gray-200' : 'bg-slate-100')}
                                                    // (name === pressItem ? 'bg-amber-300' : (ckey === pointItem ? 'bg-gray-200' : 'bg-slate-100'))}
                                                    onClick={() => setPressItem(name)}
                                                    onMouseEnter={() => setPointItem(ckey)} onMouseLeave={() => setPointItem(null)} >

                                                    <div className='flex flex-row justify-between mt-1 mb-1'>
                                                        <div className='flex flex-row text-xs font-medium text-gray-700 mt-3'>
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger className='mb-2 ml-4 mr-4'> {name.substring(0, 21)}... </TooltipTrigger>
                                                                    <TooltipContent side="bottom" align='start' className="text-white text-xs font-normal h-7 bg-zinc-800 border-none rounded-r-sm">
                                                                        <p>{name}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>

                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger className='mb-2 ml-4 mr-0'>
                                                                        {/* <DialogTrigger asChild>
                                                                            <Eye size={16} className={'text-orange-600'} /> 
                                                                            </DialogTrigger> */}
                                                                        <Link2 size={16} className='text-orange-500' onClick={copyToClipboard} />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent side="bottom" align='center' className="text-white text-xs font-normal h-7 bg-zinc-800 border-none rounded-r-sm">
                                                                        {/* <p>View</p> */}
                                                                        <p>Copy link</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>
                                                    </div>

                                                    <DialogTrigger asChild>
                                                        <img className="rounded-md object-cover ml-2 mr-2 h-[178px] w-[206px]" alt="Photo"
                                                            src={bucketUrl + name} />
                                                    </DialogTrigger>
                                                </div>

                                                <DialogContent className="h-[720px]">
                                                    <DialogHeader>
                                                        <DialogTitle className='font-normal text-orange-500'>{name}</DialogTitle>
                                                    </DialogHeader>

                                                    <img className="rounded-md object-cover mb-5 h-[635px] w-[500px]" alt="Photo"
                                                        src={bucketUrl + pressItem} />
                                                </DialogContent>

                                                <div onClick={() => setPressItem(null)} className='w-4'></div>
                                            </>
                                                : '')
                                        })
                                        }

                                    </div >
                                </Dialog>

                                <div onClick={() => setPressItem(null)} className='h-4'></div>
                            </> : '')}
                    </ScrollArea>

                    <div onClick={() => setPressItem(null)} className='h-4'></div>

                </div >
            }
        </>
    )
}