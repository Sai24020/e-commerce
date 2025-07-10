
import CategoryBar from "@/app/components/category/category-bar";
import TagsBar from "@/app/components/category/tags/tag-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'PRODUCTS BY CATEGORY', // a default is required when creating a template
    template: '%s | PRODUCTS BY CATEGORY'
    },
  }

export default function HomeCategory() {

    return (
      <div className="bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover">
     
        <h1 className="flex bg-[url('/images/shop_now.jpg')] bg-center bg-no-repeat bg-cover shadow-md px-6 py-7 text-3xl font-bold mt-4 mb-4">
        SHOP COLLECTION
        </h1>
        <main className="space-y-10">
             <CategoryBar />
             <TagsBar />
        </main>

        </div>
    )
}