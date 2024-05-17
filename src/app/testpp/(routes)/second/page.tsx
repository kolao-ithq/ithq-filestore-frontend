"use client"

import React, { ButtonHTMLAttributes } from 'react'
// import IconBasePro

import DetailsPage from '@/features/fileDetail/views/pages/details';
import ActivityPage from '@/features/fileDetail/views/pages/activity';

import { 
  FileTextIcon,
  DotsVerticalIcon, StarIcon, Pencil1Icon, Share1Icon, DownloadIcon, 
  ArchiveIcon, PersonIcon, 
  AvatarIcon, CalendarIcon,
  CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon,
  EyeOpenIcon, TableIcon, PaperPlaneIcon,
  Link1Icon, Pencil2Icon, PlusIcon, CardStackPlusIcon, VercelLogoIcon,
  ReaderIcon, LightningBoltIcon, InfoCircledIcon, LockClosedIcon
} from "@radix-ui/react-icons"

// import test  from "@radix-ui/react-icons"

// import icons from "@radix-ui/react-icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Button, ButtonProps } from "@/components/ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]
 
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  // {
  //   invoice: "INV003",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$350.00",
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV004",
  //   paymentStatus: "Paid",
  //   totalAmount: "$450.00",
  //   paymentMethod: "Credit Card",
  // },
  // {
  //   invoice: "INV005",
  //   paymentStatus: "Paid",
  //   totalAmount: "$550.00",
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV006",
  //   paymentStatus: "Pending",
  //   totalAmount: "$200.00",
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV007",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$300.00",
  //   paymentMethod: "Credit Card",
  // },
]


const hidBtns = [
  { name: 'Share',          icon: Share1Icon },
  { name: 'Download',       icon: DownloadIcon },
  { name: 'Rename',         icon: Pencil1Icon },
  { name: 'Add to starred', icon: StarIcon }
]

const actions = [
  {
    group: [
      {
        name: 'Open with',
        sub: [
          { name: 'Preview',       icon: EyeOpenIcon }, 
          { name: 'Google Sheets', icon: TableIcon,      color: 'text-green-500' }, 
          { name: 'AppSheet',      icon: PaperPlaneIcon, color: 'text-blue-500' }
        ],
      },
    ]
  },
  {
    group: [
      { name: 'Download' },
      { name: 'Rename' },
      { name: 'Make a coppy' },
    ]
  },
  {
    group: [
      {
        name: 'Share',
        sub: [
          { name: 'Share',      icon: Share1Icon }, 
          { name: 'Coppy link', icon: Link1Icon }, 
          { name: 'Approvals',  icon: Pencil2Icon }
        ],
      },
      {
        name: 'Organize',
        sub: [
          { name: 'Move',             icon: CardStackPlusIcon, disabled: true }, 
          { name: 'Add shortcut',     icon: VercelLogoIcon }, 
          { name: 'Add to satrred',   icon: StarIcon },
          { name: 'Add to workspace', icon: PlusIcon,          sub: 'Create new workspace' }
        ],
      },
      {
        name: 'File information',
        sub: [
          { name: 'Details',            icon: InfoCircledIcon }, 
          { name: 'Activity',           icon: LightningBoltIcon }, 
          { name: 'Show file location', icon: ReaderIcon, disabled: true },
          { name: 'Lock',               icon: LockClosedIcon }
        ],
      },
      { name: 'Make available offline', disabled: true },
    ]
  },
  {
    group: [
      { name: 'Move to trash' },
      { name: 'Not a helpful suggestion' },
    ]
  },
]


// import { useMediaQuery } from "@/hooks/use-media-query"
import { useMediaQuery } from 'usehooks-ts'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Status = {
  value: string
  label: string
}
 
const statuses: Status[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
]


// import { ButtonHTMLAttributes } from 'react'

type ButtonList = {
  icon: object
  tooltip: string
}

const buttonList: ButtonList[] = [
  {
    icon: <Share1Icon />,
    tooltip: 'Share',
  },
  {
    icon: <DownloadIcon />,
    tooltip: 'Download',
  },
]


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const
 
type SheetSide = (typeof SHEET_SIDES)[number]


import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenuPortal, Separator } from '@radix-ui/react-dropdown-menu'
// import { Icon } from 'lucide-react'
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

// const [showButtons, setShowButtons] = React.useState(false)

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-sm text-muted-foreground">
                        {row.getValue("status")}         {/* \u{2022} 1 Family */}
                      </p> 
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className='text-white bg-black text-xs h-8'>
                      <p>{row.getValue("status")} User acted &bull; Date</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

      // <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    // cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,

    cell: ({ row }) => { return <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center space-x-2">
                      {/* <AvatarIcon className='h-5 w-5 text-gray-400'/> */}
                      <Avatar>
                        {/* <AvatarImage src="https://github.com/vercel.png" /> */}
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>                
                      <p className="text-sm text-muted-foreground">
                        {row.getValue("email")} 
                      </p>                
                    </div>
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
    },   
              
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
 
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      // <ReactNode></ReactNode> amount2 = row.getVisibleCells().values()
 
      // return <div className={`text-right font-medium ${showButtons ? "" : "hidden"}`}>{formatted}</div>]

      return <div className="text-right font-medium">{formatted} </div>
    },
    // enableHiding:false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


export default function page() {
  const [label, setLabel] = React.useState("feature")
  const [open, setOpen] = React.useState(false)  

  // const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  )

  // if (isDesktop) {
  //   return (
  //     <Popover open={open} onOpenChange={setOpen}>
  //       <PopoverTrigger asChild>
  //         <Button variant="outline" className="w-[150px] justify-start">
  //           {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
  //         </Button>
  //       </PopoverTrigger>
  //       <PopoverContent className="w-[200px] p-0" align="start">
  //         <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
  //       </PopoverContent>
  //     </Popover>
  //   )
  // }

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
 
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const [selectedHold, setSelectedHold] = React.useState(null);
  const handleCheckboxClickHold = (hold: any) => {
    setSelectedHold(hold === selectedHold ? null : hold);
};

  const [showButtons, setShowButtons] = React.useState(false)
  const [rowId, setRowId] = React.useState('')


  return (
    // <div className="flex items-center">
    //                   <FileTextIcon className="mr-3 h-4 w-4 text-orange-500"/>               
    //                   <p>hh</p>      
    //                   <PersonIcon className="ml-1 h-3 w-3"/>        
                       
    //                 </div>

<div className="grid w-full items-center gap-4">

<div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            {/* <SheetHeader>
              <SheetTitle className='flex flex-row'><FileTextIcon className='mt-1 mr-2 text-green-500 size-5'/>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader> */}
            <div className="grid gap-4 py-4">
              <Tabs defaultValue="details" className="w-[335px]">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="approvals">Approvals</TabsTrigger>
                </TabsList>
                <TabsContent value="details"><DetailsPage /></TabsContent>
                <TabsContent value="activity"><ActivityPage /></TabsContent>
                <TabsContent value="approvals">Change your password here Approvals.</TabsContent>
              </Tabs>
            </div>

            {/* <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      ))}
    </div>

  <div className="flex flex-col space-y-1.5">
    pp
    
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
        </PopoverContent>
      </Popover>

      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

  </div>
  <div className="">

      <Table>
      {/* <Table className='ml-2 mr-2'> */}
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className='text-left'>
          <TableRow>
            {/* <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead> */}
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Reason suggested</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead></TableHead>
            {/* <TableHead className="text-right">Location</TableHead> */}
            <TableHead className="w-[300px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}
              onMouseEnter={() => {
                setRowId(invoice.invoice)
                setShowButtons(true)
              }}
              onMouseLeave={(e: any) => {
                setRowId('')
                setShowButtons(false)
              }}
            >            
              <TableCell className="font-medium text-nowrap">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {/* <div className="flex items-center space-x-2"> */}
                      <div className="flex items-center">
                        <FileTextIcon className="mr-3 h-4 w-4 text-orange-500"/>               
                        <p>{invoice.invoice}</p>      
                        <PersonIcon className="ml-1 h-3 w-3"/>          
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className='text-white bg-black text-xs h-8'>
                      <p>Type : {invoice.invoice}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>

              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="text-sm text-muted-foreground">
                        {invoice.paymentStatus} User acted &bull; Date        {/* \u{2022} 1 Family */}
                      </p> 
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className='text-white bg-black text-xs h-8'>
                      <p>{invoice.paymentStatus} User acted &bull; Date</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>

              <TableCell>     
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="flex items-center space-x-2">
                      {/* <AvatarIcon className='h-5 w-5 text-gray-400'/> */}
                      <Avatar>
                        {/* <AvatarImage src="https://github.com/vercel.png" /> */}
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>                
                      <p className="text-sm text-muted-foreground">
                        {invoice.paymentMethod} 
                      </p>                
                    </div>
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
              </TableCell>
              
              <TableCell className="text-right">              
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ArchiveIcon className="mr-2 h-4 w-4" /> 
                        <p className="text-sm text-muted-foreground">
                          {invoice.totalAmount} Location
                        </p> 
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side='bottom' className='text-white bg-black text-xs h-8'>
                      <p>{invoice.totalAmount} Location</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              
              <TableCell className="text-right">    
                {hidBtns.map((btn) => (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className={`${rowId === invoice.invoice ? '' : 'hidden'}`}  
                        onClick={() => alert(btn.name +' '+ rowId.toString())}>   {/* showButtons &&  */}
                          <btn.icon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side='bottom' className='text-white bg-black text-xs h-8'>
                        <p>{btn.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}    

                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <DotsVerticalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[300px]">
                    {actions.map((action) => (
                      <DropdownMenuGroup>
                        {action.group.map((item:any) =>                          
                          {                            
                            if (!item.sub?.length) 
                            { 
                              return <DropdownMenuItem onClick={()=>alert(item.name +' '+ rowId.toString())} disabled={item.disabled}>{item.name}</DropdownMenuItem> 
                            } 
                            else 
                            { 
                              return <DropdownMenuSub>
                                <DropdownMenuSubTrigger>{item.name}</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent className="w-[300px]">
                                    {item.sub.map((cmd:any) => {
                                      if (!cmd.sub) 
                                      { 
                                        return <DropdownMenuItem onClick={()=>alert(cmd.name +' '+ rowId.toString())} disabled={cmd.disabled}>
                                                <cmd.icon className={cmd.color +' mr-3'}/> {cmd.name}
                                              </DropdownMenuItem>
                                      } 
                                      else 
                                      {
                                        return <DropdownMenuSub>
                                                <DropdownMenuSubTrigger><cmd.icon className={cmd.color +' mr-3'}/> {cmd.name}</DropdownMenuSubTrigger>
                                                <DropdownMenuPortal>
                                                  <DropdownMenuSubContent>
                                                    <DropdownMenuItem onClick={()=>alert(cmd.sub +' '+ rowId.toString())}>{cmd.sub}</DropdownMenuItem>
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
                        <DropdownMenuSeparator />
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
                
                {/* <DropdownMenu open={open} onOpenChange={setOpen}> */}
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <DotsVerticalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Assign to...</DropdownMenuItem>
                      <DropdownMenuItem>Set due date...</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="p-0">
                          <Command>
                            <CommandInput
                              placeholder="Filter label..."
                              autoFocus={true}
                              className="h-9"
                            />
                            <CommandList>
                              <CommandEmpty>No label found.</CommandEmpty>
                              <CommandGroup>
                                {labels.map((label) => (
                                  <CommandItem
                                    key={label}
                                    value={label}
                                    onSelect={(value) => {
                                      setLabel(value)
                                      setOpen(false)
                                    }}
                                  >
                                    {label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        Delete
                        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    
  </div>
  <div className="flex flex-col space-y-1.5">
    
  </div>
  <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              // .filter((column) => column.getIsVisible())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                    // checked={column.getCanHide()}
                    // onCheckedChange={(value) =>
                    //   column.toggleVisibility(!!value)
                    // }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow 
                  // onMouseEnter={() => setShowButtons(0)}
                  // onMouseLeave={(e: any) => setShowButtons(1)}
                  onMouseEnter={row.getVisibleCells}
                  key={row.id}
                  data-state={row.getIsSelected() && "selected" || showButtons}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>

      {/* id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com", */}

      {/* {getHold?.data?.data?.map((val, key) => ( */}
        {data?.map((val, key) => (
          <div key={key} className="flex items-center gap-3 mt-4">
          <input
              // value={val?.hole_name}
              checked={val === selectedHold}
              onChange={() => handleCheckboxClickHold(val)}
              value={val?.email}
              type="checkbox"
              className="checkbox"
          />
          <label>{val?.status} {key} </label>
          {/* <label>{val?.hole_name}</label> */}
      </div>

  ))}                                    

    </div>
</div>
                    
    
  )
}


function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void
  setSelectedStatus: (status: Status | null) => void
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                )
                setOpen(false)
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}