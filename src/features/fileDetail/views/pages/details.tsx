
// export default function DetailsPage() {
//     return <h1>Hello, Home page!</h1>
//   }

"use client"

import * as React from "react"
 
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

// import React from 'react'
import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"

import { 
    BookMarkedIcon, UserRoundPlusIcon, CopyIcon,
    Mic, Pencil, MailIcon, MessageSquare, VideoIcon, CalendarCheck2, Globe
} from 'lucide-react';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
  
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"  

const fileDetails = [
    { title: 'Type',                 deatil: 'Google Sheet' }, 
    { title: 'Size',                 deatil: '1 KB' }, 
    { title: 'Storage used',         deatil: '1 KB' }, 
    { title: 'Location',             deatil: 'My Drive',        control: 'Button', icon: BookMarkedIcon }, 
    { title: 'Owner',                deatil: 'me' }, 
    { title: 'Modified',             deatil: 'Mar 5, 2024 by me' }, 
    { title: 'Opened',               deatil: 'Mar 5, 2024 by me' }, 
    { title: 'Created',              deatil: 'Mar 5, 2024' }, 
    { title: 'Download permissions', deatil: 'Viewers can download' },
    { title: 'Description',          deatil: 'Add description', control: 'Input' },
    { title: 'Read-only',            deatil: 'test' }, 
    { title: 'test',                 deatil: '' }
]      
  
const usrHvrCrdBtn = [
    {
      head: [
        { name: 'Add name pronunciation', icon: Mic,    owner: true, color: 'text-blue-500' },
        { name: 'Edit your info',         icon: Pencil, owner: true },
        { name: 'Add to contacts',        icon: UserRoundPlusIcon },
      ],
      foot: [
        { name: 'Open detailed view' }, 
        { name: 'Send email',                  icon: MailIcon }, 
        { name: 'Send message',                icon: MessageSquare }, 
        { name: 'Send a video meeting invite', icon: VideoIcon }, 
        { name: 'Schedule event',              icon: CalendarCheck2 }, 
      ]
    }
]

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  

export default function DetailsPage() {
    return (
        <>
        {/* <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                <>
                    <div key={tag} className="text-sm">
                    {tag}
                    </div>
                    <Separator className="my-2" />
                </>
                ))}
            </div>
        </ScrollArea> */}

        <ScrollArea className="w-full h-screen">
            <div className="pr-4 pb-8">

                <AspectRatio ratio={2 / 1} className="bg-muted rounded-md">
                    {/* <Image
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-md object-cover"
                    /> */}
                </AspectRatio>

                <p className="text-sm font-medium mt-5 mb-3">Who has access</p>    

                <div className='flex flex-row'>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                        <Avatar className='mr-1 size-7'>
                            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                            <AvatarFallback className='bg-orange-400 text-white'>C</AvatarFallback>
                        </Avatar>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-90">
                        <div className="flex justify-between space-x-4">
                            <Avatar className="size-16 mt-2 ml-6">
                            <AvatarImage src="https://github.com/vercel.png" />
                            <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                            <div className="flex flex-col">
                                <div className="flex justify-between space-x-2">
                                <h1 className="font-semibold mt-3 ml-3 text-xl">Fullname</h1>

                                {usrHvrCrdBtn.map((btn) => btn.head.map((bt) => !bt.owner ? null
                                    : 
                                    <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                        <Button onClick={() => alert(bt.name)} variant="ghost" className="rounded-full size-12"><bt.icon /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                        <p>{bt.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    </TooltipProvider> 
                                ))}
                                </div>
                                <div className="flex justify-between">
                                <Button variant="link" className="text-slate-600 text-xs">
                                    emailname@email.com
                                    <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                        <Button onClick={() => alert('Copy email')} variant="ghost" className="h-12 w-12"><CopyIcon size={14} /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                        <p>Copy email</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    </TooltipProvider> 
                                </Button>
                                </div>                            
                            </div>   
                            </div>
                        </div>

                        <DropdownMenuSeparator></DropdownMenuSeparator>

                        <div className="flex ">
                            {usrHvrCrdBtn.map((btn) => btn.foot.map((bt) => !bt.icon ? 
                            <Button onClick={() => alert(bt.name)} variant="ghost" className="text-xs bg-blue-100 text-blue-500">{bt.name}</Button> 
                            : 
                            <TooltipProvider>
                                <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={() => alert(bt.name)} variant="ghost" className="rounded-full size-12"><bt.icon /></Button>
                                </TooltipTrigger>
                                <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                    <p>{bt.name}</p>
                                </TooltipContent>
                                </Tooltip>
                            </TooltipProvider> 
                            ))}
                        </div> 

                        {/* <div className="flex flex-col justify-between space-x-1"> */}
                        
                        </HoverCardContent>
                    </HoverCard>                    

                    <HoverCard>
                        <HoverCardTrigger asChild>
                        <Avatar className="size-7 mr-1">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
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
                                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                Joined December 2021
                                </span>
                            </div>
                            </div>
                        </div>
                        </HoverCardContent>
                    </HoverCard>
                    
                    <Separator orientation="vertical" />

                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Avatar className="size-7 mr-1">
                            <AvatarFallback className="bg-green-200"><Globe size={18} /></AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent side='bottom' className='text-white text-xs h-8 bg-black border-none rounded-r-sm'>
                            <p>Anyone on the internet with the link can edit</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>  

                    <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Avatar className="size-7 mr-1">
                            <AvatarFallback className="text-xs">+15</AvatarFallback>
                            </Avatar>
                        </TooltipTrigger>
                        <TooltipContent side='bottom' className='text-white text-xs h-8 bg-black border-none rounded-r-sm'>
                            <p>15 others have access</p>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>                     
                </div>

                <p className="text-xs mt-2 mb-3 font-thin text-black">Private to you</p>  

                <Button type="button" className="rounded-full text-blue-600 text-xs border-gray-400 mb-5" variant="outline" onClick={() => alert('Manage access')}>Manage access</Button>

                <DropdownMenuSeparator></DropdownMenuSeparator>


                <p className="text-sm font-medium mt-5 mb-3">File details</p>   

                {fileDetails.map((file:any) => 
                (
                    <div className="flex-1 space-y-1 mb-4">
                    <p className="text-xs font-normal leading-none text-black">{file.title}</p>
                    { 
                        ( !file.control ? <p className="text-xs font-sans text-slate-600">{file.deatil}</p> 
                        : 
                        ( file.control === 'Button' ? 
                            <Button type="button" variant="outline" onClick={() => alert(file.deatil)} className="h-8 text-xs">
                                <file.icon size={14} className="mr-2" /> { file.deatil }
                            </Button> 
                        : 
                        <Input type="text" className="col-span-3" placeholder={file.deatil} /> ) 
                        )
                    }
                    </div>
                )
                )}

{/* <p className="text-sm font-medium mt-4 mb-13">File details</p>    */}
            
            </div>
        </ScrollArea>            
        </>
    )
}