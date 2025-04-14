import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";
import RegisterWithGoogle from "./components/RegisterWithGoogle";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <div className="w-screen h-screen content-center p-4" >
      <div className="bg-white dark:bg-gray-900/50 rounded-xl max-w-xl mx-auto p-8 shadow-2xl" >
        <header className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <Image src={'/logo.png'} alt="logo" width={32} height={32} />
          </div>
          <h2 className="text-2xl font-semibold text-center">Create New Account</h2>
        </header>
        <RegisterWithGoogle />
        <div className="flex flex-row items-center justify-center gap-2 my-6 max-w-md mx-auto">
          <div className="h-px bg-gray-300 w-full"></div>
          <div>OR</div>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>
        <RegisterForm />
      </div>
      <div className="bg-white dark:bg-gray-900/50 rounded-xl max-w-xl mx-auto p-4 mt-5 flex flex-row justify-between items-center shadow-2xl">
        <p>Already have an account?</p>
        <Link href='/login' className="bg-blue-600 text-white font-semibold rounded-xl py-2 px-3 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150">Login</Link>
      </div>
    </div>
  );
}