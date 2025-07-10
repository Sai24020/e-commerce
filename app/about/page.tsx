
// Basic about page
import Image from "next/image";
import ShopNow from "@/public/images/shop_now.jpg"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    default: 'ABOUT', // a default is required when creating a template
    template: '%s | ABOUT'
    },
  }

export default function AboutPage() {

    return (
    <>
     <main className="space-y-4 container mt-20 mb-40 mx-auto">
      <p>This will be the about page</p>
            <Image
              src={ShopNow}
              alt="Placeholder"
              className="w-full h-auto rounded"
            /> 

     </main>
    </>
    );
  }