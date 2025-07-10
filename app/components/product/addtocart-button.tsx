"use client";

import { Button } from "../ui/button";
import { toast } from "sonner";
import { Product } from "@/lib/interfaces";
import { useCart } from "@/hooks/cart-provider";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart, decreaseQty, increaseQty, getQuantity } = useCart();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    e.stopPropagation(); 
    addToCart(product);
    toast.success(`Finish added ${product.title} to cart`);
  };

  return (
    <div className="flex items-center p-4 justify-between gap-2 mt-4 flex-wrap w-full transition">
      <Button 
        variant="secondary"
        className="flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-500 cursor-pointer"
        onClick={() => decreaseQty(product.id)}
      >
        <FaMinusCircle strokeWidth={4} />
      </Button>
      
      <span className="text-gray-800 dark:text-gray-100">{getQuantity(product.id)}</span>

      <Button
        variant="secondary"
        className="flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-500 cursor-pointer"
        onClick={() => increaseQty(product.id)}
      >
        <FaPlusCircle strokeWidth={4} />
      </Button>

      {/* Btn Add to cart */}
      <div className="relative">
        <Button
          variant="secondary"
          className="hover:cursor-pointer flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-500 cursor-pointer"
          onClick={(e) => handleClick(e, product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
