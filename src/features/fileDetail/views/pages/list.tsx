"use client"

import ProfileHoverCard from "./profileHvrCrd"
import MoreActionsList from "./moreAction"

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip"
import { Button } from "@/components/ui/button"
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Folder } from "lucide-react"


export default function ListPage(
    {
        buckets,
        suggest,
        hiddens,
        layout,
        suggested,
        pressBucket,
        pointBucket,
        viewDetails,
        pointHidden,
        copyButton,
        copyContact,
        setPressBucket,
        setPointBucket,
        setPointHidden,
        setCopyButton,
        setCopyContact
    }:{
        buckets: any,
        suggest: any,
        hiddens: any,
        layout: String,
        suggested: String,
        pressBucket: any
        pointBucket: any,
        viewDetails: boolean,
        pointHidden: boolean,
        copyButton: boolean,
        copyContact: boolean,
        setPressBucket: (open: any) => void,
        setPointBucket: (open: any) => void,
        setPointHidden: (open: any) => void,
        setCopyButton: (open: boolean) => void,
        setCopyContact: (open: boolean) => void
    }
) {
    return(
    <>
    <div onClick={() => setPressBucket(null)} className={'flex flex-row mt-4 mb-1 w-auto mr-1 text-gray-700 font-semibold text-xs'+ (layout !== 'grid' ? '' : ' hidden')}>
        <div className={(viewDetails ? 'w-[323px]' : 'w-[260px]')}>Name</div>

        <div className={(viewDetails ? 'w-[294px]' : 'w-[265px]')}>Reason suggested</div>

        <div className={(viewDetails ? 'w-48' : 'w-40')}>Owner</div>

        <div>Location</div>                      
    </div>
    <DropdownMenuSeparator className={(layout !== 'grid' ? '' : ' hidden')} /> 

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
        
                <div className={'flex flex-row text-xs font-medium text-gray-700 mt-3 '+ (viewDetails ? 'w-[325px]' : 'w-[260px]')}>                                                
                    
                    { suggested === 'file' ? <bc.bucket.icon size={16} className={'ml-4 mr-4 '+ color} /> : 
                        <Folder size={19} className={'ml-4 mr-4 fill-gray-500 text-gray-500'} /> }    { name } { ckey + 1 } 
                </div>
        
                <div className={'flex flex-row text-xs mt-3 font-normal text-gray-500 '+ (viewDetails ? 'w-[285px]' : 'w-[260px]')}>                                                                          
                    { type && type === 'user' ? 'You' : actor.name } { bc.acted[0] } &bull; { bc.datetime }
                </div>
        
                <div className={'flex flex-row text-xs mt-2 '+ (viewDetails ? 'w-48' : 'w-40')}>                                                                            
                    <ProfileHoverCard info={ actor } size={"size-5 ml-2 mr-2"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> 
                    
                    <span className='mt-1 font-normal text-gray-600'> { type && type === 'user' ? 'me' : actor.name } </span>
                </div>
        
                <div className={'flex flex-row text-xs font-medium text-gray-500 mt-3 '+ (viewDetails ? 'w-[179px]' : 'w-[172px]')}> 
                    <loca.icon size={16} className='ml-2 mr-2 text-gray-600' /> { loca.name }
                </div>
        
                <div className={'text-right'+ (viewDetails ? ' w-[200px]' : '')}> 
                { hiddens.map((s:any, key:any) => 
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
                } )}
                </div>
        
            </div>             
            <DropdownMenuSeparator />
        </> 
      } 
    ) }
    </>
    )
}