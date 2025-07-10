// tag-bar.tsx 
"use client";

import { useState } from "react";
import TagsBtn from "@/app/components/category/tags/tag-btn";
import TagsHeading from "@/app/components/category/tags/tag-heading";

import {
  FaUtensils,
  FaWineBottle,
  FaLeaf,
  FaCookie,
  FaCat,
  FaDog,
  FaEgg,
  FaFish,
  FaCouch,
  FaCarrot,
  FaBirthdayCake,
  FaBoxes,
  FaBlender,
  FaLaptop,
  FaTshirt,
  FaShoePrints,
  FaClock,
  FaTv,
  FaMotorcycle,
  FaUserCircle,
  FaMobileAlt,
  FaDumbbell,
  FaGlasses,
  FaCar,
  FaGem,
  FaShoppingBag,
  FaGlassMartiniAlt,
  FaFemale,
} from 'react-icons/fa';

const tags = [
  { name: "meat", icon: <FaUtensils /> },
  { name: "perfumes", icon: <FaWineBottle /> },
  { name: "beauty", icon: <FaLeaf /> },
  { name: "fruits", icon: <FaCookie /> },
  { name: "cat food", icon: <FaCat /> },
  { name: "dog food", icon: <FaDog /> },
  { name: "dairy", icon: <FaEgg /> },
  { name: "seafood", icon: <FaFish /> },
  { name: "furniture", icon: <FaCouch /> },
  { name: "vegetables", icon: <FaCarrot /> },
  { name: "cooking essentials", icon: <FaBoxes /> },
  { name: "desserts", icon: <FaBirthdayCake /> },
  { name: "condiments", icon: <FaLeaf /> },
  { name: "kitchen tools", icon: <FaBlender /> },
  { name: "home decor", icon: <FaGem /> },
  { name: "kitchen appliances", icon: <FaBlender /> },
  { name: "laptops", icon: <FaLaptop /> },
  { name: "men's t-shirts", icon: <FaTshirt /> },
  { name: "footwear", icon: <FaShoePrints /> },
  { name: "watches", icon: <FaClock /> },
  { name: "electronics", icon: <FaTv /> },
  { name: "motorcycles", icon: <FaMotorcycle /> },
  { name: "personal care", icon: <FaUserCircle /> },
  { name: "smartphones", icon: <FaMobileAlt /> },
  { name: "sports equipment", icon: <FaDumbbell /> },
  { name: "eyewear", icon: <FaGlasses /> },
  { name: "vehicles", icon: <FaCar /> },
  { name: "fashion accessories", icon: <FaGem /> },
  { name: "clothing", icon: <FaShoppingBag /> },
  { name: "women's shoes", icon: <FaShoePrints /> },
  { name: "beverages", icon: <FaGlassMartiniAlt /> },
  { name: "women's watches", icon: <FaFemale /> },
];

export default function TagsBar() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <>
      <section className="py-8 px-4 bg-gradient-to-b from-pink-50 to-white rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-pink-700">Tags</h2>
          <p className="text-gray-500 text-lg">Filter by Tag</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-center">
          {tags.map((tag) => (
            <TagsBtn
              key={tag.name}
              tagName={tag.name}
              icon={tag.icon}
              onSelect={setSelectedTag}
            />
          ))}
        </div>
      </section>

      {selectedTag && (
        <TagsHeading>{selectedTag}</TagsHeading>
      )}
    </>
  );
}
