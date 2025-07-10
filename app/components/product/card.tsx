'use client';

import { Product } from "@/lib/interfaces";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import AddToCartButton from "./addtocart-button";

export function Card({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  /*const [count, setCount] = useState<number>(0);*/

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favs.some((fav: Product) => fav.id === product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    const favs: Product[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavs;

    if (favs.some((fav: Product) => fav.id === product.id)) {
      updatedFavs = favs.filter((fav: Product) => fav.id !== product.id);
      setIsFavorite(false);
    } else {
      updatedFavs = [...favs, product];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/90 backdrop-invert backdrop-opacity-10 gap-3 rounded-lg shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] p-4 flex flex-col items-center">
<h2 className="text-lg font-semibold text-center truncate text-yellow-600 dark:text-yellow-400">
  {product.title}
</h2>

      {/* Rabatt + Hjärtikon */}
      <div className="flex justify-between items-center w-full mt-1 px-2">
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {product.discountPercentage}%
        </span>
        <button onClick={toggleFavorite}>
          <FaHeart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "text-red-500" : "text-gray-400 dark:text-gray-500"
            }`}
          />
        </button>
      </div>

      <Link href={`/products/${product.id}`}>
        <Image
          className="rounded-lg object-cover mt-3 bg-white dark:bg-gray-700"
          src={product.thumbnail}
          width={200}
          height={200}
          alt={`Bild ${product.title}`}
        />
      </Link>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{product.brand}</p>
      <p className="text-lg font-bold text-pink-600 dark:text-pink-400">${product.price}</p>      
          <div className="flex justify-end">
            <AddToCartButton product={product} />
          </div> 
    </div>
  );
}

