'use client';
import { useState } from "react";
import { AddressInfo, LatLng, User } from "@/types";
import { EnvelopeIcon, LockClosedIcon, MapPinIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AddressModal from "./AddressModal";
import { fetcher } from "@/api/api";
import { useRouter } from "next/navigation";
type ApiError = Error & { code?: number };
type RegisteredUser = { success: boolean; user: object; accessToken: string; }

const RegisterForm = () => {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [location, setLocation] = useState<AddressInfo | null>(null)
    const [geolocation, setGeolocation] = useState<LatLng>({ lat: 23.803994606998913, lng: 90.4138565346701 })
    const [formData, setFormData] = useState<User>({ name: '', email: '', password: '', password2: '', });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ message: string | null, code?: number | null }>({ message: null, code: null });

    //handle input change
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'password2') {
            if (e.target.value !== formData.password) {
                setError({ message: 'Password does not match' });
                return;
            } else {
                setError({ message: null, code: null });
            }
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    //handle form submission
    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const userData = { ...location, ...formData, geolocation }
            const registeredUser: RegisteredUser = await fetcher('/auth/signup', {
                method: "POST",
                body: JSON.stringify(userData)
            })
            if (registeredUser.success) {
                const expires = new Date().getTime() + 30 * 1000
                const cookie = `_localNet_access_token_=${registeredUser.accessToken};${expires};path:'/' `
                document.cookie = cookie;
                router.push('/')
            }
            console.log(registeredUser);
        } catch (err) {
            const error = err as ApiError;
            setError({ message: error.message })
            console.log(error.stack)
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
                    className="border-0 outline-0 py-2 pe-2 w-full"
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
                    className="border-0 outline-0 py-2 pe-2 w-full"
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
                        className="border-0 outline-0 py-2 pe-2 w-full"
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
                        disabled={formData.password.length < 6}
                        name="password2"
                        onChange={onInputChange}
                        minLength={6}
                        title="Password must match"
                        type="password"
                        className="border-0 outline-0 py-2 pe-2 w-full"
                        placeholder="Confirm password"
                        required
                    />
                </div>
                <p></p>
            </div>
            <div onClick={() => setModalOpen(true)} className="border border-gray-400 rounded-xl flex hover:border-blue-500 cursor-pointer">
                <span className="inline-block p-2">
                    <MapPinIcon className='size-5' />
                </span>
                <p className="py-2 pe-2">{location?.address ? location.address : <span className="text-gray-500 font-light">Address</span>}</p>

            </div>
            <div>
                <button
                    disabled={loading}
                    className="p-2.5 bg-blue-600 text-white font-semibold rounded-xl w-full hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150 disabled:bg-gray-300 disabled:border-gray-600 disabled:text-gray-600"
                >
                    Register
                </button>
            </div>
            <AddressModal
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                location={location}
                setLocation={setLocation}
                geolocation={geolocation}
                setGeolocation={setGeolocation}
            />
        </form>
    )
}

export default RegisterForm;