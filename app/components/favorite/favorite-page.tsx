// pages/favorite.page.tsx
'use client';

import { useEffect, useState } from "react";
import { Product } from "@/lib/interfaces";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";

export default function FavouritePage() {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (productId: number) => {
    const updatedFavorites = favorites.filter((product) => product.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4 border rounded-lg text-amber-300 bg-blue-950">
      <h2 className="text-xl font-bold mb-4">Your Favourite Products</h2>
      {favorites.length === 0 ? (
        <p>You have no favourite products.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {favorites.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={55}
                      height={55}
                      className="object-cover rounded bg-gray-400"
                    />
                    <span>{product.title}</span>
                  </div>
                </TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFavorite(product.id)}
                    className="w-4 h-4 hover:bg-blue-500 hover:p-3 cursor-pointer"
                  >
                    <FaTrashAlt className="w-4 h-4 text-amber-300 cursor-pointer" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
