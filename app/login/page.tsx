
import { Link } from 'lucide-react';
import { login, signup } from './actions';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    default: 'LOGIN',
    template: '%s | LOGIN',
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-80 relative">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 dark:bg-gray-800 dark:font-bold z-10">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">Sign In</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your details to login to your account
        </p>

        <form className="space-y-4">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Submit btn - Sign In */}
          <button
            formAction={login}
            className="w-full cursor-pointer bg-[#00C9A7] hover:bg-[#70ba8c] text-white py-3 rounded-md font-semibold"
          >
            Sign In
          </button>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-500 space-y-2">
          <p>Don&apos;t have an account yet?</p> 
            <button
              formAction={signup}
              className="w-full bg-[#00C9A7] cursor-pointer hover:bg-[#2c4e49] text-white py-3 rounded-md font-semibold"
            >
              Sign Up!
            </button>
            {/* Replace <a> with <Link> for client-side navigation */}
            <Link href="/reset-password">
              <a className="block text-blue-500 hover:underline">Forgot your password?</a>
            </Link>
          </div>
        </form>
      </div>

      {/* Optional background overlay */}
      <div className="absolute inset-0 bg-[url('/images/sky3.jpg')] bg-cover opacity-5 pointer-events-none"></div>
    </div>
  );
}

