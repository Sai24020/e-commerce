// tag-btn.tsx 
'use client';

import { ReactElement } from "react";

export default function TagsBtn({
  icon,
  tagName,
  onSelect
}: {
  icon?: ReactElement;
  tagName: string;
  onSelect?: (tag: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect?.(tagName)}
      className="flex flex-col items-center justify-center p-4 w-28 h-28 cursor-pointer text-pink-600 hover:text-amber-300 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-pink-100 transition-all"
    >
      {icon && <span className="text-3xl mb-2">{icon}</span>}
      <span className="text-sm text-center font-medium">{tagName}</span>
    </button>
  );
}