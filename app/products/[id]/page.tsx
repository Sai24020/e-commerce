import { fetchProduct } from "@/app/data-access/actions";
import { ProductDetailsCard } from "@/app/components/product/product-details";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PRODUCT INFORMATION",
    template: "%s | PRODUCT INFORMATION",
  },
};

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const {id} = await (params);
  const parsedId = Number(id);
  const data = await fetchProduct(parsedId);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailsCard product={data} />
    </Suspense>
  );
}
