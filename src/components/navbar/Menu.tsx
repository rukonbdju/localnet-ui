'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = ({ href, label, children }: { href: string, label: string, children: React.ReactNode }) => {
    const path = usePathname()
    const activeStyle: string = path == href ? "bg-blue-600 text-white" : ""
    return (
        <Link href={href} className={"flex flex-row gap-1 items-center px-1.5 rounded " + activeStyle}>
            {children}
            <span>{label}</span>
        </Link>
    )
}

export default Menu;