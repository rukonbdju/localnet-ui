import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./components/LoginForm";
import LoginWithGoogle from "./components/LoginWithGoogle";
import { Logo } from "@/components/logo/Logo";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="w-screen h-screen  content-center p-4" >
      <div className=" bg-white rounded-xl max-w-xl mx-auto p-8 shadow-2xl" >
        <header className="mb-4">
          <Logo />
          <h2 className="text-2xl font-semibold text-center mt-2">Welcome back!</h2>
        </header>
        {/* <LoginWithGoogle /> */}
        <span className="flex items-center max-w-md mx-auto mb-4">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="shrink-0 px-4 text-gray-900">Login</span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </span>
        <LoginForm />
      </div>
      <div className="bg-white rounded-xl max-w-xl mx-auto p-4 mt-5 flex flex-row justify-between items-center shadow-2xl">
        <p>New User?</p>
        <Link href='/register' className="bg-blue-600 text-white font-semibold rounded-xl py-2 px-3 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150">Register Now</Link>
      </div>
    </div>
  );
}