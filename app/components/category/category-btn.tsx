'use client';

import { ReactElement } from "react";

export default function CategoryBtn({
  icon,
  categoryName,
  onSelect
}: {
  icon: ReactElement;
  categoryName: string;
  onSelect?: (category: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect?.(categoryName)}
      className="flex flex-col items-center justify-center cursor-pointer text-blue-600 hover:text-amber-300 p-4 w-28 h-28 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-100 transition-all"
    >
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-sm text-center font-medium">{categoryName}</span>
    </button>
  );
}
