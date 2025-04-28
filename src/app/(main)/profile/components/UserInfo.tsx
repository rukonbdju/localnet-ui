'use client'

import { useAppSelector } from "@/lib/hooks"

const UserInfo = () => {
    const { user } = useAppSelector((state) => state.auth)
    return (
        <div>
            <h2 className="text-3xl font-bold">{user?.name}</h2>
            <p className="text-sm">{user?.bio}</p>
            <p className="text-sm">@{user?.username}</p>
        </div>
    )
}

export default UserInfo;