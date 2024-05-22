
"use client"

import * as React from "react"

import ProfileHoverCard from "./profileHvrCrd"

import { ScrollArea } from "@/components/ui/scroll-area"

// import React from 'react'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"

import {
    Search, Users2, Building2, CornerDownRight, Table2, PanelRightClose, ReceiptText, Folder, Globe, Phone, MapPin
} from 'lucide-react';

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const activities = [
    {
        duration: 'Last week',
        acting: [
            {
                acting_id: 1,
                owner: { letter: 'VC', name: 'VC_username', color: 'bg-orange-500 text-white', type: 'user' },
                file: [
                    { name: 'Last week file name', icon: Table2, color: 'text-green-600' }
                ],
                datetime: '11:56 AM Feb 8',
                folder: '',
                acted: ['edited'],
                actor: ['VC_username', 'Username_02', 'Username_03']
            },
            {
                acting_id: 2,
                owner: {
                    letter: 'V', name: 'V_username', color: 'bg-sky-600 text-white',
                    contact: [
                        { icon: Phone, detail: '54213277', other: 'Work', canCopy: true },
                    ]
                },
                file: [
                    { name: 'Last week file name', icon: PanelRightClose, color: 'text-yellow-500' },
                    { name: 'Coppy of Last week file name', icon: PanelRightClose, color: 'text-yellow-500' }
                ],
                datetime: '11:56 AM Feb 8',
                folder: '',
                acted: ['made a coppy of'],
                actor: ['V_username']
            },
        ],
    },
    {
        duration: 'This month',
        acting: [
            {
                acting_id: 3,
                owner: { letter: 'C', name: 'C_username', color: 'bg-pink-700 text-white' },
                file: [
                    { name: 'This month file name', icon: ReceiptText, color: 'text-blue-600' }
                ],
                datetime: '11:56 AM Feb 8',
                folder: '',
                acted: ['created', 'shared'],
                actor: ['C_username', 'Username_02'],
                sharedTo: [
                    {
                        people: 'C_username',
                        role: 'Editor',
                        level: 'user',
                        user: {
                            letter: 'C', name: 'C_username', color: 'bg-teal-500 text-white', type: 'user',
                            contact: [
                                { icon: MapPin, detail: 'KOLAO TOWER 1', other: '8' },
                            ]
                        },
                        color: 'bg-teal-500 text-white'
                    },
                    {
                        people: 'Anyone on the internet with the link',
                        role: 'Viewer',
                        level: 'anyone',
                        size: 18,
                        icon: Globe,
                        color: 'bg-green-200'
                    },
                    {
                        people: 'Groupname',
                        role: 'Commenter',
                        level: 'group',
                        size: 14,
                        icon: Users2,
                        color: 'bg-orange-400 text-white'
                    },
                    {
                        people: 'Groupname',
                        role: 'Anyone in this group with the link can edit',
                        level: 'company',
                        size: 12,
                        icon: Building2,
                        color: 'bg-blue-200 text-blue-800'
                    },
                ]
            },
            {
                acting_id: 4,
                owner: { letter: 'P', name: 'P_username', color: 'bg-purple-200 text-purple-900' },
                file: [
                    { name: 'This month file name', icon: PanelRightClose, color: 'text-yellow-500' }
                ],
                datetime: '11:56 AM Feb 8',
                folder: 'This month folder name',
                acted: ['uploaded'],
                actor: ['P_username', 'Username_02', 'Username_03']
            },
        ],
    },
    {
        duration: 'Last year',
        acting: [
            {
                acting_id: 5,
                owner: { letter: 'A', name: 'A_username', color: 'bg-yellow-700 text-white' },
                file: [
                    { name: 'Last year file name', icon: Table2, color: 'text-green-600' }
                ],
                datetime: 'Nov 28, 2023, 5:19:39 PM',
                folder: '',
                acted: ['shared'],
                actor: ['A_username'],
                sharedTo: [
                    {
                        people: 'Anyone on the internet with the link',
                        role: 'Editor',
                        level: 'anyone',
                        size: 18,
                        icon: Globe,
                        color: 'bg-green-200'
                    }
                ]
            },
            {
                acting_id: 6,
                owner: { letter: 'C', name: 'C_username', color: 'bg-indigo-600 text-white', image: 'https://github.com/vercel.png' },
                file: [
                    { name: 'Last year file name', icon: PanelRightClose, color: 'text-yellow-500' }
                ],
                datetime: 'Nov 28, 2023, 5:19:39 PM',
                folder: '',
                acted: ['created', 'shared'],
                actor: ['C_username'],
                sharedTo: [
                    {
                        people: 'S_username',
                        role: 'Viewer',
                        level: 'user',
                        user: { letter: 'S', name: 'S_username', color: 'bg-blue-800 text-white text-xs' },
                        color: 'bg-teal-500 text-white'
                    }
                ]
            },
            {
                acting_id: 7,
                owner: { letter: 'M', name: 'M_username', color: 'bg-teal-600 text-white' },
                file: [
                    { name: 'Last year file name', icon: ReceiptText, color: 'text-blue-600' }
                ],
                datetime: 'Nov 28, 2023, 5:19:39 PM',
                folder: '',
                acted: ['shared'],
                actor: ['M_username'],
                sharedTo: [
                    {
                        people: 'P_username',
                        role: 'Editor',
                        level: 'user',
                        user: { letter: 'P', name: 'P_username', color: 'bg-purple-200 text-purple-900 text-xs' },
                        color: 'bg-teal-500 text-white'
                    },
                    {
                        people: 'Anyone on the internet with the link',
                        role: 'Viewer',
                        level: 'anyone',
                        size: 18,
                        icon: Globe,
                        color: 'bg-green-200'
                    }
                ]
            },
            {
                acting_id: 8,
                owner: { letter: 'M', name: 'M_username', color: 'bg-yellow-100 text-pink-700 font-semibold' },
                file: [
                    { name: 'Last year file name', icon: ReceiptText, color: 'text-blue-600' }
                ],
                datetime: 'Nov 28, 2023, 5:19:39 PM',
                folder: '',
                acted: ['shared'],
                actor: ['M_username'],
                sharedTo: [
                    {
                        people: 'Groupname',
                        role: 'Anyone in this group with the link can edit',
                        level: 'company',
                        size: 12,
                        icon: Building2,
                        color: 'bg-blue-200 text-blue-800'
                    },
                    {
                        people: 'Groupname',
                        role: 'Commenter',
                        level: 'group',
                        size: 14,
                        icon: Users2,
                        color: 'bg-orange-400 text-white'
                    }

                ]
            },
            {
                acting_id: 9,
                owner: { letter: 'C', name: 'C_username', color: 'bg-pink-700 text-white' },
                file: [
                    { name: 'Last year file name', icon: ReceiptText, color: 'text-blue-600' }
                ],
                datetime: 'Nov 28, 2023, 5:19:39 PM',
                folder: '',
                acted: ['created', 'shared'],
                actor: ['C_username', 'Username_02'],
                sharedTo: [
                    {
                        people: 'C_username',
                        role: 'Editor',
                        level: 'user',
                        user: { letter: 'C', name: 'C_username', color: 'bg-teal-500 text-white', image: 'https://github.com/shadcn.png' },
                        color: 'bg-teal-500 text-white'
                    },
                    {
                        people: 'Anyone on the internet with the link',
                        role: 'Viewer',
                        level: 'anyone',
                        size: 18,
                        icon: Globe,
                        color: 'bg-green-200'
                    },
                    {
                        people: 'Groupname',
                        role: 'Commenter',
                        level: 'group',
                        size: 14,
                        icon: Users2,
                        color: 'bg-orange-400 text-white'
                    },
                    {
                        people: 'Groupname',
                        role: 'Anyone in this group with the link can edit',
                        level: 'company',
                        size: 12,
                        icon: Building2,
                        color: 'bg-blue-200 text-blue-800'
                    },
                ]
            }
        ],
    },
]


export default function ActivityPage() {

    const [searcButton, setSearcButton] = React.useState(0)
    const [fileId, setFileId] = React.useState('')


    const [selectedItemsByOrder, setSelectedItemsByOrder] = React.useState<Record<number, any[]>>({});
    const handleCheckboxChange1 = (orderID: number, item: any) => {
        setSelectedItemsByOrder((prevSelectedItems) => {

            const selectedItemsForOrder = prevSelectedItems[orderID] || [];

            const isSelected = selectedItemsForOrder.some(
                (selectedItem) => selectedItem.menu_item.ID === item.menu_item.ID
            );

            let newSelectedItems: any[];

            if (isSelected) {
                // If already selected, remove the clicked item
                newSelectedItems = selectedItemsForOrder.filter(
                    (selectedItem) => selectedItem.menu_item.ID !== item.menu_item.ID
                );
            } else {
                // If not selected, add the clicked item
                newSelectedItems = [...selectedItemsForOrder, item];
            }

            return {
                ...prevSelectedItems,
                [orderID]: newSelectedItems,
            };
        });
    };


    const [selectedActing, setSelectedActing] = React.useState<Record<number, any[]>>({});

    const handleShowAll = (actingID: number, item: any) => {
        setSelectedActing((prevSelectedItems) => {

            const selectedActingToShowAll = prevSelectedItems[actingID] || [];

            let newSelectedItems: any[] = [...selectedActingToShowAll, item];

            return {
                ...prevSelectedItems,
                [actingID]: newSelectedItems,
            };
        });
    };

    const handleShowLess = (orderID: number) => {
        setSelectedActing((prevSelectedItems) => { return { ...prevSelectedItems, [orderID]: [] }; });
    };


    const [copyButton, setCopyButton] = React.useState(false)
    const [copyContact, setCopyContact] = React.useState(false)


    return (
        <>
            <ScrollArea className="w-full h-screen">
                <div className="pr-4 pb-8">

                    {activities.map((act, dkey) =>
                        <>
                            <p className={'text-sm font-medium mb-8 mt-' + (dkey === 0 ? 3 : 8)}>{act.duration}</p>

                            {act.acting.map((ac: any, akey) => {
                                const sharedTo = ac.sharedTo
                                const folder = ac.folder
                                const acting_id = ac.acting_id
                                const showAllBtn = selectedActing[acting_id]?.some((selectedItem) => selectedItem === acting_id)

                                return <><div className={'flex justify-between space-x-4 mb-' + (sharedTo?.length > 3 ? 0 : 10)} key={akey}>

                                    <ProfileHoverCard info={ac.owner} size={"size-9"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} />

                                    <div className="space-y-1 w-64">

                                        <h4 className="text-xs font-normal leading-none text-black">
                                            {ac.actor[0]}
                                            {ac.actor.length > 1 ? ' and ' : ''}
                                            {ac.actor.length > 2 ? (ac.actor.length - 1) + ' others' : ac.actor[1]}
                                            {ac.acted.map((a: any, k: number) => ' ' + a +
                                                (k === ac.acted.length - 1 ? (ac.acted.includes('made a coppy of') ? '' : ' an item') :
                                                    (k === ac.acted.length - 2 ? ' and' : ', '))
                                            )}
                                        </h4>
                                        <p className="text-xs font-sans text-slate-700">{ac.datetime}</p>


                                        {folder !== '' ?
                                            <div className="flex">
                                                <FileDriveButton variant="outline" setOpen={() => alert('Open in folder')} mb={0} show={true} icon={<Folder size={14} className="mr-2 fill-gray-400 text-gray-400" />} name={folder} tooltip="Open in folder" />
                                            </div> : ''}

                                        {ac.file.map((fi: any, fkey: any) =>
                                            <div className="flex justify-between" key={fkey}
                                                onMouseEnter={(e: any) => { setFileId(fkey); setSearcButton(acting_id); }}
                                                onMouseLeave={() => { setFileId(''); setSearcButton(0); }} >

                                                {folder !== '' ?
                                                    <div className="flex flex-row">
                                                        <CornerDownRight className="text-slate-400 ml-4 mr-1 mt-1" size={16} />

                                                        <FileDriveButton variant="outline" setOpen={() => alert(fi.name)} mb={sharedTo ? 2 : 1} show={true} icon={<fi.icon size={16} className={'mr-2 ' + fi.color} />} name={fi.name} tooltip="Open in file app" />
                                                    </div>
                                                    :
                                                    <FileDriveButton variant="outline" setOpen={() => alert(fi.name)} mb={sharedTo ? 2 : 1} show={true} icon={<fi.icon size={16} className={'mr-2 ' + fi.color} />} name={fi.name} tooltip="Open in file app" />
                                                }

                                                <FileDriveButton variant="ghost" setOpen={() => alert('View file in folder')} mb={0} show={acting_id === searcButton && fkey === fileId ? true : false} icon={<Search size={13} />} name="" tooltip="View file in folder" />

                                            </div>)}


                                        {sharedTo?.map((share: any, skey: any) => skey < 3 ? <SharedToList index={skey} share={share} shown={true} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> : '')}

                                        {sharedTo?.map((share: any, skey: any) => skey > 2 && showAllBtn ?
                                            <SharedToList index={skey} share={share} shown={showAllBtn ? true : false} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> : '')}

                                    </div>
                                </div>

                                    {ac.sharedTo?.length > 3 ?
                                        <div className="flex justify-between space-x-4 mb-10">

                                            {showAllBtn ?
                                                <Button type="button" onClick={() => handleShowLess(acting_id)} variant="ghost" className="h-8 text-xs mt-1 mb-10 rounded-full text-blue-700">
                                                    Show less
                                                </Button>
                                                :
                                                <Button type="button" onClick={() => handleShowAll(acting_id, acting_id)} variant="ghost" className="h-8 text-xs mt-1 mb-10 rounded-full text-blue-700">
                                                    Show all
                                                </Button>}

                                        </div>
                                        : ''} </>

                                {/* {selectedItemsByOrder[orderList.ID]?.some((selectedItem) => selectedItem.menu_item.ID === groupedItem.menu_item.ID */ }
                                {/* https://github.com/kolao-ithq/ithq-lcc-web-admin/blob/main/src/pages/kitchen/OrderLists.tsx */ }

                            })}

                        </>)}

                    <div className='h-16'></div>
                </div>
            </ScrollArea>
        </>
    )
}


function FileDriveButton(
    {
        variant,
        mb,
        show,
        icon,
        name,
        tooltip,
        setOpen,
        //     setSelectedStatus,
    }: {
        variant: any,
        mb: number,
        show: boolean,
        icon?: any,
        name: String,
        tooltip: String,
        setOpen: (alert: any) => void,
        //       info: ({color: String,name: String}),      
        //     setSelectedStatus: (status: Status | null) => void
    }
) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button type="button" variant={variant} size={variant === 'outline' ? 'default' : 'sm'} onClick={setOpen}
                        className={variant === 'outline' ? "h-8 border-slate-400 text-xs mt-1 mb-" + mb : 'rounded-full' + (show ? '' : ' hidden')}>

                        {icon} {name}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="text-white text-xs h-8 bg-black border-none rounded-r-sm">
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>


        // <TooltipProvider>
        //                             <Tooltip>
        //                                 <TooltipTrigger asChild>
        //                                 <Button type="button" variant="outline" onClick={() => alert(fi.name)} 
        //                                 className={'h-8 border-slate-400 text-xs mt-1 mb-'+ (ac.sharedTo ? '2' : '1') }>
        //                                     {<fi.icon size={16} className={'mr-2 '+ fi.color } />} { fi.name }  
        //                                 </Button> 
        //                                 </TooltipTrigger>
        //                                 <TooltipContent side='bottom' className='text-white text-xs h-8 bg-black border-none rounded-r-sm'>
        //                                     <p>Open in file app</p>
        //                                 </TooltipContent>
        //                             </Tooltip>
        //                         </TooltipProvider>   h-8 border-slate-400 text-xs mt-1 mb-   icon size mr-2 color name   Tooltip

        // <TooltipProvider>
        //                         <Tooltip>                                        
        //                             <TooltipTrigger asChild>
        //                                 <Button variant="ghost" size='sm' onClick={() => alert('View file in folder')} 
        //                                 className={'rounded-full'+ (ac.acting_id === searcButton && fkey.toString() === fileId ? '' : ' hidden')} >
        //                                     <Search size={13} />
        //                                 </Button>
        //                             </TooltipTrigger>
        //                             <TooltipContent side='bottom' className='text-white text-xs h-8 bg-black border-none rounded-r-sm'>
        //                                 <p>View file in folder</p>
        //                             </TooltipContent>
        //                         </Tooltip>
        //                     </TooltipProvider>

        // <TooltipProvider>
        //                         <Tooltip>
        //                             <TooltipTrigger asChild>
        //                             <Button type="button" variant="outline" onClick={() => alert(fi.name)} 
        //                             className={'h-8 border-slate-400 text-xs mt-1 mb-'+ (ac.sharedTo ? '2' : '1') }>
        //                                 {<fi.icon size={16} className={'mr-2 '+ fi.color } />} { fi.name }  
        //                             </Button> 
        //                             </TooltipTrigger>
        //                             <TooltipContent side='bottom' className='text-white text-xs h-8 bg-black border-none rounded-r-sm'>
        //                                 <p>Open in file app</p>
        //                             </TooltipContent>
        //                         </Tooltip>
        //                     </TooltipProvider>

        // <TooltipProvider>
        //                         <Tooltip>
        //                             <TooltipTrigger asChild>
        //                                 <Button type="button" variant="outline" onClick={() => alert('Open in folder')} className="h-8 border-slate-400 text-xs mt-1 mb-0">
        //                                     {/* <BookUser size={14} className="mr-2 text-gray-500" /> { ac.folder } */}
        //                                     <Folder size={14} className="mr-2 fill-gray-400 text-gray-400" /> { ac.folder }
        //                                 </Button> 
        //                             </TooltipTrigger>
        //                             <TooltipContent side='bottom' className='text-white text-xs h-8 bg-black border-none rounded-r-sm'>
        //                                 <p>Open in folder</p>
        //                             </TooltipContent>
        //                         </Tooltip>
        //                     </TooltipProvider>

    )
}

function SharedToList(
    {
        index,
        share,
        shown,
        copyButton,
        copyContact,
        setCopyButton,
        setCopyContact
    }: {
        index: number,
        share: any,
        shown: boolean,
        copyButton: boolean,
        copyContact: boolean,
        setCopyButton: (open: boolean) => void,
        setCopyContact: (open: boolean) => void
    }
) {
    return (
        <div key={index} className={'flex space-x-2' + (shown ? '' : ' hidden ') + (index > 0 ? ' w-' + (index === share?.length - 1 ? 64 : 48) : '')} >

            {share.icon ?
                <Avatar className="size-7">
                    <AvatarFallback className={share.color}> <share.icon size={share.size} /> </AvatarFallback>
                </Avatar>
                :
                <ProfileHoverCard info={share.user} size="size-6" setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} />}

            <div className="space-y-1 mb-2">
                <h4 className="text-xs leading-none text-black font-medium">{share.people}</h4>
                <p className={'font-sans text-slate-' + (share.level === 'company' ? '900' : '700 text-xs')}>{share.role}</p>
            </div>
        </div>
    )

    // { ac.sharedTo?.map((share,skey) =>  skey > 2 && 
    //     selectedActing[ac.acting_id]?.some((selectedItem) => selectedItem === ac.acting_id) 
    //     ? 
    //     <div key={skey} className={'flex space-x-2 '+ 
    //         (selectedActing[ac.acting_id]?.some((selectedItem) => selectedItem === ac.acting_id) ? '' : 'hidden') + 
    //                 (skey > 0 ? ' w-'+ (skey === ac.sharedTo?.length -1 ? 64 : 48) : '')} >

    //         { share.icon ? 
    //             <Avatar className={'size-7'}>
    //                 <AvatarFallback className={ share.color }> <share.icon size={ share.size }/> </AvatarFallback>
    //             </Avatar>
    //         : 
    //             <ProfileHoverCard info={ share.user } size={6} /> } 

    //         <div className="space-y-1 mb-2">
    //             <h4 className="text-xs leading-none text-black font-medium">{ share.people }</h4>
    //             <p className={'font-sans text-slate-'+ (share.level === 'company' ? '900' : '700 text-xs') }>{ share.role }</p>
    //         </div>
    //     </div> : '') } 

    // { ac.sharedTo?.map((share,skey) => 
    //     skey < 3 ? <div key={skey} className={'flex space-x-2'+ (skey > 0 ? ' w-'+ (skey === ac.sharedTo?.length -1 ? 64 : 48) : '')} >

    //         { share.icon ? 
    //             <Avatar className={'size-7'}>
    //                 <AvatarFallback className={ share.color }> <share.icon size={ share.size }/> </AvatarFallback>
    //             </Avatar>
    //          : 
    //          <ProfileHoverCard info={ share.user } size={6} /> } 

    //         <div className="space-y-1 mb-2">
    //             <h4 className="text-xs leading-none text-black font-medium">{ share.people }</h4>
    //             <p className={'font-sans text-slate-'+ (share.level === 'company' ? '900' : '700 text-xs') }>{ share.role }</p>
    //         </div>
    //     </div> : '')}     

}