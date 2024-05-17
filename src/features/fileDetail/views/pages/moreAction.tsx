import React from 'react'

import {
  EllipsisVertical, Move, Download, PencilLine, Files, FolderOpen, Info, CircleCheckBig, Trash2, ThumbsDown,
  Eye, Table2, Navigation, UserPlus, Stamp, Link2, FolderInput, BadgePlus, Star, Plus, Activity, Folder, LockKeyhole
} from 'lucide-react';

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
  DropdownMenuTrigger, DropdownMenuPortal,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"


const actions = [
  {
    group: [
      {
        name: 'Open with',
        icon: Move,
        sub: [
          { name: 'Preview', icon: Eye, color: 'text-gray-900' },
          { name: 'Google Sheets', icon: Table2, color: 'text-green-600' },
          { name: 'AppSheet', icon: Navigation, color: 'fill-cyan-600 text-cyan-600' }
        ],
      },
    ]
  },
  {
    group: [
      { name: 'Download', icon: Download },
      { name: 'Rename', icon: PencilLine },
      { name: 'Make a coppy', icon: Files },
    ]
  },
  {
    group: [
      {
        name: 'Share',
        icon: UserPlus,
        sub: [
          { name: 'Share', icon: UserPlus },
          { name: 'Coppy link', icon: Link2 },
          { name: 'Approvals', icon: Stamp }
        ],
      },
      {
        name: 'Organize',
        icon: FolderOpen,
        sub: [
          { name: 'Move', icon: FolderInput, disabled: true },
          { name: 'Add shortcut', icon: BadgePlus },
          { name: 'Add to satrred', icon: Star },
          { name: 'Add to workspace', icon: Plus, sub: 'Create new workspace' }
        ],
      },
      {
        name: 'File information',
        icon: Info,
        sub: [
          { name: 'Details', icon: Info },
          { name: 'Activity', icon: Activity },
          { name: 'Show file location', icon: Folder, disabled: true },
          { name: 'Lock', icon: LockKeyhole }
        ],
      },
      { name: 'Make available offline', icon: CircleCheckBig, disabled: true },
    ]
  },
  {
    group: [
      { name: 'Move to trash', icon: Trash2 },
      { name: 'Not a helpful suggestion', icon: ThumbsDown },
    ]
  },
]


export default function MoreActionsList({
  id, pointBucket, pressBucket
}: {
  id: any,
  pointBucket: any,
  pressBucket: any
}
) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="ghost" size="sm" className={'rounded-full '+ (id === pressBucket ? 'bg-sky-200' : (id === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} > */}

        <Button variant="ghost" size="sm" className={'rounded-full ' + (id === pressBucket ? '' : (id === pointBucket ? 'bg-gray-200' : 'bg-slate-100'))} >
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
                return <DropdownMenuItem className='text-xs' onClick={() => alert(name + ' ' + id)} disabled={item.disabled} >
                  {icon} {name}</DropdownMenuItem>
              } else {
                return <DropdownMenuSub>
                  <DropdownMenuSubTrigger className='text-xs'>{icon} {name}</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-[300px] text-gray-700">
                      {subTtem.map((cmd: any) => {

                        const sIcon = <cmd.icon size={14} className={(cmd.color ? cmd.color : 'text-gray-800') + ' mr-4'} />
                        const sName = cmd.name
                        const sSub = cmd.sub

                        if (!sSub) {
                          return <DropdownMenuItem className='text-xs' onClick={() => alert(sName + ' ' + id)} disabled={cmd.disabled}>
                            {sIcon} {sName}</DropdownMenuItem>
                        } else {
                          return <DropdownMenuSub>
                            <DropdownMenuSubTrigger className='text-xs'>{sIcon} {sName}</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent className="text-gray-700">

                                <DropdownMenuItem onClick={() => alert(sSub + ' ' + id)} className='text-xs'>{sSub}</DropdownMenuItem>

                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        }
                      }
                      )}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              }
            }
            )}
            {key < 3 ? <DropdownMenuSeparator /> : ''}
          </DropdownMenuGroup>
        ))}
        {/* <DropdownMenuGroup>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
