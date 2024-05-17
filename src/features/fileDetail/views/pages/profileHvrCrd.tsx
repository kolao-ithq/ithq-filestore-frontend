"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

import { UserRoundPlusIcon, CopyIcon, Mic, Pencil, MailIcon, MessageSquare, VideoIcon, CalendarCheck2, CircleUserRound } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"


const usrHvrCrdBtn = [
    {
        head: [
            { name: 'Add name pronunciation', icon: Mic, owner: true, color: 'text-orange-600' },
            { name: 'Edit your info', icon: Pencil, owner: true },
            { name: 'Add to contacts', icon: UserRoundPlusIcon },
        ],
        foot: [
            { name: 'Open detailed view' },
            { name: 'Send email', icon: MailIcon },
            { name: 'Send message', icon: MessageSquare, disable: true },
            { name: 'Send a video meeting invite', icon: VideoIcon, disable: true },
            { name: 'Schedule event', icon: CalendarCheck2 },
        ]
    }
]


export default function ProfileHoverCard(
    {
        info,
        size,
        copyButton,
        copyContact,
        setCopyButton,
        setCopyContact
    }: {
        info: any,
        size: any,
        copyButton: boolean,
        copyContact: boolean,
        setCopyButton: (open: boolean) => void,
        setCopyContact: (open: boolean) => void
    }) {

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Avatar className={size}>
                    {info.icon ? <CircleUserRound className="text-gray-400" /> :
                        <><AvatarImage src={'https://ithq.file.kokkoksole.com/buckets/LCC/' + info.image} alt={info.name} />
                            <AvatarFallback className={info.color}>{info.letter}</AvatarFallback></>}
                </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-80" align="start">
                <div className="flex justify-between">
                    <Avatar className="size-14 mt-2 ml-2">
                        <AvatarImage src={'https://ithq.file.kokkoksole.com/buckets/LCC/' + info.image} alt={info.name} />
                        <AvatarFallback className={info.color + ' text-3xl'}>{info.letter}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <div className="flex flex-col w-52">
                            <div className="flex justify-between">
                                <h1 className="font-semibold mt-3 ml-3 text-xl">{info.name}</h1>

                                {usrHvrCrdBtn.map((btn) => btn.head.map((bt) => {
                                    const button = <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button onClick={() => alert(bt.name)} variant="ghost" size="sm" className="rounded-full size-10"><bt.icon className={bt.color} /></Button>
                                            </TooltipTrigger>
                                            <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                                <p>{bt.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    if (info.type && bt.owner) { return button }
                                    if (!info.type && !bt.owner) { return button }
                                }
                                ))}
                            </div>

                            <div className="flex space-x-0" onMouseEnter={() => setCopyButton(true)} onMouseLeave={() => setCopyButton(false)}>
                                <Button variant="link" className="text-slate-600 text-xs">
                                    {info.email ? info.email : 'emailname@email.com'}

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button onClick={() => alert('Copy Email')} variant="ghost" size="sm" className={"rounded-full size-10" + (copyButton ? '' : ' hidden')}><CopyIcon size={12} /></Button>
                                            </TooltipTrigger>
                                            <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                                <p>Copy Email</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {(info.contact ?
                    <div className="flex flex-row text-xs text-slate-600" onMouseEnter={() => setCopyContact(true)} onMouseLeave={() => setCopyContact(false)}>

                        {info.contact.map((c: any) => <>
                            <span className="mt-3 mb-3 flex flex-row"><c.icon className="size-3 text-slate-600 mr-3" /> {c.detail} &bull; {c.other}</span>

                            {c.canCopy ?
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button onClick={() => alert('Copy Phone Number')} variant="ghost" size="sm" className={"rounded-full size-10" + (copyContact ? '' : ' hidden')}><CopyIcon className="text-orange-600" size={12} /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                            <p>Copy Phone Number</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                : ''}
                        </>)}

                    </div>
                    : '')}

                <DropdownMenuSeparator></DropdownMenuSeparator>

                <div className="flex h-7">
                    {usrHvrCrdBtn.map((btn) => btn.foot.map((bt) => !bt.icon ?
                        <Button onClick={() => alert(bt.name)} variant="ghost" className="text-xs bg-yellow-100 text-yellow-800 h-8 mt-1 bg">{bt.name}</Button>
                        :
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={() => alert(bt.name)} variant="ghost" disabled={info.type && bt.disable ? true : false} size="sm" className="rounded-full size-10"><bt.icon /></Button>
                                </TooltipTrigger>
                                <TooltipContent side='bottom' className='text-white text-xs h-8 bg-gray-400 rounded-none border-none'>
                                    <p>{bt.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>

            </HoverCardContent>
        </HoverCard>
    )
}