'use client';

import { signup } from '@/app/login/actions';
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // API-login logik här
    console.log({ email, password });
  };

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

        <h2 className="text-2xl font-semibold text-center mb-1">Sign In</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your details to login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit btn -sign in */}

          <button
            type="submit"
            className="w-full bg-[#00C9A7] hover:bg-[#00b99a] text-white py-3 rounded-md font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
                  {/* Footer */}
                  <div className="text-center mt-6 text-sm text-gray-500 space-y-2">
                  <p>Don&apos;t have an account yet?</p> 
                    <button
                      formAction={signup}
                      className="w-full bg-[#00C9A7] cursor-pointer hover:bg-[#2c4e49] text-white py-3 rounded-md font-semibold"
                    >
                      Sign Up!
                    </button><br />
          <Link href="#" className="hover:bg-purple-500">Forgot your password?</Link>
        </div>
      </div>

      {/* Optional: */}
      <div className="absolute inset-0 bg-[url('/images/sky3.jpg')] bg-cover opacity-5 pointer-events-none"></div>
    </div>
  );
}
