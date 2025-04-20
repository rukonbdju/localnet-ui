'use client';
import { getLoggedInUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

import { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    if (user.isLoading) return <p>Loading...</p>
    if (user.error) return <p>{user.error}</p>
    return children;
}

export default AuthWrapper;