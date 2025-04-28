'use client';

import { useAppSelector } from "@/lib/hooks";

const PersonalInfo = () => {
    const { user } = useAppSelector((state) => state.auth)
    return (
        <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-200 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-gray-900">Gender</dt>
                    <dd className="text-gray-700 sm:col-span-2">{user?.gender || "N/A"}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-gray-900">Email</dt>
                    <dd className="text-gray-700 sm:col-span-2">{user?.email}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-gray-900">Phone</dt>
                    <dd className="text-gray-700 sm:col-span-2">{user?.phone || "N/A"}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-gray-900">Address</dt>
                    <dd className="text-gray-700 sm:col-span-2">{user?.address}</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-semibold text-gray-900">Occupation</dt>
                    <dd className="text-gray-700 sm:col-span-2">{user?.occupation || "N/A"}</dd>
                </div>
            </dl>
        </div>
    )
}

export default PersonalInfo;