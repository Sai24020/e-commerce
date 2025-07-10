'use client';

import SearchResultsByCategory from "./category-results";

export default function CategoryHeading({ children }: { children: string }) {
      
  return (
    <div className="my-8 text-center space-y-2">
      <p className="text-lg text-gray-500">Browsing results for:</p>
      <h3 className="text-3xl font-semibold text-blue-700">{children}</h3>
      <SearchResultsByCategory categoryName={children} />
    </div>
  );
}
