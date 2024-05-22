"use client"

import React from "react"

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/lib/store';
import { bucketSelector, infoThunk } from "@/features/bugkets/controller/bucket.controller";

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"

import { Globe, Folder, Info, X, CircleX } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { stringify } from "querystring";

import ProfileHoverCard from "@/features/fileDetail/views/pages/profileHvrCrd";


export default function InfoPage({
    // id, pointBucket, bname, bview, openBucket, viewInfo, pressBucket
    bview, hideInfo
}: {
    // id: any,
    // pointBucket: any,
    // bname: any,
    // bview: boolean,
    bview: any,
    // openBucket: (open: any) => void,
    // hideInfo: (open: boolean) => void, 
    hideInfo: (open: any) => void,
    // pressBucket: any
}) {

    const [copyButton, setCopyButton] = React.useState(false)
    const [copyContact, setCopyContact] = React.useState(false)

    const owner = [
        { letter: 'C', name: 'C_username', color: 'bg-orange-400 text-white' },
        { letter: 'N', name: 'N_username', color: 'bg-pink-700 text-white', image: 'caddy-025d37ef-8d1c-4309-be5d-d821e5edc657.png' }
    ]

    // bview = false

    const infoReducer = useSelector(bucketSelector)
    const dispatch = useAppDispatch();

    const bInfo = infoReducer.info?.data

    const info = [
        { title: 'Type', deatil: 'Bucket Folder' },
        { title: 'Name', deatil: bInfo?.bucket_name },
        { title: 'ID', deatil: bInfo?.bucket_id },     // { title: 'Size', deatil: '1 KB' },
        { title: 'KEY', deatil: bInfo?.bucket_key },    // { title: 'Storage used', deatil: '1 KB' },
        // { title: 'Location', deatil: 'My Drive', control: 'Button', icon: BookMarkedIcon },
        // { title: 'Owner', deatil: 'me' },
        // { title: 'Modified', deatil: 'Mar 5, 2024 by me' },
        // { title: 'Opened', deatil: 'Mar 5, 2024 by me' },
        // { title: 'Created', deatil: 'Mar 5, 2024' },
        // { title: 'Download permissions', deatil: 'Viewers can download' },
        // { title: 'Description', deatil: 'Add description', control: 'Input' },
    ]


    return (
        <ScrollArea className="h-screen bg-white ml-4 mr-2 mt-0.5">
            <div className="pr-4 pb-8 ml-4">

                <div className="flex flex-row text-sm font-medium mt-4 justify-between mb-10">
                    <div className="flex flex-row">
                        <Folder className="fill-gray-600 text-gray-600 mr-4 mt-3" size={16} />

                        <div className="mt-2 flex">
                            {/* KKKKKKKKKKKKKKKK */}
                            {bview}
                            {/* {bInfo?.bucket_name} */}
                        </div>
                    </div>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                {/* <Button type="button" variant="outline" size="sm" onClick={() => hideInfo(!bview)} */}
                                <Button type="button" variant="outline" size="sm" onClick={() => hideInfo(null)}
                                    className='rounded-full border-none ml-3'><CircleX size={20} className="text-orange-500" /></Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="text-white text-xs h-7 bg-black border-none rounded-r-sm">
                                <p>Hide Details</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <DropdownMenuSeparator></DropdownMenuSeparator>

                <div className="flex flex-row justify-center">
                    <Folder className="fill-orange-400 text-orange-400 mr-4 mt-10 mb-20" size={75} />    {/* zinc-500 */}
                </div>

                {/* <AspectRatio ratio={2 / 1} className="bg-muted rounded-md">
                    <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-md object-cover"
                    />
                </AspectRatio> */}

                {/* <p className="text-sm font-medium mt-0 mb-3">Who has access</p>

                <div className='flex flex-row'>
                    {owner.map((own) => <ProfileHoverCard info={own} size={"size-7 mr-1"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} />)}
                    <Separator orientation="vertical" />

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="size-7 mr-1">
                                    <AvatarFallback className="bg-lime-300"><Globe size={18} /></AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent side='bottom' className='text-white text-xs h-7 bg-gray-700 border-none rounded-r-sm'>
                                <p>Anyone on the internet with the link can edit</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="size-7 mr-1">
                                    <AvatarFallback className="text-xs bg-slate-200">+15</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent side='bottom' className='text-white text-xs h-7 bg-gray-700 border-none rounded-r-sm'>
                                <p>15 others have access</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                <p className="text-xs mt-2 mb-3 font-ligh text-gray-400">Private to you</p>

                <Button type="button" className="rounded-full text-orange-500 text-xs border-gray-400 mb-5" variant="outline" onClick={() => alert('Manage access')}>Manage access</Button> */}

                <DropdownMenuSeparator></DropdownMenuSeparator>


                <p className="text-sm font-medium mt-5 mb-8">Bucket details</p>     {/* File mb-3 */}

                {info.map((file: any) =>
                (
                    <div className="flex-1 space-y-1 mb-4">
                        <p className="text-xs font-normal leading-none text-black">{file.title}</p>
                        {
                            (!file.control ? <p className="text-xs font-sans text-slate-600">{file.deatil}</p>
                                :
                                (file.control === 'Button' ?
                                    <Button type="button" variant="outline" onClick={() => alert(file.deatil)} className="h-8 text-xs">
                                        <file.icon size={14} className="mr-2" /> {file.deatil}
                                    </Button>
                                    :
                                    <Input type="text" className="col-span-3" placeholder={file.deatil} />)
                            )
                        }
                    </div>
                )
                )}

            </div>
        </ScrollArea>
    )
}