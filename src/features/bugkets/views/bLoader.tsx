"use client"

import React from "react"

import { Skeleton } from "@/components/ui/skeleton"

const tags = Array.from({ length: 12 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)


export default function BucketLoader() {

    const column = 4

    return (
        <div className={'flex flex-col mr-2 mt-10'}>
            {tags.map((br, rkey: number) => rkey % column === 0 ?
                <>
                    {(rkey > 0 ? '' : <div className='h-3'></div>)}

                    <div className='flex flex-row'>

                        {tags.map((bc: any, ckey: number) => {

                            return (ckey >= rkey && ckey < rkey + column ?
                                <>
                                    {(ckey > rkey ? '' : <div className='w-5'></div>)}

                                    <Skeleton className="h-[41px] w-[287px] rounded-xl flex flex-row" >
                                        <Skeleton className="h-4 w-[15px] bg-slate-200 mt-3 ml-3 mr-3" />
                                        <Skeleton className="h-4 w-[230px] bg-slate-200 mt-3" />
                                    </Skeleton>

                                    <div className='w-4'></div>
                                </> : '')
                        }
                        )}

                    </div >
                    <div className='h-4'></div>

                </> : '')}
        </div >
    )
}