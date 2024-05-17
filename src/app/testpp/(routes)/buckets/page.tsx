
"use client"

import React from 'react'

import ProfileHoverCard from '@/features/fileDetail/views/pages/profileHvrCrd';
import MoreActionsList from '@/features/fileDetail/views/pages/moreAction';
 
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
// import { Label } from '@radix-ui/react-dropdown-menu';

import { 
    Users2, Building2, Table2, PanelRightClose, Dock, ReceiptText, Globe, Phone, MapPin, SquareMenu, SquareParking, ImageIcon, 
    ChevronDown, MenuSquare, Check, BookUser, BookCopy, UsersRound, Folder, Info, LayoutGrid, Menu, SquareGanttChart, 
    Download, X, UserPlus, FolderInput, Trash2, Link2, EllipsisVertical, PencilLine, Star, 
    ListTree, Headphones, Clapperboard
} from 'lucide-react';

import Image from "next/image" 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


import { Label } from "@/components/ui/label"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
   
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"


const tags = Array.from({ length: 23 }).map( (_, i, a) => `v1.2.0-beta.${a.length - i}` )

// const [viewDetails, setViewDetails] = React.useState(false) 


const buttons = [
    { 
        className: 'h-7 border-gray-500 rounded-l-full ', 
        icon:       Menu ,
        tooltip:   'List layout',
        layout:    'list'
    },
    { 
        className: 'h-7 border-gray-500 rounded-r-full mr-1 ', 
        icon:      LayoutGrid ,
        tooltip:   'Grid layout',
        layout:    'grid'
    },
    { 
        className: 'rounded-full border-none bg-', 
        circle:    true,
        icon:      Info ,
        tooltip:   ' details' 
    } 
]

const suggest = [ 
    { 
        trigger: 'Type', width: 48, only: 'folder',
        content: [
            { name: 'Documents',       icon: MenuSquare, color: 'text-blue-600' },
            { name: 'Spreadsheets',    icon: Table2,     color: 'text-green-600' },
            { name: 'Presentations',   icon: Dock,       color: 'text-amber-500' },
            { name: 'Photos & Images', icon: ImageIcon,  color: 'text-red-600' },
            { name: 'Videos',          icon: Clapperboard, color: 'text-red-600' },
            { name: 'Folders',         icon: Folder,     color: 'text-gray-600' },
            { name: 'Sites',           icon: ListTree,   color: 'text-indigo-500' }, 
            { name: 'Audio',           icon: Headphones, color: 'text-red-500' }    
        ]
    },
    { 
        trigger: 'People', width: 72, search: true, sub: ['All', 'Is owned by', 'Is shared by'], 
        content: [
            { avatar: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' },
            { avatar: 'S', name: 'S_username', color: 'bg-sky-500 text-white',    email: 's_username@gmail.com' },
            { avatar: 'C', name: 'C_username', color: 'bg-purple-500 text-white', email: 'c_username@gmail.com' },
            { avatar: 'M', name: 'M_username', color: 'bg-purple-500 text-white', email: 'm_username@gmail.com' },
            { avatar: 'P', name: 'P_username', color: 'bg-purple-500 text-white', email: 'p_username@gmail.com' },
            { avatar: 'A', name: 'A_username', color: 'bg-purple-500 text-white', email: 'a_username@gmail.com' },
            { avatar: 'Y', name: 'Y_username', color: 'bg-purple-500 text-white', email: 'y_username@gmail.com' },
        ]
    },
    { 
        trigger: 'Modified', width: 64, only: 'folder',
        content: [
            { name: 'Today' },
            { name: 'Last 7 days' },
            { name: 'Last 30 days' },
            { name: 'This year (2023)' },
            { name: 'Last year (2024)' },
            { name: 'Custom date range', sub: ['Before', 'After'] },
        ]
    },
    { 
        trigger: 'Location', width: 48, 
        content: [
            { name: 'Anywhere in Drive', icon: Check, color: 'text-blue-700' }, 
            { name: 'My Drive',          icon: BookUser }, 
            { name: 'Shared with me',    icon: UsersRound }, 
            { name: 'Shared drives',     icon: BookCopy } 
        ]
    }
]

const selects = [
    { icon: X,                size: 18, tooltip: 'Clear Selection'  },  //  setOpen: (open: boolean) => void
    { icon: UserPlus,         size: 15, tooltip: 'Share' },
    { icon: Download,         size: 15, tooltip: 'Download' },
    { icon: FolderInput,      size: 15, tooltip: 'Move' },
    { icon: Trash2,           size: 16, tooltip: 'Move to trash' },
    { icon: Link2,            size: 16, tooltip: 'Copy link' },
    { icon: EllipsisVertical, size: 15, tooltip: 'More actions', more: true },
]

const buckets = [
    { 
        bucket   : { name: 'Bucket name', icon: Table2, color: 'text-green-600' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user', icon: false } ],
        acted    : ['opened'], 
        datetime : '11:56 AM',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: Dock, color: 'text-amber-500' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['opened'], 
        datetime : 'Nov 28, 2023',
        location : 2
    },
    { 
        bucket   : { name: 'Bucket name', icon: Dock, color: 'text-amber-500' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['modified'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: Table2, color: 'text-green-600' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['edited'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: Dock, color: 'text-amber-500' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['opened'], 
        datetime : 'Nov 28, 2023',
        location : 2
    }, 
    { 
        bucket   : { name: 'Bucket name', icon: Dock, color: 'text-amber-500' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['edited'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: SquareMenu, color: 'text-blue-600' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['opened'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: Table2, color: 'text-green-600' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['edited'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: Table2, color: 'text-green-600' }, 
        actor    : [ 
            { 
                letter: 'S', name: 'S_username', color: 'bg-green-900 text-white', email: 's_username@gmail.com',
                contact: [
                    { icon: Phone, detail: '54213277', other: 'Work', canCopy: true },
                ] 
            } 
        ],
        acted    : ['edited'], 
        datetime : 'Nov 28, 2023',
        location : 2
    },
    { 
        bucket   : { name: 'Bucket name', icon: Dock, color: 'text-amber-500' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['edited'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: SquareParking, color: 'text-orange-600' }, 
        actor    : [ 
            { 
                letter: 'C', name: 'C_username', color: 'bg-purple-900 text-white', email: 'c_username@gmail.com',
                contact: [
                    { icon: MapPin, detail: 'KOLAO TOWER 1', other: '8' },
                ] 
            } 
        ],
        acted    : ['opened'], 
        datetime : 'Nov 28, 2023',
        location : 1
    },
    { 
        bucket   : { name: 'Bucket name', icon: ImageIcon, color: 'text-red-600' }, 
        actor    : [ { letter: 'V', name: 'V_username', color: 'bg-orange-500 text-white', email: 'v_username@gmail.com', type: 'user' } ],
        acted    : ['opened'], 
        datetime : 'Nov 28, 2023',
        location : 2
    },
]

const hiddens = [
    { icon: UserPlus,         tooltip: 'Share' },
    { icon: Download,         tooltip: 'Download' },
    { icon: PencilLine,       tooltip: 'Rename' },
    { icon: Star,             tooltip: 'Add to starred' },
    { icon: EllipsisVertical, tooltip: 'More actions', more: true },
]

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
                    { name: 'Last week file name',          icon: PanelRightClose, color: 'text-yellow-500' }, 
                    { name: 'Coppy of Last week file name', icon: PanelRightClose, color: 'text-yellow-500' }
                ], 
                datetime: '11:56 AM Feb 8', 
                folder: '', 
                acted: [ 'made a coppy of' ],
                actor: [ 'V_username' ]
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


export default function page() {

    const [copyButton, setCopyButton]   = React.useState(false)
    const [copyContact, setCopyContact] = React.useState(false)    

    const [pointBucket, setPointBucket] = React.useState<any>(null)  
    const [pressBucket, setPressBucket] = React.useState<any>(null) 

    const [viewDetails, setViewDetails] = React.useState(true)
    const [layout, setLayout]           = React.useState<String>('grid')
    const [column, setColumn]           = React.useState<number>(4)

    React.useEffect(() => { setColumn(viewDetails ? 4 : 3) }, [viewDetails, setColumn])

    const [suggested, setSuggested]     = React.useState<String>('file')

    const chosenSuggest = <Check size={16} className={'mr-2 text-gray-900'+ (suggested === 'file' ? ' ml-2' : '')} />

    // useEffect(() => {
    //     if (IsGetTicketDetail.data) {
    //         if (isLgScreen) {
    //             const modal = document.getElementById('modal_detail_bill') as any;
    //             modal.close();
    //         } else {
    //             const modal = document.getElementById('modal_detail_bill') as any;
    //             modal.showModal();
    //         }
    //     }
    // }, [IsGetTicketDetail.data, isLgScreen])
    
    const [pointSelect, setPointSelect] = React.useState<any>(null)
    const [pointHidden, setPointHidden] = React.useState<any>(null) 

    // const selects = [
    //     { icon: X,                size: 18, tooltip: 'Clear Selection', onClick: setPressBucket(null) },
    //     { icon: UserPlus,         size: 15, tooltip: 'Share' },
    //     { icon: Download,         size: 15, tooltip: 'Download' },
    //     { icon: FolderInput,      size: 15, tooltip: 'Move' },
    //     { icon: Trash2,           size: 16, tooltip: 'Move to trash' },
    //     { icon: Link2,            size: 16, tooltip: 'Copy link' },
    //     { icon: EllipsisVertical, size: 15, tooltip: 'More actions' },
    // ]

    // selects[0].click:() => setPressBucket(null)

    
    return (
    <div className='flex flex-row'>
        <div className='bg-slate-50 h-screen w-72'> bucket </div>
        <div className='flex flex-col w-screen'>
            <div className='flex flex-row bg-slate-50 h-14'> bucket </div>                                   

            <div className='flex flex-row'>         
                <div className='flex flex-col'> 

                    <div className='flex flex-row mt-5 ml-5 mr-5 justify-between'> 
                    
                        <h1 className='text-gray-900 font-normal text-xl'>Buckets</h1>

                        <div className='mr-1'>
                            { buttons.map((bt:any) => 
                                {
                                    const circle    = bt.circle
                                    const className = bt.className                        
                                    const bLayout   = bt.layout

                                    const chosen    = ( bLayout && bLayout === layout ? (layout === 'grid' ? 'border-l-sky-200' : 'border-r-sky-200') +' bg-sky-200' : '')

                                    const checked   = ( bLayout && bLayout === layout ? <Check size={16} className='mr-1 text-gray-900 font-bold' /> : '')
                                                                                                                                                
                                    const icon      = <bt.icon size={ 16 } className={'text-gray-900 '+ ( circle ? '' : ( bLayout && bLayout === layout ? '' : 'ml-2 mr-2')) } />

                                    const button    = ( circle ? 
                                        <Button type="button" variant="outline" size="sm" onClick={() => setViewDetails( !viewDetails )} 
                                            className={ className + (viewDetails ? 'white' : 'sky-200')}>{ icon }</Button> 
                                                               : 
                                                               <Button variant="outline" onClick={() => setLayout( bLayout )} 
                                                                    className={ className + chosen }>{ checked } { icon }</Button> )
                                
                                    return <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>{ button }</TooltipTrigger>
                                            <TooltipContent side="bottom" className="text-white text-xs h-8 bg-black border-none rounded-r-sm">
                                                <p>{ circle ? (viewDetails ? 'View' : 'Hide') : '' } { bt.tooltip }</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                }                           
                            ) }                            
                        </div>

                    </div>

                    <div className={'flex flex-row mt-5 ml-5 mb-2'+ (pressBucket !== null ? ' hidden' : '')}> 
                    
                        <Label className='font-semibold text-xs text-gray-600 mr-5 mt-2'>Suggested</Label>

                        <Button variant="outline" onClick={() => setSuggested('file')} className={'h-7 font-semibold text-xs text-gray-600 border-gray-500 rounded-l-full'+ (suggested === 'file' ? ' bg-sky-200 border-r-sky-200' : '')}>
                            { suggested === 'file' ? chosenSuggest : <SquareGanttChart size={15} className={'mr-2 text-gray-900 ml-'+ (suggested !== 'file' ? 2 : 1)} /> }
                            <span className={'mr-'+ (suggested !== 'file' ? 2 : 1)} >Files</span>
                        </Button>
                        <Button variant="outline" onClick={() => setSuggested('folder')} className={'h-7 font-semibold text-xs text-gray-600 border-gray-500 mr-2 rounded-r-full'+ (suggested !== 'file' ? ' bg-sky-200 border-l-sky-200' : '')}>
                            { suggested !== 'file' ? chosenSuggest : <Folder size={15} className='mr-2 text-gray-900' /> } Folders
                        </Button>

                        { suggest.map((sug:any) => // only: 'folder',
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className={(sug.only ? (sug.only === suggested ? 'hidden ' : '') : '') +
                                'h-7 font-semibold text-xs text-gray-600 border-gray-500 mr-2'} >
                                    { sug.trigger } <ChevronDown size={12} className='ml-3 text-gray-900' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={'w-'+ sug.width } align="start">

                                { sug.search ? <Command><CommandInput placeholder="Search for people..." /></Command> : '' }

                                { sug.content.map((cont:any) => 
                                    { 
                                        const color  = cont.color
                                        const icon   = ( cont.icon ? <cont.icon size={17} className={'mr-3 '+ (color ? color : 'text-gray-700')} /> : <span className='mr-7'></span> ) 
                                        const name   = cont.name
                                        const avatar = cont.avatar

                                        return <DropdownMenuItem className='text-xs text-gray-600 font-medium'>

                                            { cont.sub ? 

                                            <HoverCard>
                                                <HoverCardTrigger asChild>
                                                    <span className='text-xs text-gray-600 font-medium ml-7'>{ name }</span>
                                                </HoverCardTrigger>
                                                <HoverCardContent className="w-80" side="right" align="end">
                                                    <div className="flex justify-between space-x-4">
                                                    <Avatar>
                                                        <AvatarImage src="https://github.com/vercel.png" />
                                                        <AvatarFallback>VC</AvatarFallback>
                                                    </Avatar>
                                                    <div className="space-y-1">
                                                        <h4 className="text-sm font-semibold">@nextjs</h4>
                                                        <p className="text-sm">
                                                        The React Framework – created and maintained by @vercel.
                                                        </p>
                                                        <div className="flex items-center pt-2">
                                                        {/* <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "} */}
                                                        <span className="text-xs text-muted-foreground">
                                                            Joined December 2021
                                                        </span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </HoverCardContent>
                                            </HoverCard>
                                            
                                            :   <>{ avatar ? 

                                                    <DropdownMenuSub>
                                                        <DropdownMenuSubTrigger className='text-xs text-gray-600 font-medium ml-0'>

                                                            <Avatar className="size-9 mr-5">
                                                                {/* <AvatarImage src={ info.image } alt={ info.name } /> */}
                                                                <AvatarFallback className={ color +' font-normal text-xl' }>{ avatar }</AvatarFallback>
                                                            </Avatar>

                                                            <div className='flex flex-col mr-10'>
                                                                { name } <span className='text-xs text-black font-light'>{ cont.email }</span>
                                                            </div>

                                                        </DropdownMenuSubTrigger>
                                                        <DropdownMenuPortal>
                                                            <DropdownMenuSubContent>
                                                                { sug.sub.map((s:any) => <DropdownMenuItem className='text-xs text-gray-600 font-medium'>{s}</DropdownMenuItem>) }
                                                            </DropdownMenuSubContent>
                                                        </DropdownMenuPortal>
                                                    </DropdownMenuSub> 

                                                : <>{ icon } { name }</> }</> }

                                        </DropdownMenuItem>
                                    }
                                ) }
                            </DropdownMenuContent>
                        </DropdownMenu> )} 

                    </div> 


                    <div className={'flex flex-row mt-5 ml-5 mb-1 w-auto bg-slate-100 rounded-l-full rounded-r-full mr-6'+ (pressBucket !== null ? '' : ' hidden')}>
                        
                        { selects.map((s,key:any) => 
                        { 
                            if ( s.more) { return <MoreActionsList id={pressBucket} pointBucket={pointBucket} pressBucket={pressBucket} /> } 
                            else {
                                return <>
                                <TooltipProvider>
                                <Tooltip>
                                   <TooltipTrigger asChild>
                                        <Button type="button" variant="outline" size="sm" className={'rounded-full bg-slate-100 border-'+ (pointSelect === key ? 'orange-400' : 'none')}
                                            onMouseEnter={() => setPointSelect(key)} 
                                            onMouseLeave={() => setPointSelect(null)} 
                                            onClick={() => key > 0 ? alert(s.tooltip +' '+ pressBucket) : setPressBucket(null)} >                                    
                                               <s.icon size={ s.size } className='text-gray-700' />
                                        </Button>                                    
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" className="text-white text-xs h-8 bg-black border-none rounded-r-sm">
                                        <p>{ s.tooltip }</p>
                                    </TooltipContent>
                               </Tooltip>
                            </TooltipProvider> 
                            {key === 0 ? <span className='text-xs mt-2 ml-1 text-gray-600 mr-3 font-medium'>1 selected</span> : ''}
                            </>
                            }
                        })}
                        
                        {/* <Button type="button" variant="outline" size="sm" className="rounded-full bg-slate-100 border-none">
                            <Download size={15} className='text-gray-700' />  onClick={() => s.onClick}
                        </Button> */}                      
                        
                    </div> 
                    
                    <div onClick={() => setPressBucket(null)} className={'flex flex-row mt-4 ml-5 mb-1 w-auto mr-6 text-gray-700 font-semibold text-xs'+ (layout !== 'grid' ? '' : ' hidden')}>
                        <div className={(viewDetails ? 'w-[340px]' : 'w-[260px]')}>Name</div>

                        <div className={(viewDetails ? 'w-[290px]' : 'w-[265px]')}>Reason suggested</div>

                        <div className={(viewDetails ? 'w-48' : 'w-40')}>Owner</div>

                        <div>Location</div>                      
                    </div>
                    <DropdownMenuSeparator className={'mr-6 ml-5'+ (layout !== 'grid' ? '' : ' hidden')} />     

                    
                    <ScrollArea className="w-auto h-screen">

                        <div className={'flex flex-col mr-6 ml-5'+ (layout !== 'grid' && suggested === 'file' ? '' : ' hidden')}>
                            
                            { buckets.map((bc:any, ckey:number) => 
                                {                                     
                                    const color    = bc.bucket.color
                                    const name     = bc.bucket.name
                                    const actor    = bc.actor[0]
                                    const type     = actor.type
                                    const loca:any = suggest[3].content[ bc.location ]

                                    if ( type && type === 'user' && layout !== 'grid' ) { actor.icon = true }

                                return <>                            
                                <div onClick={() => setPressBucket(ckey)} onMouseEnter={() => setPointBucket(ckey)} 
                                    onMouseLeave={() => setPointBucket(null)} className={'flex flex-row w-auto '+ 
                                    (ckey === pressBucket ? 'bg-sky-200' : (ckey === pointBucket ? 'bg-gray-100' : '')) } >

                                    <div className={'flex flex-row text-xs font-medium text-gray-700 mt-3 '+ (viewDetails ? 'w-[340px]' : 'w-[260px]')}>                                                
                                        <bc.bucket.icon size={16} className={'ml-4 mr-4 '+ color} /> { name } { ckey + 1 }
                                    </div>

                                    <div className={'flex flex-row text-xs mt-3 font-normal text-gray-500 '+ (viewDetails ? 'w-[285px]' : 'w-[260px]')}>                                                                          
                                        { type && type === 'user' ? 'You' : actor.name } { bc.acted[0] } &bull; { bc.datetime }
                                    </div>

                                    <div className={'flex flex-row text-xs mt-2 '+ (viewDetails ? 'w-48' : 'w-40')}>                                                                            
                                        <ProfileHoverCard info={ actor } size={"size-5 ml-2 mr-2"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> 
                                        
                                        <span className='mt-1 font-normal text-gray-600'> { type && type === 'user' ? 'me' : actor.name } </span>
                                    </div>

                                    <div className={'flex flex-row text-xs font-medium text-gray-500 mt-3 '+ (viewDetails ? 'w-[182px]' : 'w-[172px]')}> 
                                        <loca.icon size={16} className='ml-2 mr-2 text-gray-600' /> { loca.name }
                                    </div>

                                    <div className={'text-right'+ (viewDetails ? ' w-[200px]' : '')}> 
                                    { hiddens.map((s,key:any) => 
                                    { 
                                        if ( s.more) { return <MoreActionsList id={pressBucket} pointBucket={pointBucket} pressBucket={pressBucket} /> } 
                                        else {
                                            return <>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button type="button" variant="outline" size="sm" className={'rounded-full '+ 
                                                          (viewDetails ? (ckey === pointBucket ? 
                                                            (ckey === pressBucket ? 'bg-sky-200 border-none' : 'bg-gray-100 '+
                                                                (key === pointHidden ? 'border-gray-300' : 'border-none')) : 'hidden') 
                                                                   : 'hidden') }

                                                            onMouseEnter={() => setPointHidden(key)} 
                                                            onMouseLeave={() => setPointHidden(null)} 
                                                            onClick={() => alert(s.tooltip +' '+ pointBucket)} >

                                                                <s.icon size={14} className='text-gray-700' />
                                                        </Button>                                    
                                                    </TooltipTrigger>
                                                    <TooltipContent side="bottom" className="text-white text-xs h-8 bg-black border-none rounded-r-sm">
                                                        <p>{ s.tooltip }</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider> 
                                        </>
                                        }
                                    })}
                                    </div>

                                </div> 
                                
                                <DropdownMenuSeparator />
                                </> 
                                } 
                            ) }

                        </div>                   

                        
                        <div className={'flex flex-col mr-2'+ (layout === 'grid' && suggested === 'file' ? '' : ' hidden')}>
                        { buckets.map((br, rkey:number) => rkey % column === 0 ? 
                        <>
                            { (rkey > 0 ? '' : <div onClick={() => setPressBucket(null)} className='h-3'></div>) }

                            <div className='flex flex-row'>

                                { buckets.map((bc:any, ckey:number) => 
                                    { 
                                        const actor = bc.actor[0]
                                        const type  = actor.type

                                        if ( layout === 'grid' ) { actor.icon = false }

                                        return ( ckey >= rkey && ckey < rkey + column ? 
                                        <>
                                        { (ckey > rkey ? '' : <div onClick={() => setPressBucket(null)} className='w-5'></div>) }
                                        
                                        <div onClick={() => setPressBucket(ckey)} onMouseEnter={() => setPointBucket(ckey)} 
                                            onMouseLeave={() => setPointBucket(null)} className={'flex flex-col w-72 h-56 rounded-xl '+ 
                                        (ckey === pressBucket ? 'bg-sky-200' : (ckey === pointBucket ? 'bg-gray-200' : 'bg-slate-100')) } >

                                            <div className='flex flex-row justify-between mt-1 mb-1'>                                    
                                                <div className='flex flex-row text-xs font-medium text-gray-700 mt-3'>                                                
                                                    <bc.bucket.icon size={16} className={'ml-4 mr-4 '+ bc.bucket.color} /> { bc.bucket.name } { ckey + 1 }
                                                </div>

                                                <MoreActionsList id={ ckey } pointBucket={pointBucket} pressBucket={pressBucket} />
                                            </div>

                                            <AspectRatio ratio={2 / 1} className="rounded-md ml-2 mr-2 bg-white">
                                                {/* <Image
                                                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                                                alt="Photo by Drew Beamer"
                                                fill
                                                className="rounded-md object-cover"
                                                /> */}
                                            </AspectRatio>

                                            <div className='flex flex-row text-xs mt-2 font-light text-gray-700'>                                                                            
                                                <ProfileHoverCard info={ actor } size={"size-5 ml-2 mr-2"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> 
                                                
                                                { type && type === 'user' ? 'You' : bc.actor[0].name } { bc.acted[0] } &bull; { bc.datetime }
                                            </div>
                                        </div>

                                        <div onClick={() => setPressBucket(null)} className='w-4'></div>
                                        </> 
                                        : '' ) 
                                    }
                                ) }
                                                           
                            </div>
                            <div onClick={() => setPressBucket(null)} className='h-4'></div>  

                        </> : '')}                        
                        </div>


                        <div className={'flex flex-col mr-2'+ (layout === 'grid' && suggested !== 'file' ? '' : ' hidden')}>
                        { buckets.map((br, rkey:number) => rkey % column === 0 ? 
                        <>
                            { (rkey > 0 ? '' : <div onClick={() => setPressBucket(null)} className='h-3'></div>) }

                            <div className='flex flex-row'>

                                { buckets.map((bc:any, ckey:number) => 
                                    { 
                                        const actor = bc.actor[0]
                                        const type  = actor.type

                                        if ( layout === 'grid' ) { actor.icon = false }

                                        return ( ckey >= rkey && ckey < rkey + column ? 
                                        <>
                                        { (ckey > rkey ? '' : <div onClick={() => setPressBucket(null)} className='w-5'></div>) }
                                        
                                        <div onClick={() => setPressBucket(ckey)} onMouseEnter={() => setPointBucket(ckey)} 
                                            onMouseLeave={() => setPointBucket(null)} className={'flex flex-col w-72 rounded-xl '+ 
                                        (ckey === pressBucket ? 'bg-sky-200' : (ckey === pointBucket ? 'bg-gray-200' : 'bg-slate-100')) } >

                                            <div className='flex flex-row justify-between mt-1 mb-1'>                                    
                                                <div className='flex flex-row text-xs font-medium text-gray-700 mt-2'>                                                
                                                    <Folder size={19} className={'ml-4 mr-4 fill-gray-500 text-gray-500'} /> 
                                                    <span className='mt-1'>{ bc.bucket.name } { ckey + 1 }</span>                                                    
                                                </div>

                                                <MoreActionsList id={ ckey } pointBucket={pointBucket} pressBucket={pressBucket} />
                                            </div>

                                            {/* <div className='flex flex-row text-xs mt-2 font-light text-gray-700'>                                                                            
                                                <ProfileHoverCard info={ actor } size={"size-5 ml-2 mr-2"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> 
                                                
                                                { type && type === 'user' ? 'You' : bc.actor[0].name } { bc.acted[0] } &bull; { bc.datetime }
                                            </div> */}
                                        </div>

                                        <div onClick={() => setPressBucket(null)} className='w-4'></div>
                                        </> 
                                        : '' ) 
                                    }
                                ) }
                                                           
                            </div>
                            <div onClick={() => setPressBucket(null)} className='h-4'></div>  

                        </> : '')}                        
                        </div>


                        <div className={'flex flex-col mr-6 ml-5'+ (layout !== 'grid' && suggested !== 'file' ? '' : ' hidden')}>
                            
                            { buckets.map((bc:any, ckey:number) => 
                                {                                     
                                    const color    = bc.bucket.color
                                    const name     = bc.bucket.name
                                    const actor    = bc.actor[0]
                                    const type     = actor.type
                                    const loca:any = suggest[3].content[ bc.location ]

                                    if ( type && type === 'user' && layout !== 'grid' ) { actor.icon = true }

                                return <>                            
                                <div onClick={() => setPressBucket(ckey)} onMouseEnter={() => setPointBucket(ckey)} 
                                    onMouseLeave={() => setPointBucket(null)} className={'flex flex-row w-auto '+ 
                                    (ckey === pressBucket ? 'bg-sky-200' : (ckey === pointBucket ? 'bg-gray-100' : '')) } >

                                    <div className={'flex flex-row text-xs font-medium text-gray-700 mt-3 '+ (viewDetails ? 'w-[340px]' : 'w-[260px]')}>                                                
                                        {/* <bc.bucket.icon size={16} className={'ml-4 mr-4 '+ color} /> { name } { ckey + 1 } */}

                                        <Folder size={19} className={'ml-4 mr-4 fill-gray-500 text-gray-500'} /> 
                                                    <span className='mt-0'>{ name } { ckey + 1 }</span>
                                    </div>

                                    <div className={'flex flex-row text-xs mt-3 font-normal text-gray-500 '+ (viewDetails ? 'w-[285px]' : 'w-[260px]')}>                                                                          
                                        { type && type === 'user' ? 'You' : actor.name } { bc.acted[0] } &bull; { bc.datetime }
                                    </div>

                                    <div className={'flex flex-row text-xs mt-2 '+ (viewDetails ? 'w-48' : 'w-40')}>                                                                            
                                        <ProfileHoverCard info={ actor } size={"size-5 ml-2 mr-2"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> 
                                        
                                        <span className='mt-1 font-normal text-gray-600'> { type && type === 'user' ? 'me' : actor.name } </span>
                                    </div>

                                    <div className={'flex flex-row text-xs font-medium text-gray-500 mt-3 '+ (viewDetails ? 'w-[182px]' : 'w-[172px]')}> 
                                        <loca.icon size={16} className='ml-2 mr-2 text-gray-600' /> { loca.name }
                                    </div>

                                    <div className={'text-right'+ (viewDetails ? ' w-[200px]' : '')}> 
                                    { hiddens.map((s,key:any) => 
                                    { 
                                        if ( s.more) { return <MoreActionsList id={pressBucket} pointBucket={pointBucket} pressBucket={pressBucket} /> } 
                                        else {
                                            return <>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <Button type="button" variant="outline" size="sm" className={'rounded-full '+ 
                                                          (viewDetails ? (ckey === pointBucket ? 
                                                            (ckey === pressBucket ? 'bg-sky-200 border-none' : 'bg-gray-100 '+
                                                                (key === pointHidden ? 'border-gray-300' : 'border-none')) : 'hidden') 
                                                                   : 'hidden') }

                                                            onMouseEnter={() => setPointHidden(key)} 
                                                            onMouseLeave={() => setPointHidden(null)} 
                                                            onClick={() => alert(s.tooltip +' '+ pointBucket)} >

                                                                <s.icon size={14} className='text-gray-700' />
                                                        </Button>                                    
                                                    </TooltipTrigger>
                                                    <TooltipContent side="bottom" className="text-white text-xs h-8 bg-black border-none rounded-r-sm">
                                                        <p>{ s.tooltip }</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider> 
                                        </>
                                        }
                                    })}
                                    </div>

                                </div> 
                                
                                <DropdownMenuSeparator />
                                </> 
                                } 
                            ) }

                        </div> 
                    
                        <div className='h-16'></div>                         
                    </ScrollArea>


                    {/* <div className={'flex flex-col mr-6 ml-5'+ (layout !== 'grid' && suggested === 'file' ? '' : ' hidden')}>
                            
                        <ListPage buckets={buckets} suggest={suggest} hiddens={hiddens} layout='list' suggested='file'
                            pressBucket={pressBucket} pointBucket={pointBucket} viewDetails={viewDetails} pointHidden={pointHidden} 
                            copyButton={copyButton} copyContact={copyContact} setPressBucket={setPressBucket} 
                            setPointBucket={setPointBucket} setPointHidden={setPointHidden} setCopyButton={setCopyButton} 
                            setCopyContact={setCopyContact} />
                    </div>   */}


                    {/* <div className={'flex flex-col mr-6 ml-5'+ (layout !== 'grid' && suggested !== 'file' ? '' : ' hidden')}>
                                                       
                        <ListPage buckets={buckets} suggest={suggest} hiddens={hiddens} layout='list' suggested='folder'
                            pressBucket={pressBucket} pointBucket={pointBucket} viewDetails={viewDetails} pointHidden={pointHidden} 
                            copyButton={copyButton} copyContact={copyContact} setPressBucket={setPressBucket} 
                            setPointBucket={setPointBucket} setPointHidden={setPointHidden} setCopyButton={setCopyButton} 
                            setCopyContact={setCopyContact} />
                    </div>  */}

                </div>
                <div className={'bg-slate-50 h-screen w-72 ml-0'+ (viewDetails ? ' hidden' : '')}></div>
            </div>
        </div>      
    </div>
  )
}