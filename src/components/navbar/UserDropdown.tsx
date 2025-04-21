import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Logout from "../logout/Logout";
import Link from "next/link";

const UserDropdown = () => {
    return (
        <div className="flex justify-end">
            <Menu as="div" className="relative">
                <div>
                    <MenuButton className="relative flex rounded-full text-sm  focus:outline-hidden">
                        <span className="absolute " />
                        <span className="sr-only">Open user menu</span>
                        <div className="avatar avatar-placeholder outline-none">
                            <div className="w-8 rounded-full text-white bg-blue-600 outline-0">
                                <span>SY</span>
                            </div>
                        </div>
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