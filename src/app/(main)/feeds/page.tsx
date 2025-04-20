'use client'

import { useAppSelector } from "@/lib/hooks";

const FeedsPage = () => {
    const user = useAppSelector((state) => state.auth)
    console.log(user)
    return (
        <div className="mx-auto max-w-2xl px-5 bg-gray-100">
            <h1>This is feed page!</h1>
            <h1>This is feed page!</h1>
            <h1>This is feed page!</h1>
            <h1>This is feed page!</h1>
            <h1>This is feed page!</h1>
            <h1>This is feed page!</h1>
            <h1>This is feed page!</h1>
        </div>
    )
}

export default FeedsPage;