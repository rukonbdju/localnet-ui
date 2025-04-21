'use client';

import { fetcher } from "@/api/api";
import { clearUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import { MenuItem } from "@headlessui/react";
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const handleLogout = async () => {
        try {
            const response = await fetcher('/auth/signout', {
                method: 'POST'
            })
            if (response.success) {
                dispatch(clearUser())
                router.push('/login')
            }
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <MenuItem as='div' onClick={handleLogout}>
            <button
                className=" bg-red-400 hover:bg-red-500 hover:text-white cursor-pointer px-4 py-2 mt-1 w-full rounded-md text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
            >
                Sign out
            </button>
        </MenuItem>
    )
}

export default Logout;