import { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";
import RegisterWithGoogle from "./components/RegisterWithGoogle";
import { Logo } from "@/components/logo/Logo";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <div className="w-full p-4" >
      <div className="bg-white rounded-xl max-w-xl mx-auto p-4 md:p-8 shadow-2xl" >
        <Logo />
        <h2 className="text-xl font-semibold text-center my-4">Create New Account</h2>
        <RegisterWithGoogle />
        <div className="flex flex-row items-center justify-center gap-2 my-4 max-w-md mx-auto">
          <div className="h-px bg-gray-300 w-full"></div>
          <div>OR</div>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>
        <RegisterForm />
      </div>
      <div className="bg-white rounded-xl max-w-xl mx-auto p-4 mt-5 flex flex-row justify-between items-center shadow-2xl">
        <p>Already have an account?</p>
        <Link href='/login' className="bg-blue-600 text-white font-semibold rounded-xl py-2 px-3 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150">Login</Link>
      </div>
    </div>
  );
}