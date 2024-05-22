"use client"

import React from 'react'

import { EllipsisVertical, FolderOpen, Info, Trash2 } from 'lucide-react';

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

import { Button } from "@/components/ui/button"
import { useAppDispatch } from '@/lib/store';
import { deleteBucket, infoThunk } from '../controller/bucket.controller';

import Swal from 'sweetalert2'
import SweetAlert2 from 'react-sweetalert2';
import { DeleteBucketModel } from '../models/create_bucket_model';


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

  return (<>
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

                                {/* <DropdownMenuItem onClick={()=>pointBucket(name)} className='text-xs'>{ sSub }</DropdownMenuItem> */}

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
            {/* { key < 3 ? <DropdownMenuSeparator /> : '' } */}
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


    <SweetAlert2 {...swalProps}
      // didOpen={() => {
      //   // run when swal is opened...
      // }}
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
              });

              // loadBucket()
              // toast.success("ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ITHQ File Store");
              //                 router.push("/admin/bucket")
            } else {
              // toast.error("ບໍ່ສາມາດເຂົ້າສູ່ລະບົບ: " + data.error);
            }
          })

        }

        // run when clieked in confirm and promise is resolved...
      }}
    // onError={error => {
    //   // run when promise rejected...
    // }}
    // onResolve={result => {
    //   // run when promise is resolved...
    // }}
    />
  </>
  )
}
