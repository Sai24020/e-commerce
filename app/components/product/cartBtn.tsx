"use client";

import { buttonVariants } from "../ui/button";
import { useCart } from "@/hooks/cart-provider";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

export default function CartButton() {
  const { cartCount } = useCart();
  return (
    <Link
      href={"/cart"}
      className={`${buttonVariants({ variant: "link" })} relative`}
    >
      <span className="sr-only">Cart Items</span>
      <FaShoppingBag className="size-8 text-3xl cursor-pointer text-blue-300 mr-4 mt-1 hover:bg-white" />
      {cartCount > 0 && (
        <div className="absolute inline-flex items-center justify-center size-5 text-xs font-bold text-white bg-pink-500 border border-white rounded-full top-1 end-1 dark:border-yellow-600">
          {cartCount}
        </div>
      )}
    </Link>
  );
}