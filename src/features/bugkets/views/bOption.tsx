"use client"

import React from 'react'

import { EllipsisVertical, FolderOpen, Info, Trash2 } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    DropdownMenuPortal
} from "@/components/ui/dropdown-menu"

import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


import { Button } from "@/components/ui/button"
import { useAppDispatch } from '@/lib/store';
import { deleteBucket, infoThunk } from '../controller/bucket.controller';

import Swal from 'sweetalert2'
import SweetAlert2 from 'react-sweetalert2';
import { DeleteBucketModel } from '../models/create_bucket_model';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';


export default function BucketOption({
    id, pointBucket, bname, bview, openBucket, viewInfo, loadBucket
}: {
    id: any,
    pointBucket: any,
    bname: any,
    bview: boolean,
    openBucket: (open: any) => void,
    viewInfo: (open: boolean) => void,
    loadBucket: () => void
}
) {

    const dispatch = useAppDispatch();

    async function viewDetail() { viewInfo(bname); dispatch(infoThunk(bname)); }

    const [swalProps, setSwalProps] = React.useState({});

    async function delBucket() {

        setSwalProps({
            show: true,
            title: 'Delete Bucket',
            text: 'Are you sure to delete this bucket?',
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "#F58522",
            confirmButtonText: "Yes, delete it!"
        });
    }

    const actions = [
        {
            group: [
                { name: 'Open', icon: FolderOpen, action: openBucket, param: bname },
                { name: 'Details', icon: Info, action: viewDetail },
                { name: 'Delete', icon: Trash2, action: delBucket },
            ]
        }
    ]


    const components: { inlist: any, title: string; description: string }[] = [
        {
            inlist: openBucket,
            title: "Open",
            // href: "/docs/primitives/alert-dialog",       href: string; 
            description: bname
        },
        {
            inlist: viewDetail,
            title: "Details",
            // href: "/docs/primitives/hover-card",
            description: ''
            //     "For sighted users to preview content available behind a link.",
        },
        {
            inlist: delBucket,
            title: "Delete",
            // href: "/docs/primitives/progress",
            description: ''
            //     "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
    ]

    return (<>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='rounded-full size-9 bg-slate-100'>
                        <Button variant="ghost" size="sm" className={'rounded-full ' + (bname === bview ? 'bg-sky-200' : (id === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} >
                            <EllipsisVertical size={16} className='text-gray-800' />
                        </Button>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="p-1 w-[20px] lg:w-[250px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                // href={component.href}
                                >
                                    {/* {component.description} */}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/* <Button variant="ghost" size="sm" className={'rounded-full '+ (id === pressBucket ? 'bg-sky-200' : (id === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} > */}

                {/* <div onDoubleClick={() => openBucket(name)} onMouseEnter={() => setPointBucket(ckey)}
                                                        onClick={() => setPressBucket(name)} onMouseLeave={() => setPointBucket(null)}
                                                        className={'flex flex-col w-[287px] rounded-xl ' + (name === pressBucket ?
                                                            'bg-sky-200' : (ckey === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} ></div> */}

                <Button variant="ghost" size="sm" className={'rounded-full ' + (bname === bview ? 'bg-sky-200' : (id === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} >
                    <EllipsisVertical size={16} className='text-gray-800' />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-[300px] font-normal text-gray-700">
                {actions.map((action: any, key: number) => (
                    <DropdownMenuGroup>
                        {action.group.map((item: any) => {
                            const icon = <item.icon size={14} className='text-gray-800 mr-4' />
                            const name = item.name
                            const subTtem = item.sub

                            if (!subTtem?.length) {
                                return <DropdownMenuItem className='text-xs' onClick={() => { item.action(item.param) }} disabled={item.disabled} >
                                    {icon} {name}</DropdownMenuItem>
                            }
                        }
                        )}
                        {/* { key < 3 ? <DropdownMenuSeparator /> : '' } */}
                    </DropdownMenuGroup>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>


        <SweetAlert2 {...swalProps}
            didClose={() => {
                Swal.fire({
                    title: "Cancelled",
                    text: "Your bucket is safe :)",
                    icon: "error",
                    confirmButtonColor: "#F58522",
                    willClose: loadBucket
                });
                // run when swal is closed...
            }}
            onConfirm={async (result: any) => {

                if (result.isConfirmed) {

                    dispatch(deleteBucket(bname)).then((value) => {

                        const data = value.payload as DeleteBucketModel

                        if (data.status) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bucket has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#F58522",
                                willClose: loadBucket
                            })
                        }
                    })
                }
                // run when clieked in confirm and promise is resolved...
            }}
        />

    </>
    )
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, inlist, title, children, ...props }, ref) => {

    // const actions = [
    //     {
    //         group: [
    //             { name: 'Open', icon: FolderOpen, action: openBucket, param: bname },
    //             { name: 'Details', icon: Info, action: viewDetail },
    //             { name: 'Delete', icon: Trash2, action: delBucket },
    //         ]
    //     }
    // ]

    // const id = <number>(inlist);

    const actions =
    {
        'Open': { icon: <FolderOpen size={14} className='text-gray-800 mr-4 ml-0.5' />, },
        'Details': { icon: <Info size={14} className='text-gray-800 mr-4 ml-0.5' /> },
        'Delete': { icon: <Trash2 size={14} className='text-gray-800 mr-4 ml-0.5' /> }
    }


    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    // onClick={() => { item.action(item.param) }}
                    onClick={() => { inlist(children || null) }}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-xs font-normal text-gray-700 flex flex-row"> {actions[title].icon} {title} </div>
                    {/* <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p> */}
                </a>
            </NavigationMenuLink>
        </li>
    )
})

