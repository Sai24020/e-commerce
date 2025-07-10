
"use client";

import { useCart } from "@/hooks/cart-provider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { MessageCircleQuestionIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const { carts, increaseQty, decreaseQty, removeFromCart, getQuantity } = useCart();

    return (

     <div className="p-4 border rounded-lg text-amber-300 bg-blue-950">
      
      {carts.length === 0 ? (
        <div>
        <h2 className="text-xl font-bold mb-4">This will be the cart page</h2>
        <p className="flex mr-4"><strong>DIN KUNDVAGN ÄR TOM </strong><span><ShoppingCartIcon/></span></p>
        <p className="flex mr-4">Behöver du inspiration för att hitta rätt produkt ? <span><MessageCircleQuestionIcon/></span></p>
        <Link href="/products/category" passHref>
            <Button className="bg-[#c83373] cursor-pointer hover:bg-[#b01c5c] text-white text-lg sm:text-xl px-6 py-3 rounded-full flex items-center gap-2">
        Fortsätt handla</Button></Link>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product | category </TableHead>
              <TableHead className="hidden md:block">Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            
            </TableRow>
          </TableHeader>
          <TableBody>
            {carts.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <Link href="/products/{item.id}">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={55}
                      height={55}
                      className="object-cover rounded bg-gray-300"
                    /></Link>
                   <div className="grid grid-col">
                    <span className="items-center">{item.title}</span>
                    <span className="items-center">{item.category}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:block md:mt-8">{item.brand}</TableCell>
                <TableCell>${item.price}
                <span> <p className="text-sm text-gray-600">${item.price.toFixed(1)}</p></span>
                </TableCell>
                <TableCell className="text-right">
                <ul className="flex items-center md:justify-between gap-1 mt-4 flex-wrap w-full flex-col">
                        <li>
                          <Button variant="secondary" className="flex cursor-pointer hover:bg-gray-500 items-center gap-1"
                           onClick={() => increaseQty(item.id)}
                           >
                            <FaPlusCircle />
                          </Button>
                        </li>
                        <span className="px-3">{getQuantity(item.id)}</span>
                        <li>
                          <Button variant="secondary" className="flex cursor-pointer hover:bg-gray-500 items-center gap-1"
                           onClick={() => decreaseQty(item.id)}
                           >
                            <FaMinusCircle />
                          </Button>
                        </li>
              </ul>
                 
                </TableCell>
            {/*  Delete */}
                <TableCell className="text-right">
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="w-4 h-4 hover:bg-blue-500 hover:p-3 cursor-pointer"
                  >
                    <FaTrashAlt className="w-4 h-4 text-amber-300 cursor-pointer" />
                  </Button>
                
                </TableCell>
              </TableRow>
            
            ))}
          </TableBody>
             {/* Quantity Total price saknas */}
          <TableCell></TableCell>
          <TableCell className="text-right">
                <span className="px-3"> Total: {} </span>      
                </TableCell>
        </Table>
        
        )} 
        </div>
  );
}
