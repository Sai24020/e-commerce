'use client';

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Lösenorden matchar inte.');
      return;
    }

    // API-registrering logik här
    console.log({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover relative">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">Sign Up</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Create your account by filling the form below
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#00C9A7] hover:bg-[#00b99a] text-white py-3 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Google sign up */}
        <button
          onClick={() => alert('Google sign up')}
          className="mt-4 w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100"
        >
          <FcGoogle className="text-xl" />
          <span className="font-medium">Registrera med Google</span>
        </button>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 font-semibold">
            Sign In!
          </a>
        </div>
      </div>

      {/* Optional: bakgrund overlay */}
      <div className="absolute inset-0 bg-[url('/images/sky3.jpg')] bg-cover opacity-5 pointer-events-none"></div>
    </div>
  );
}
