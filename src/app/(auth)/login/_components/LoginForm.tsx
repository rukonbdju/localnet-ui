import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const LoginForm = () => {
    return (
        <form className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="border-2 border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                <span className="inline-block px-2">
                    <EnvelopeIcon className='size-5' />
                </span>
                <input type="text" className="border-0 outline-0 py-2 w-full" placeholder="Enter email" />
            </div>
            <div className="border-2 border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                <span className="inline-block px-2">
                    <LockClosedIcon className='size-5' />
                </span>
                <input type="text" className="border-0 outline-0 py-2 w-full" placeholder="Enter password" />
            </div>
            <div>
                <button
                    className="p-2.5 bg-blue-600 text-white font-semibold rounded-xl w-full hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150 disabled:bg-gray-300 disabled:border-gray-600 disabled:text-gray-600"
                >
                    Login
                </button>
                <Link href='reset-password' className="text-sm mt-2 hover:underline hover:text-blue-700">Forgot password?</Link>
            </div>
        </form>
    )
}

export default LoginForm;