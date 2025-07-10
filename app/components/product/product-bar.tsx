'use client';
import { Product } from "@/lib/interfaces";
import { Card } from "./card";

export default function ProductBar({ products }: { products: Product[]; totalProducts: number }) {

  return (
    <>
      <section className="py-8 px-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-blue-700">Products</h2>
         <p className="text-gray-500 text-lg">Total of Products: 194</p>
         </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-center">
               {products.map((product) => (
                 <Card key={product.id} product={product} />
               ))}
             </div>

     </section>
  </>
  )
}