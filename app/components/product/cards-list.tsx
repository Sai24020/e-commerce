'use client';

import { Product } from "@/lib/interfaces";
import { Card } from "./card";

// Lista med produkter
export function CardList({ products }: { products: Product[]; totalProducts: number }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
  );
}
