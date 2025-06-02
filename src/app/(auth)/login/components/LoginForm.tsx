'use client';
import { fetcher } from "@/api/api";
import { setUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ApiError } from "@/types";
import { EnvelopeIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
    const user = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()
    const router = useRouter()
    console.log(user)
    const [formData, setFormData] = useState<{ email: string, password: string }>({ email: '', password: '' })
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ message: string | null, code?: number | null }>({ message: null, code: null });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearError()
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const credentials = await fetcher('/auth/signin', { method: "POST", body: JSON.stringify(formData) })
            console.log(credentials)
            if (credentials?.success) {
                dispatch(setUser(credentials))
                router.push('/')
            }
        } catch (err) {
            const error = err as ApiError
            setError({ message: error.message })
        } finally {
            setLoading(false)
        }
    }
    const clearError = () => setError({ message: null, code: null });
    return (
        <form onSubmit={onFormSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            {
                error.message && (
                    <div className="bg-red-100 p-3 rounded-xl flex items-center justify-between gap-2">
                        <p className="text-red-500 text-xs">{error.message}</p>
                        <span onClick={clearError} className="bg-white p-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-150">
                            <XMarkIcon className="size-4" />
                        </span>
                    </div>
                )
            }
            <div className="border border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                <span className="inline-block px-2">
                    <EnvelopeIcon className='size-5' />
                </span>
                <input onChange={onInputChange} name="email" type="email" className="border-0 outline-0 py-2 w-full" placeholder="Enter email" />
            </div>
            <div className="border border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                <span className="inline-block px-2">
                    <LockClosedIcon className='size-5' />
                </span>
                <input onChange={onInputChange} name="password" type="password" className="border-0 outline-0 py-2 w-full" placeholder="Enter password" />
            </div>
            <div>
                <button
                    className="p-2.5 bg-blue-600 text-white font-semibold rounded-xl w-full hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150 disabled:bg-gray-300 disabled:border-gray-600 disabled:text-gray-600"
                    disabled={loading}
                    type="submit"
                >
                    Login
                </button>
                <div className="flex justify-end">
                    <Link href='reset-password' className="text-sm mt-2 hover:underline hover:text-blue-700">Forgot password?</Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;