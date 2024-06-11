
"use client"

import * as React from "react"

import ProfileHoverCard from "./profileHvrCrd"


import TreeView, { flattenTree } from "react-accessible-treeview";


import { ScrollArea } from "@/components/ui/scroll-area"

// import React from 'react'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"

import {
    Play, Users2, Building2, CornerDownRight, Table2, PanelRightClose, ReceiptText, Folder, Globe, Phone, MapPin
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

const tree = [
    {
        "views": 537994,
        "id": 1,
        "name": "Workspaces",
        "children": [
            {
                "views": 537994,
                "id": 9999,
                "name": "Global workspaces",
                "children": [
                    {
                        "views": 347107,
                        "id": 6853,
                        "name": "Portal",
                        "children": [
                            {
                                "views": 347107,
                                "id": 6851,
                                "name": "Webportal",
                                "children": [
                                    {
                                        "views": 4005,
                                        "id": 6852,
                                        "name": "Department News",
                                        "children": [
                                            {
                                                "views": 1,
                                                "id": 12405,
                                                "name": "Are You All In"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 98,
                                        "id": 6858,
                                        "name": "Security Awareness"
                                    },
                                    {
                                        "views": 12,
                                        "id": 6859,
                                        "name": "Department Links",
                                        "children": [
                                            {
                                                "views": 1,
                                                "id": 6860,
                                                "name": "Department Resource"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 1600,
                                        "id": 6861,
                                        "name": "Resource Links"
                                    },
                                    {
                                        "views": 3263,
                                        "id": 6862,
                                        "name": "Forms & Policies",
                                        "children": [
                                            {
                                                "views": 1223,
                                                "id": 6863,
                                                "name": "Department Policy"
                                            },
                                            {
                                                "views": 1523,
                                                "id": 6864,
                                                "name": "Department Forms"
                                            },
                                            {
                                                "views": 517,
                                                "id": 11101,
                                                "name": "Travel"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 41,
                                        "id": 6867,
                                        "name": "Notices"
                                    },
                                    {
                                        "views": 38,
                                        "id": 6873,
                                        "name": "Phone Information (VOIP)",
                                        "children": [
                                            {
                                                "views": 19,
                                                "id": 6874,
                                                "name": "Phone Info. VOIP Resource"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 37347,
                                        "id": 6875,
                                        "name": "Important Links"
                                    },
                                    {
                                        "views": 303,
                                        "id": 10648,
                                        "name": "Department Pictures",
                                        "children": [
                                            {
                                                "views": 21,
                                                "id": 10649,
                                                "name": "Christmas Party 2012"
                                            },
                                            {
                                                "views": 268,
                                                "id": 11909,
                                                "name": "Christmas Party 2013"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 203,
                                        "id": 11256,
                                        "name": "Scheduled Maintenance"
                                    },
                                    {
                                        "views": 218,
                                        "id": 12322,
                                        "name": "2014 - 2019 Strategic Plan"
                                    },
                                    {
                                        "views": 35960,
                                        "id": 12611,
                                        "name": "E-News Updates",
                                        "children": [
                                            {
                                                "views": 2551,
                                                "id": 12641,
                                                "name": "E-News Documents"
                                            },
                                            {
                                                "views": 5381,
                                                "id": 12963,
                                                "name": "Photo Album",
                                                "children": [
                                                    {
                                                        "views": 158,
                                                        "id": 12964,
                                                        "name": "2015 Department Gathering"
                                                    },
                                                    {
                                                        "views": 5204,
                                                        "id": 13676,
                                                        "name": "State Employees Recognition Week - 2016"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "views": 1258,
                                        "id": 12856,
                                        "name": "Department Strategic Vision",
                                        "children": [
                                            {
                                                "views": 531,
                                                "id": 12857,
                                                "name": "Files"
                                            },
                                            {
                                                "views": 127,
                                                "id": 12906,
                                                "name": "Manager's Corner",
                                                "children": [
                                                    {
                                                        "views": 28,
                                                        "id": 12907,
                                                        "name": "Blog"
                                                    },
                                                    {
                                                        "views": 14,
                                                        "id": 12909,
                                                        "name": "Files"
                                                    },
                                                    {
                                                        "views": 1,
                                                        "id": 12910,
                                                        "name": "Wiki"
                                                    }
                                                ]
                                            },
                                            {
                                                "views": 47,
                                                "id": 12914,
                                                "name": "Manager's Links"
                                            },
                                            {
                                                "views": 39,
                                                "id": 12967,
                                                "name": "Wiki"
                                            },
                                            {
                                                "views": 31,
                                                "id": 13366,
                                                "name": "Manager's Corner Updated",
                                                "children": [
                                                    {
                                                        "views": 5,
                                                        "id": 13370,
                                                        "name": "Files"
                                                    },
                                                    {
                                                        "views": 2,
                                                        "id": 13371,
                                                        "name": "Wiki"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "views": 3652,
                                        "id": 12882,
                                        "name": "The Knowledge Vault",
                                        "children": [
                                            {
                                                "views": 19,
                                                "id": 12885,
                                                "name": "Files"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 2493,
                                        "id": 12886,
                                        "name": "Microsoft Resources ",
                                        "children": [
                                            {
                                                "views": 61,
                                                "id": 12904,
                                                "name": "Resource Topics",
                                                "children": [
                                                    {
                                                        "views": 15,
                                                        "id": 12912,
                                                        "name": "FAQ Links"
                                                    },
                                                    {
                                                        "views": 22,
                                                        "id": 12913,
                                                        "name": "Q & A Links"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "views": 19,
                                        "id": 12915,
                                        "name": "What\u2019s Happening in DOAA",
                                        "children": [
                                            {
                                                "views": 3,
                                                "id": 12919,
                                                "name": "Files"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 388,
                                        "id": 12935,
                                        "name": "EPMS Project Groups"
                                    },
                                    {
                                        "views": 17,
                                        "id": 12954,
                                        "name": "Professional Training Program",
                                        "children": [
                                            {
                                                "views": 3,
                                                "id": 12957,
                                                "name": "PTP Meeting and Presentation Notes"
                                            },
                                            {
                                                "views": 14,
                                                "id": 12958,
                                                "name": "PTP Other Files"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 18,
                                        "id": 13605,
                                        "name": "Electronic Forms"
                                    },
                                    {
                                        "views": 1516,
                                        "id": 13760,
                                        "name": "Go Figure",
                                        "children": [
                                            {
                                                "views": 165,
                                                "id": 13762,
                                                "name": "Strategic Vision"
                                            },
                                            {
                                                "views": 452,
                                                "id": 13763,
                                                "name": "The Knowledge Vault"
                                            },
                                            {
                                                "views": 119,
                                                "id": 13764,
                                                "name": "Defending State Auditor"
                                            },
                                            {
                                                "views": 780,
                                                "id": 13765,
                                                "name": "Related Articles"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 1,
                                        "id": 13761,
                                        "name": "Go Figure Intro"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "views": 190887,
                "id": 29,
                "name": "Division workspaces",
                "children": [
                    {
                        "views": 30266,
                        "id": 6865,
                        "name": "Admin",
                        "children": [
                            {
                                "views": 2568,
                                "id": 6869,
                                "name": "Admin Description"
                            },
                            {
                                "views": 35,
                                "id": 394,
                                "name": "Admin Photo Album",
                                "children": [
                                    {
                                        "views": 3,
                                        "id": 11747,
                                        "name": "Excellence in HR"
                                    },
                                    {
                                        "views": 9,
                                        "id": 11746,
                                        "name": "Kaiser Permanente Walk 2013"
                                    }
                                ]
                            },
                            {
                                "views": 2,
                                "id": 384,
                                "name": "Admin Workspace",
                                "children": [
                                    {
                                        "views": 2,
                                        "id": 385,
                                        "name": "Wiki"
                                    }
                                ]
                            },
                            {
                                "views": 1916,
                                "id": 6866,
                                "name": "Benefits Information",
                                "children": [
                                    {
                                        "views": 3,
                                        "id": 13346,
                                        "name": "Benefits 2015"
                                    },
                                    {
                                        "views": 19,
                                        "id": 13873,
                                        "name": "Open Enrollment presentation October 2016"
                                    }
                                ]
                            },
                            {
                                "views": 101,
                                "id": 11428,
                                "name": "Congratulations!"
                            },
                            {
                                "views": 23162,
                                "id": 11585,
                                "name": "CREW Team Workspace",
                                "children": [
                                    {
                                        "views": 6494,
                                        "id": 11586,
                                        "name": "Care Team Surveys"
                                    },
                                    {
                                        "views": 63,
                                        "id": 11211,
                                        "name": "CREW Team Calendar"
                                    },
                                    {
                                        "views": 16605,
                                        "id": 11644,
                                        "name": "CREW Team Photos",
                                        "children": [
                                            {
                                                "views": 2467,
                                                "id": 13373,
                                                "name": "2015 BooBerry Breakfast"
                                            },
                                            {
                                                "views": 2361,
                                                "id": 13876,
                                                "name": "2016 BooBerry Breakfast"
                                            },
                                            {
                                                "views": 330,
                                                "id": 11864,
                                                "name": "BooBerry Breakfast 2013"
                                            },
                                            {
                                                "views": 906,
                                                "id": 12562,
                                                "name": "BooBerry Breakfast 2014"
                                            },
                                            {
                                                "views": 7568,
                                                "id": 13916,
                                                "name": "Chicken Biscuit Holiday Party 2016"
                                            },
                                            {
                                                "views": 775,
                                                "id": 12755,
                                                "name": "Chicken Biscuit Party 2014"
                                            },
                                            {
                                                "views": 1948,
                                                "id": 13512,
                                                "name": "Chicken Biscuit Party 2015"
                                            },
                                            {
                                                "views": 198,
                                                "id": 11865,
                                                "name": "Fall Sports Spectacular 2013"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "views": 1865,
                                "id": 6868,
                                "name": "Information Links"
                            },
                            {
                                "views": 388,
                                "id": 7894,
                                "name": "Job SPEC Files"
                            },
                            {
                                "views": 121,
                                "id": 6870,
                                "name": "News & Announcements"
                            }
                        ]
                    },
                    {
                        "views": 143037,
                        "id": 6871,
                        "name": "EAD",
                        "children": [
                            {
                                "views": 1591,
                                "id": 6872,
                                "name": "EAD Description"
                            },
                            {
                                "views": 138299,
                                "id": 340,
                                "name": "EAD Workspace",
                                "children": [
                                    {
                                        "views": 1,
                                        "id": 3370,
                                        "name": "Augusta",
                                        "children": [
                                            {
                                                "views": 1,
                                                "id": 3380,
                                                "name": "Photo album"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 268,
                                        "id": 5678,
                                        "name": "Blog"
                                    },
                                    {
                                        "views": 15,
                                        "id": 345,
                                        "name": "Calendar"
                                    },
                                    {
                                        "views": 4,
                                        "id": 3381,
                                        "name": "Calhoun",
                                        "children": [
                                            {
                                                "views": 3,
                                                "id": 3391,
                                                "name": "Photo album"
                                            },
                                            {
                                                "views": 1,
                                                "id": 3382,
                                                "name": "Wiki"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 7,
                                        "id": 12222,
                                        "name": "EAD Discussions",
                                        "children": [
                                            {
                                                "views": 7,
                                                "id": 12223,
                                                "name": "Audit Program Discussion"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 131209,
                                        "id": 7323,
                                        "name": "EAD Home",
                                        "children": [
                                            {
                                                "views": 84,
                                                "id": 11405,
                                                "name": "COAMs"
                                            },
                                            {
                                                "views": 18895,
                                                "id": 7311,
                                                "name": "Colleges & Universities"
                                            },
                                            {
                                                "views": 1140,
                                                "id": 7335,
                                                "name": "Employee Resources"
                                            },
                                            {
                                                "views": 81,
                                                "id": 11364,
                                                "name": "Latest News"
                                            },
                                            {
                                                "views": 114,
                                                "id": 11404,
                                                "name": "Regional Educational Service Agency (RESA)"
                                            },
                                            {
                                                "views": 61356,
                                                "id": 7333,
                                                "name": "School Districts (LEA)"
                                            },
                                            {
                                                "views": 1043,
                                                "id": 7312,
                                                "name": "Technical Colleges"
                                            },
                                            {
                                                "views": 18730,
                                                "id": 7334,
                                                "name": "Templates & IT Resources",
                                                "children": [
                                                    {
                                                        "views": 6,
                                                        "id": 8240,
                                                        "name": "Updated Template Work Papers"
                                                    }
                                                ]
                                            },
                                            {
                                                "views": 2032,
                                                "id": 7336,
                                                "name": "Training & Other Resources",
                                                "children": [
                                                    {
                                                        "views": 4,
                                                        "id": 11884,
                                                        "name": "FY2013 November LEA Training Discussion"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "views": 40,
                                        "id": 2930,
                                        "name": "EATL Workspace",
                                        "children": [
                                            {
                                                "views": 36,
                                                "id": 2936,
                                                "name": "Discussion"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 26,
                                        "id": 2684,
                                        "name": "IT (Kristina, James)",
                                        "children": [
                                            {
                                                "views": 15,
                                                "id": 453,
                                                "name": "Risk Based Template"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 1,
                                        "id": 10595,
                                        "name": "Saved School District Trackers"
                                    },
                                    {
                                        "views": 23,
                                        "id": 2688,
                                        "name": "Template and IT Resources",
                                        "children": [
                                            {
                                                "views": 1,
                                                "id": 6406,
                                                "name": "2010 LEA Season Caseware Template",
                                                "children": [
                                                    {
                                                        "views": 1,
                                                        "id": 6407,
                                                        "name": "File Folder"
                                                    }
                                                ]
                                            },
                                            {
                                                "views": 3,
                                                "id": 5886,
                                                "name": "College Season 2010",
                                                "children": [
                                                    {
                                                        "views": 3,
                                                        "id": 5887,
                                                        "name": "File Folder"
                                                    }
                                                ]
                                            },
                                            {
                                                "views": 2,
                                                "id": 3017,
                                                "name": "EAD Audit Toolkit (ACL)"
                                            },
                                            {
                                                "views": 14,
                                                "id": 2689,
                                                "name": "IT Group Wiki"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 5,
                                        "id": 2908,
                                        "name": "WATL Workspace",
                                        "children": [
                                            {
                                                "views": 4,
                                                "id": 5060,
                                                "name": "WATL Tasks",
                                                "children": [
                                                    {
                                                        "views": 4,
                                                        "id": 5062,
                                                        "name": "Show All WATL Tasks",
                                                        "children": [
                                                            {
                                                                "views": 5,
                                                                "id": 50621,
                                                                "name": "Show All WATL Tasks 5"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "views": 6,
                                "id": 6893,
                                "name": "News & Announcements"
                            },
                            {
                                "views": 163,
                                "id": 6894,
                                "name": "Regional Office Numbers"
                            },
                            {
                                "views": 940,
                                "id": 6895,
                                "name": "Resource Links"
                            }
                        ]
                    },
                    {
                        "views": 2831,
                        "id": 6921,
                        "name": "PAD",
                        "children": [
                            {
                                "views": 19,
                                "id": 6923,
                                "name": "Information Links"
                            },
                            {
                                "views": 9,
                                "id": 8333,
                                "name": "News from PAD"
                            },
                            {
                                "views": 2683,
                                "id": 55,
                                "name": "PAD Workspace Home",
                                "children": [
                                    {
                                        "views": 11,
                                        "id": 7337,
                                        "name": "Announcements"
                                    },
                                    {
                                        "views": 1,
                                        "id": 13877,
                                        "name": "JoAnn's Test PM workspace",
                                        "children": [
                                            {
                                                "views": 1,
                                                "id": 13878,
                                                "name": "Milestones"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 2262,
                                        "id": 7194,
                                        "name": "Resources",
                                        "children": [
                                            {
                                                "views": 2262,
                                                "id": 7314,
                                                "name": "PAD Resources"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 376,
                                        "id": 7195,
                                        "name": "Training",
                                        "children": [
                                            {
                                                "views": 376,
                                                "id": 7493,
                                                "name": "Training Resources"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "views": 76,
                                "id": 6922,
                                "name": "PAO Description"
                            },
                            {
                                "views": 10,
                                "id": 6924,
                                "name": "Resource Links"
                            }
                        ]
                    },
                    {
                        "views": 7076,
                        "id": 12829,
                        "name": "PSPD",
                        "children": [
                            {
                                "views": 57,
                                "id": 12851,
                                "name": "Information Links"
                            },
                            {
                                "views": 20,
                                "id": 12850,
                                "name": "PSPD Description"
                            },
                            {
                                "views": 1039,
                                "id": 12840,
                                "name": "PSPD Workspace",
                                "children": [
                                    {
                                        "views": 1019,
                                        "id": 12844,
                                        "name": "Files"
                                    },
                                    {
                                        "views": 11,
                                        "id": 12846,
                                        "name": "Photo Album"
                                    },
                                    {
                                        "views": 1,
                                        "id": 12848,
                                        "name": "Tasks"
                                    },
                                    {
                                        "views": 6,
                                        "id": 12847,
                                        "name": "Wiki"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "views": 2455,
                        "id": 6926,
                        "name": "SGD",
                        "children": [
                            {
                                "views": 730,
                                "id": 6929,
                                "name": "Information Links"
                            },
                            {
                                "views": 404,
                                "id": 6930,
                                "name": "Reference Materials"
                            },
                            {
                                "views": 447,
                                "id": 329,
                                "name": "SGD Workspace",
                                "children": [
                                    {
                                        "views": 53,
                                        "id": 473,
                                        "name": "Frequently Asked Questions",
                                        "children": [
                                            {
                                                "views": 4,
                                                "id": 829,
                                                "name": "CaseWare FAQ"
                                            },
                                            {
                                                "views": 10,
                                                "id": 833,
                                                "name": "Checksheet and EE FAQ"
                                            },
                                            {
                                                "views": 6,
                                                "id": 832,
                                                "name": "Federal Compliance FAQ"
                                            },
                                            {
                                                "views": 17,
                                                "id": 1972,
                                                "name": "General Auditing FAQ",
                                                "children": [
                                                    {
                                                        "views": 7,
                                                        "id": 12345,
                                                        "name": "identify instances of noncompliance with other laws"
                                                    }
                                                ]
                                            },
                                            {
                                                "views": 14,
                                                "id": 831,
                                                "name": "Other Software FAQ"
                                            }
                                        ]
                                    },
                                    {
                                        "views": 1,
                                        "id": 11244,
                                        "name": "IT Users "
                                    },
                                    {
                                        "views": 381,
                                        "id": 7754,
                                        "name": "SGD Files",
                                        "children": [
                                            {
                                                "views": 18,
                                                "id": 7698,
                                                "name": "Audit Documentation and Related"
                                            },
                                            {
                                                "views": 71,
                                                "id": 4201,
                                                "name": "Audit Training "
                                            },
                                            {
                                                "views": 7,
                                                "id": 7696,
                                                "name": "Federal Compliance and Related"
                                            },
                                            {
                                                "views": 20,
                                                "id": 7697,
                                                "name": "Findings Management and Related "
                                            },
                                            {
                                                "views": 68,
                                                "id": 7695,
                                                "name": "SGD Informational "
                                            },
                                            {
                                                "views": 196,
                                                "id": 7674,
                                                "name": "Software Training"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "views": 510,
                                "id": 6927,
                                "name": "State Government Division"
                            }
                        ]
                    },
                    {
                        "views": 147,
                        "id": 6931,
                        "name": "SRD",
                        "children": [
                            {
                                "views": 36,
                                "id": 6933,
                                "name": "Information Links"
                            },
                            {
                                "views": 1,
                                "id": 6934,
                                "name": "News & Announcements"
                            },
                            {
                                "views": 42,
                                "id": 6935,
                                "name": "Resource Links"
                            },
                            {
                                "views": 43,
                                "id": 6932,
                                "name": "SRD Description"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]


export default function TreeViewT() {

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


    const folder = {
        name: "",
        id: "treeview",
        children: [
            {
                id: "fruits",
                name: "Fruits",
                children: [
                    { name: "Avocados", id: "avocados" },
                    {
                        name: "Bananas", id: "bananas",
                        children: [
                            {
                                name: "Berries1", id: "berries1",
                                children: [
                                    {
                                        name: "Berries2", id: "berries2",
                                        children: [
                                            {
                                                name: "Berries3", id: "berries3",
                                                children: [
                                                    {
                                                        name: "Berries4", id: "berries4",
                                                        children: [
                                                            {
                                                                name: "Berries5", id: "berries5",
                                                                children: [
                                                                    {
                                                                        name: "Berries6", id: "berries6",
                                                                        children: [
                                                                            {
                                                                                name: "Berries7", id: "berries7",
                                                                                children: [
                                                                                    { name: "Berries8", id: "berries8" },
                                                                                    { name: "Oranges8", id: "oranges8" },
                                                                                ]
                                                                            },
                                                                            { name: "Oranges7", id: "oranges7" },
                                                                        ]
                                                                    },
                                                                    { name: "Oranges6", id: "oranges6" },
                                                                ]
                                                            },
                                                            { name: "Oranges5", id: "oranges5" },
                                                        ]
                                                    },
                                                    { name: "Oranges4", id: "oranges4" },
                                                ]
                                            },
                                            { name: "Oranges3", id: "oranges3" },
                                        ]
                                    },
                                    { name: "Oranges2", id: "oranges2" },
                                ]
                            },
                            { name: "Oranges1", id: "oranges1" },
                        ]
                    },
                    { name: "Berries", id: "berries" },
                    { name: "Oranges", id: "oranges" },
                    { name: "Pears", id: "pears" },
                ],
            },
            {
                id: "drinks",
                name: "Drinks",
                children: [
                    { name: "Apple Juice", id: "appleJuice" },
                    { name: "Chocolate", id: "chocolate" },
                    { name: "Coffee", id: "coffee" },
                    {
                        id: "tea",
                        name: "Tea",
                        children: [
                            { name: "Black Tea", id: "blackTea" },
                            { name: "Green Tea", id: "greenTea" },
                            { name: "Red Tea", id: "redTea" },
                            { name: "Matcha", id: "matcha" },
                        ],
                    },
                ],
            },
            {
                id: "vegetables",
                name: "Vegetables",
                children: [
                    { name: "Beets", id: "beets" },
                    { name: "Carrots", id: "carrots" },
                    { name: "Celery", id: "celery" },
                    { name: "Lettuce", id: "lettuce" },
                    { name: "Onions", id: "onions" },
                ],
            },
        ],
    };

    const data = flattenTree(folder);


    return (
        <>
            <ScrollArea className="w-full h-screen">
                <div className="pr-4 pb-8">


                    <TreeView
                        data={data}
                        aria-label="Controlled expanded node tree"
                        defaultExpandedIds={["fruits"]}
                        // focusedId={focusId}
                        defaultDisabledIds={["bananas"]}
                        nodeRenderer={({
                            element,
                            isBranch,
                            isExpanded,
                            isDisabled,
                            getNodeProps,
                            level,
                            handleExpand,
                        }) => {
                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                    style={{
                                        marginLeft: 40 * (level - 1),
                                        opacity: isDisabled ? 0.5 : 1,
                                    }}
                                >
                                    {/* {isBranch && <ArrowIcon isOpen={isExpanded} />} */}
                                    <span className="name">
                                        {element.name} [{element.id}]
                                    </span>
                                </div>
                            );
                        }}
                    />



                    {/* {tree.map((val, key) => val.name + ' ' + val.children.length)} */}

                    {tree.map((val, key) => <div className="ml-5">

                        <div className={'text-sm font-medium flex flex-row mb-8 mt-' + (key === 0 ? 3 : 8)}>
                            <Play /> {val.name}</div>

                        {val.children.map((val, key) => <div className="ml-5">
                            <p className={'text-sm font-medium mb-8 mt-' + (key === 0 ? 3 : 8)}>{val.name}</p>

                            {val.children.map((val, key) => <div className="ml-5">
                                <p className={'text-sm font-medium mb-8 mt-' + (key === 0 ? 3 : 8)}>{val.name}</p>

                                {val.children && val.children.map((val, key) => <div className="ml-5">
                                    <p className={'text-sm font-medium mb-8 mt-' + (key === 0 ? 3 : 8)}>{val.name}</p>

                                    {val.children && val.children.map((val, key) => <div className="ml-5">
                                        <p className={'text-sm font-medium mb-8 mt-' + (key === 0 ? 3 : 8)}>{val.name}</p>

                                        {val.children && val.children.map((val, key) => <div className="ml-5">
                                            <p className={'text-sm font-medium mb-8 mt-' + (key === 0 ? 3 : 8)}>{val.name}</p>

                                            {val.children && val.children.map((val, key) => <div className="ml-5">
                                                <p className={'text-sm font-medium mb-8 mt-' + (key === 0 ? 3 : 8)}>{val.name}</p>
                                            </div>)}
                                        </div>)}
                                    </div>)}
                                </div>)}
                            </div>)}
                        </div>)}
                    </div>)}


                    {activities.map((act, dkey) =>
                        <>
                            <p className={'text-sm font-medium mb-8 mt-' + (dkey === 0 ? 3 : 8)}>{act.duration}</p>

                            {act.acting.map((ac: any, akey) => {
                                const sharedTo = ac.sharedTo
                                const folder = ac.folder
                                const acting_id = ac.acting_id
                                const showAllBtn = selectedActing[acting_id]?.some((selectedItem) => selectedItem === acting_id)

                                // return <><div className={'flex justify-between space-x-4 mb-' + (sharedTo?.length > 3 ? 0 : 10)} key={akey}>

                                //     <ProfileHoverCard info={ac.owner} size={"size-9"} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} />

                                //     <div className="space-y-1 w-64">

                                //         <h4 className="text-xs font-normal leading-none text-black">
                                //             {ac.actor[0]}
                                //             {ac.actor.length > 1 ? ' and ' : ''}
                                //             {ac.actor.length > 2 ? (ac.actor.length - 1) + ' others' : ac.actor[1]}
                                //             {ac.acted.map((a: any, k: number) => ' ' + a +
                                //                 (k === ac.acted.length - 1 ? (ac.acted.includes('made a coppy of') ? '' : ' an item') :
                                //                     (k === ac.acted.length - 2 ? ' and' : ', '))
                                //             )}
                                //         </h4>
                                //         <p className="text-xs font-sans text-slate-700">{ac.datetime}</p>


                                //         {folder !== '' ?
                                //             <div className="flex">
                                //                 <FileDriveButton variant="outline" setOpen={() => alert('Open in folder')} mb={0} show={true} icon={<Folder size={14} className="mr-2 fill-gray-400 text-gray-400" />} name={folder} tooltip="Open in folder" />
                                //             </div> : ''}

                                //         {ac.file.map((fi: any, fkey: any) =>
                                //             <div className="flex justify-between" key={fkey}
                                //                 onMouseEnter={(e: any) => { setFileId(fkey); setSearcButton(acting_id); }}
                                //                 onMouseLeave={() => { setFileId(''); setSearcButton(0); }} >

                                //                 {folder !== '' ?
                                //                     <div className="flex flex-row">
                                //                         <CornerDownRight className="text-slate-400 ml-4 mr-1 mt-1" size={16} />

                                //                         <FileDriveButton variant="outline" setOpen={() => alert(fi.name)} mb={sharedTo ? 2 : 1} show={true} icon={<fi.icon size={16} className={'mr-2 ' + fi.color} />} name={fi.name} tooltip="Open in file app" />
                                //                     </div>
                                //                     :
                                //                     <FileDriveButton variant="outline" setOpen={() => alert(fi.name)} mb={sharedTo ? 2 : 1} show={true} icon={<fi.icon size={16} className={'mr-2 ' + fi.color} />} name={fi.name} tooltip="Open in file app" />
                                //                 }

                                //                 <FileDriveButton variant="ghost" setOpen={() => alert('View file in folder')} mb={0} show={acting_id === searcButton && fkey === fileId ? true : false} icon={<Search size={13} />} name="" tooltip="View file in folder" />

                                //             </div>)}


                                //         {sharedTo?.map((share: any, skey: any) => skey < 3 ? <SharedToList index={skey} share={share} shown={true} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> : '')}

                                //         {sharedTo?.map((share: any, skey: any) => skey > 2 && showAllBtn ?
                                //             <SharedToList index={skey} share={share} shown={showAllBtn ? true : false} setCopyButton={setCopyButton} copyButton={copyButton} setCopyContact={setCopyContact} copyContact={copyContact} /> : '')}

                                //     </div>
                                // </div>

                                //     {ac.sharedTo?.length > 3 ?
                                //         <div className="flex justify-between space-x-4 mb-10">

                                //             {showAllBtn ?
                                //                 <Button type="button" onClick={() => handleShowLess(acting_id)} variant="ghost" className="h-8 text-xs mt-1 mb-10 rounded-full text-blue-700">
                                //                     Show less
                                //                 </Button>
                                //                 :
                                //                 <Button type="button" onClick={() => handleShowAll(acting_id, acting_id)} variant="ghost" className="h-8 text-xs mt-1 mb-10 rounded-full text-blue-700">
                                //                     Show all
                                //                 </Button>}

                                //         </div>
                                //         : ''} </>

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