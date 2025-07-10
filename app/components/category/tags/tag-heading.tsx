// tag-heading.tsx

'use client';

import SearchResultsByTag from "@/app/components/category/tags/tag-results"; // <- you'll build this similar to category results

export default function TagsHeading({ children }: { children: string }) {
  return (
    <div className="my-8 text-center space-y-2">
      <p className="text-lg text-yellow-400 dark:text-yellow-500">Browsing products tagged:</p>
      <h3 className="text-3xl font-semibold text-pink-600">{children}</h3>
      <SearchResultsByTag tagName={children} />
    </div>
  );
}