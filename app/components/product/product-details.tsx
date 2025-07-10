import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Product } from "@/lib/interfaces";
import Ratings from "../ui/ratings";
import Image from "next/image";
import AddToCartButton from "./addtocart-button";

export function ProductDetailsCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Card className="max-w-[120ch] mx-auto">
      <CardHeader className="text-center">
        <CardTitle>
          <h1 className="font-bold text-xl">{product.title}</h1>
        </CardTitle>
        <CardDescription>Category: {product.category}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 grid grid-cols-2">
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[260px] px-4 object-contain"
            src={product.thumbnail}
            height={100}
            width={100}
            alt={product.title}
          />
        </div>
        <div className="grid gap-2 px-4">
          <div className="flex gap-2 items-center">
            <span className="text-pretty dark:text-amber-500">Rating:</span>
            <Ratings rating={product.rating} />
          </div>
          <p className="text-pretty dark:text-amber-300">{product.description}</p>
        </div>
      </CardContent>

      <CardFooter className="items-center list-none space-x-4 flex-1 justify-end flex columns-2 gap-4 px-4 text-center">
        <li className="text-left text-4xl text-red-600 font-semibold">
          ${product.price}
        </li>
        <li className="text-right font-semibold text-2xl text-green-700">
          %{product.discountPercentage}
        </li>
      </CardFooter>

      <div className="text-center font-semibold w-full p-4">
        <AddToCartButton product={product} />
      </div>
    </Card>
  );
}
