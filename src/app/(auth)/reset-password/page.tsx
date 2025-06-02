import Image from "next/image";
import ResetPasswordForm from "./_components/ResetPasswordForm";

const ResetPasswordPage = () => {
    return (
        <div className="w-screen h-screen  content-center p-4" >
            <div className="bg-white rounded-xl max-w-xl mx-auto p-8 shadow-2xl" >
                <header className="mb-6">
                    <div className="flex items-center justify-center mb-4">
                        <Image src={'/logo.png'} alt="logo" width={48} height={48} />
                    </div>
                    <span className="flex items-center max-w-md mx-auto">
                        <span className="h-px flex-1 bg-gray-300"></span>

                        <span className="shrink-0 px-4 text-gray-900">Reset password</span>

                        <span className="h-px flex-1 bg-gray-300"></span>
                    </span>
                </header>
                <ResetPasswordForm />
            </div>
        </div>
    )
}

export default ResetPasswordPage;