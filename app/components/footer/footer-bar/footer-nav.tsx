"use client";

import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="flex flex-col items-center md:items-center lg:items-start">
      <h3 className="text-2xl font-semibold mb-4 p-2 text-blue-200 bg-gradient-to-tl to-gray-600 rounded-2xl">LINKS</h3>

      <ul className="flex flex-col md:flex-col lg:flex-col gap-4 text-center lg:text-left ">
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/private">HOME PRIVATE</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/products">PRODUCTS</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/products/category">CATEGORIES</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/about">ABOUT</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/contact">CONTACT</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/profile">PROFILE</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/favorite">FAVOURITE</Link>
        </li>
        <li className="hover:underline hover:text-red-400 transition-colors hover:text-l">
          <Link href="/register">SIGN_UP</Link>
        </li>
      </ul>
    </nav>
  );
}