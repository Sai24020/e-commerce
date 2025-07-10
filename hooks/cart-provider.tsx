"use client";

import { Product } from "@/lib/interfaces";
import { createContext, useContext, useState } from "react";

// Typ för en varukorgspost
type Cart = Product & { qty: number };

// Här definierar vi vad som är tillgängligt i vårt context
interface CartContextType 
 {
  carts: Cart[]; // Varukorg
  addToCart: (product: Product) => void; // Lägg till produkt i varukorgen
  increaseQty: (productId: number) => void; // Öka kvantitet
  decreaseQty: (productId: number) => void; // Minska kvantitet
  removeFromCart: (productId: number) => void; // Ta bort produkt från varukorgen
  cartTotal: number; // Totalt belopp för varukorgen
  cartCount: number; // Antal varor i varukorgen
  isInCart: (id: number) => boolean;
  getQuantity: (id: number) => number;
};

// Skapa contexten med undefined som initialt värde (eftersom den är tom från början)
export const CartContext = createContext<CartContextType | null>(
  null
);

// Huvudmetoden för CartProvider
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Vi använder state för att hantera uppdateringar av varukorgen
  const [carts, setCarts] = useState<Cart[]>([]);

  // Metod som används när vi lägger till en produkt i varukorgen
  function addToCart(product: Product) {
    setCarts((prevCart) => {
      // Först kollar vi om vi redan har en produkt med detta ID
      const existingItem = prevCart.find((item) => item.id === product.id
      );
      
      // Om produkten finns, öka kvantiteten med 1
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        // Annars behåll den tidigare varukorgen och lägg till den nya produkten
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  }

  // Funktion för att öka kvantiteten för en produkt i varukorgen
  function increaseQty(productId: number) {
    setCarts((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  }

  // Funktion för att minska kvantiteten för en produkt i varukorgen
  function decreaseQty(productId: number) {
    setCarts((prevCart) =>
      prevCart
        .map((item) =>
          productId === productId
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0) // Ta bort produkt om kvantiteten går till 0
    );
  }

  // Funktion för att ta bort en produkt från varukorgen
  function removeFromCart(productId: number) {
    setCarts((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  }

  // Beräkna totalt antal varor i varukorgen
  const cartCount = carts.reduce((count, item) => count + item.qty, 0);

  // Beräkna det totala värdet av varorna i varukorgen
  const cartTotal = carts.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const isInCart = (id: number) => !!carts.find((item) => item.id === id);
  const getQuantity = (id: number) => carts.find((item) => item.id === id)?.qty || 0;


  // Returnera vår context så att den kan användas
  return (
    <CartContext.Provider 
    value={{
       carts,
       isInCart, 
        getQuantity,
         addToCart,
          increaseQty, 
          decreaseQty,
           removeFromCart, 
           cartTotal, 
           cartCount,
            }}
            >
      {children}
    </CartContext.Provider>
  );
}

// Skapa vår egen hook för att använda varukorgen
export const useCart = () => {
  const context = useContext(CartContext);
  // Detta är för att säkerställa att vi inte försöker använda hooken utan rätt context
  if (!context) {
    throw new Error("useCart måste användas inom en CartProvider");
  }
  return context;
};
