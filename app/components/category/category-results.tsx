'use client';

import { useEffect, useState } from 'react';
import { Product } from "@/lib/interfaces";
import { CardList } from '@/app/components/product/cards-list';

interface SearchResultsByCategoryProps {
  categoryName: string | null;
}

export default function SearchResultsByCategory({ categoryName }: SearchResultsByCategoryProps) {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const total = 24;

  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
        const data = await res.json();
        setProduct(data.products || []);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-gray-600">Searching for products...</p>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto animate-pulse">
        <CardList products={product} totalProducts={total} />
      </div>
    </div>
  );
}
