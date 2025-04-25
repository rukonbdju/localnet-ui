'use client';
import { getLoggedInUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useRouter } from "next/navigation";

import { useEffect } from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login')
        }
    }, [isLoading, isAuthenticated, router])

    if (isLoading) return <p>Loading...</p>
    if (!isAuthenticated) return null;
    return children

}

export default AuthWrapper;