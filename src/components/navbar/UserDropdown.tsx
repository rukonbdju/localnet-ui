import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Logout from "../logout/Logout";
import Link from "next/link";
import { DropDownIcon } from "../icons/Icons";
import Image from "next/image";

const UserDropdown = () => {
    return (
        <div className="flex justify-end items-center">
            <Menu as="div" className="relative">
                <div>
                    <MenuButton className="relative flex flex-col items-center rounded-full text-sm  focus:outline-hidden">
                        <span className="absolute " />
                        <span className="sr-only">Open user menu</span>
                        <span className="bg-blue-500 size-6 rounded-full ring">
                            <Image src={"/avater-male.jpg"} height={24} width={24} alt="avatar" className="size-full rounded-full" />
                        </span>
                        <span className="hidden md:flex flex-row items-center justify-between">Me <DropDownIcon className="size-4" /></span>
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 p-1 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <MenuItem>
                        <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                            Your Profile
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="/Settings"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                            Settings
                        </Link>
                    </MenuItem>
                    <Logout />
                </MenuItems>
            </Menu>
        </div>
    )
}

export default UserDropdown;