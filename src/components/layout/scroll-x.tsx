'use client'
import React from 'react'
export default function HorizontalScrollContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="scroll-x">
            {children}
        </div>
    )
}
