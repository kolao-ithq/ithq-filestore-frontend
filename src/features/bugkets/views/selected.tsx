import React from 'react'

import { X, EllipsisVertical, Download, Trash2, UserPlus, Link2, FolderInput } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import MoreActionsList from '@/features/fileDetail/views/pages/moreAction';
import { Button } from "@/components/ui/button"

const selects = [
    { icon: X, size: 18, tooltip: 'Clear Selection' },  //  setOpen: (open: boolean) => void
    { icon: UserPlus, size: 15, tooltip: 'Share' },
    { icon: Download, size: 15, tooltip: 'Download' },
    { icon: FolderInput, size: 15, tooltip: 'Move' },
    { icon: Trash2, size: 16, tooltip: 'Move to trash' },
    { icon: Link2, size: 16, tooltip: 'Copy link' },
    { icon: EllipsisVertical, size: 15, tooltip: 'More actions', more: true },
]


export default function SelectedTab({ pointBucket, pressBucket, pointSelect, setPointSelect, setPressBucket }:
    {
        pointBucket: any,
        pressBucket: any,
        pointSelect: any,
        setPointSelect: (open: any) => void,
        setPressBucket: (open: any) => void
    }) {
    return (
        <div className={'flex-row mt-1 ml-5 mb-2 w-auto bg-slate-100 rounded-l-full rounded-r-full mr-0' + (pressBucket !== null ? '' : ' hidden')}>
            {selects.map((s, key: any) => {
                if (s.more) { return <MoreActionsList id={pressBucket} pointBucket={pointBucket} pressBucket={pressBucket} /> }
                else {
                    return <>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button type="button" variant="outline" size="sm" className={'rounded-full bg-slate-100 border-' + (pointSelect === key ? 'orange-400' : 'none')}
                                        onMouseEnter={() => setPointSelect(key)}
                                        onMouseLeave={() => setPointSelect(null)}
                                        onClick={() => key > 0 ? alert(s.tooltip + ' ' + pressBucket) : setPressBucket(null)} >
                                        <s.icon size={s.size} className='text-gray-700' />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" className="text-white text-xs h-8 bg-black border-none rounded-r-sm">
                                    <p>{s.tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        {key === 0 ? <span className='text-xs mt-0 ml-1 text-gray-600 mr-3 font-medium'>1 selected</span> : ''}
                    </>
                }
            })}
        </div>
    )
} 