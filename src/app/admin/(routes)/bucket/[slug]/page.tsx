"use client"

import React from 'react'
import { useRouter } from 'next/router'

import ItemPage from '@/features/bugkets/views/items';

export default function Page({ params }: { params: { slug: string } }) { return (<ItemPage params={params} />) }
