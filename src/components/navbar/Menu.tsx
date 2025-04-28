'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Menu = ({ href, label, children }: { href: string, label: string, children: React.ReactNode }) => {
    const [activeStyle, setActiveStyle] = useState("")
    console.log(activeStyle)
    const path = usePathname()
    console.log(path)
    useEffect(() => {
        if (path === href) {
            setActiveStyle(' text-blue-500')
        } else {
            setActiveStyle('')
        }
    }, [path, href])
    return (
        <Link
            href={href}
            className={"flex flex-col items-center justify-center p-2 hover:text-blue-600 hover:bg-gray-200 rounded-full md:rounded-none md:hover:bg-transparent" + activeStyle}
        >
            <span className="relative">
                <span className="bg-red-600 text-white rounded-full px-1 text-xs ml-0.5 absolute -top-1 -right-3 ">9+</span>
                {children}
            </span>
            <p className="text-sm hidden md:inline-block">{label}</p>
        </Link>
    )
}

export default Menu;