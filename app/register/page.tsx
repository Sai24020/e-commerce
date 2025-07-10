// Basic signup page
import type { Metadata } from 'next'
import { login, signup } from '@/app/login/actions'
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    default: 'REGISTER', 
    template: '%s | REGISTER'
    },
  }

  export default function signupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-80 flex items-center justify-center relative">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800 dark:font-bold">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
           src="/icons/logo.png"
            alt="Logo" 
            className="h-10" 
            />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">Sign Up</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
        Create your account by filling the form below
        </p>

        <form className="space-y-4">
        <label htmlFor="fullName">Full Name:</label>
        <input
            id="fullName"
            type="fullName"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
      <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            required
          />
           <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
           <label htmlFor="password">Confirm Password:</label>
           <input
            id="confirmPassword"
            type="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Submit btn -sign up */}
          <button
           formAction={signup}
            className="w-full cursor-pointer bg-[#00C9A7] hover:bg-[#70ba8c] text-white py-3 rounded-md font-semibold"
          >
            Sign Up
          </button>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{' '}
          <button   
           formAction={login}
            className="w-full cursor-pointer bg-[#00C9A7] hover:bg-[#70ba8c] text-white py-3 rounded-md font-semibold"
          >
            Sign In!
          </button>
        </div>

      {/* Optional: bakgrund overlay */}
      <div className="absolute inset-0 bg-[url('/images/sky3.jpg')] bg-cover opacity-5 pointer-events-none"></div>
      </form>
      </div>
    </div>
  );
}
