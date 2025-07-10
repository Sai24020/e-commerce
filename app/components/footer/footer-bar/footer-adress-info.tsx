"use client";
import { MapIcon } from "lucide-react";
import { useState } from "react";

export default function FooterAdressInfo() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-semibold mb-4 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl text-blue-200">
        ADDRESS
      </h3>
      <ul className="space-y-2">
        <li className="text-white font-extrabold bg-gradient-to-br to-gray-700 rounded-xl hover:text-[#B01C5B]">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#B01C5B] p-3 rounded-full hover:scale-105 transition cursor-pointer"
            aria-label="Visa karta"
          >
            <MapIcon className="text-white w-5 h-5" />
          </button>
          <span>
            <strong> Projektgrändgatan 11</strong>
          </span>
        </li>
        <li className="text-white font-extrabold bg-gradient-to-br to-gray-700 rounded-xl text-center hover:text-[#B01C5B]">
          <strong>543 21 Gasumawi</strong>
        </li>
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-black">
            <h4 className="text-lg font-bold mb-2">Här är vi!</h4>
            <p>Projektgrändgatan 11, 543 21 Gasumawi</p>
            <button
              className="mt-4 bg-[#B01C5B] text-white px-4 py-2 rounded"
              onClick={() => setModalOpen(false)}
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
