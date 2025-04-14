'use client';

import { Error, User } from "@/types";
import { EnvelopeIcon, LockClosedIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";



const RegisterForm = () => {
    const [formData, setFormData] = useState<User>({ name: '', email: '', password: '', password2: '' });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>({ message: null, code: null });

    //handle input change
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    //handle form submission
    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log(formData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    //clear error message
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
                    <UserIcon className='size-5' />
                </span>
                <input
                    name="name"
                    onChange={onInputChange}
                    type="text"
                    className="border-0 outline-0 py-2 w-full"
                    placeholder="Enter name"
                    required
                />
            </div>
            <div className="border border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                <span className="inline-block px-2">
                    <EnvelopeIcon className='size-5' />
                </span>
                <input
                    name="email"
                    onChange={onInputChange}
                    type="text"
                    className="border-0 outline-0 py-2 w-full"
                    placeholder="Enter email"
                    required
                />
            </div>
            <div>
                <div className="border border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                    <span className="inline-block px-2">
                        <LockClosedIcon className='size-5' />
                    </span>
                    <input
                        name="password"
                        onChange={onInputChange}
                        minLength={6}
                        title="Password must be at least 6 characters long"
                        type="password"
                        className="border-0 outline-0 py-2 w-full"
                        placeholder="Enter password"
                        required
                    />
                </div>
                <p></p>
            </div>
            <div>
                <div className="border border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                    <span className="inline-block px-2">
                        <LockClosedIcon className='size-5' />
                    </span>
                    <input
                        name="password2"
                        onChange={onInputChange}
                        minLength={6}
                        title="Password must match"
                        type="password"
                        className="border-0 outline-0 py-2 w-full"
                        placeholder="Confirm password"
                        required
                    />
                </div>
                <p></p>
            </div>
            <div>
                <button
                    disabled={loading}
                    className="p-2.5 bg-blue-600 text-white font-semibold rounded-xl w-full hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150 disabled:bg-gray-300 disabled:border-gray-600 disabled:text-gray-600"
                >
                    Register
                </button>
            </div>
        </form>
    )
}

export default RegisterForm;