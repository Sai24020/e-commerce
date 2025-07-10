// tag-results.tsx 
"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/interfaces";
import { fetchProductT } from "@/app/data-access/actions";
import { CardList } from "@/app/components/product/cards-list";

export default function SearchResultsByTag({ tagName }: { tagName: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { products } = await fetchProductT();
      const filtered = products.filter((p: { tags: string[] }) =>
        p.tags.map((t: string) => t.toLowerCase()).includes(tagName.toLowerCase())
      );
      setProducts(filtered);
      setLoading(false);
    }
    load();
  }, [tagName]);

  if (loading) return <p className="text-center text-gray-400 mt-4">Laddar produkter...</p>;

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4 dark:text-yellow-500">
        Inga produkter hittades för taggen &quot;<span className="font-semibold">{tagName}</span>&quot;.
      </p>
    );
  }

  return (
    <div className="mt-8">
      <CardList products={products} totalProducts={0} />
    </div>
  );
}
