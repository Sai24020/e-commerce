'use client';

import { useState } from "react";
import {
  FaTshirt, FaChair, FaGift, FaStar, FaAppleAlt, FaCoffee, FaLaptop,
  FaShoePrints, FaClock, FaPhoneAlt, FaMotorcycle, FaSpa, FaMobileAlt,
  FaBasketballBall, FaGlasses, FaTabletAlt, FaCar, FaHardHat, FaSnowflake,
  FaGem
} from "react-icons/fa";

import CategoryBtn from "./category-btn";
import CategoryHeading from "./category-heading";

const categories = [
  { name: "Beauty", icon: <FaGift /> },
  { name: "fragrances", icon: <FaStar /> },
  { name: "furniture", icon: <FaChair /> },
  { name: "groceries", icon: <FaAppleAlt /> },
  { name: "Home-Decoration", icon: <FaChair /> },
  { name: "Kitchen-Accessories", icon: <FaCoffee /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Mens-Shirts", icon: <FaTshirt /> },
  { name: "Mens-Shoes", icon: <FaShoePrints /> },
  { name: "Mens-Watches", icon: <FaClock /> },
  { name: "Mobile-Accessories", icon: <FaPhoneAlt /> },
  { name: "Motorcycle", icon: <FaMotorcycle /> },
  { name: "Skin-Care", icon: <FaSpa /> },
  { name: "Smartphones", icon: <FaMobileAlt /> },
  { name: "Sports-Accessories", icon: <FaBasketballBall /> },
  { name: "Sunglasses", icon: <FaGlasses /> },
  { name: "Tablets", icon: <FaTabletAlt /> },
  { name: "Tops", icon: <FaTshirt /> },
  { name: "Vehicle", icon: <FaCar /> },
  { name: "Womens-Bags", icon: <FaHardHat /> },
  { name: "Womens-Dresses", icon: <FaSnowflake /> },
  { name: "Womens-Jewellery", icon: <FaGem /> },
  { name: "Womens-Shoes", icon: <FaShoePrints /> },
  { name: "Womens-Watches", icon: <FaClock /> },
];

export default function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <section className="py-8 px-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-blue-700">Categories</h2>
          <p className="text-gray-500 text-lg">Browse by Category</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-center">
          {categories.map((cat) => (
            <CategoryBtn
              key={cat.name}
              categoryName={cat.name}
              icon={cat.icon}
              onSelect={setSelectedCategory}
            />
          ))}
        </div>
      </section>

      {selectedCategory && (
        <CategoryHeading>{selectedCategory}</CategoryHeading>
      )}
    </>
  );
}
