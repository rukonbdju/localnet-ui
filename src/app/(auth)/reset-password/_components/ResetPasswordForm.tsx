import { EnvelopeIcon } from "@heroicons/react/24/outline";

const ResetPasswordForm = () => {
    return (
        <div>
            <form className="flex flex-col gap-4 max-w-md mx-auto">
                <div className="border-2 border-gray-400 rounded-xl flex items-center focus-within:border-blue-500">
                    <span className="inline-block px-2">
                        <EnvelopeIcon className='size-5' />
                    </span>
                    <input
                        type="email"
                        className="border-0 outline-0 py-2 w-full"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div>
                    <button
                        className="p-2.5 bg-blue-600 text-white font-semibold rounded-xl w-full hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150 disabled:bg-gray-300 disabled:border-gray-600 disabled:text-gray-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordForm;