"use client";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import ContactForm from "../../contactForm/contactForm";

export default function FooterKontaktInfo() {
   const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center md:items-start">
      <h3 className="text-2xl font-semibold mb-4 p-2 bg-gradient-to-tl to-gray-600 rounded-2xl text-blue-200">CONTACT</h3>
      <ul className="space-y-2">
        <li className="hover:underline font-extrabold text-white hover:text-1xl hover:text-[#B01C5B] bg-gradient-to-br to-gray-700 rounded-xl">
        <button
        onClick={() => setModalOpen(true)}
        className="bg-[#B01C5B] p-3 rounded-full hover:scale-105 transition cursor-pointer"
        aria-label="Ringa oss">
        <PhoneIcon className="text-white w-5 h-5" />
        </button>
        <span><strong> +46 761 981 11</strong></span></li>

        <li className="hover:underline font-extrabold text-white hover:text-1xl hover:text-[#B01C5B] bg-gradient-to-br to-gray-700 rounded-xl">
        <button
        onClick={() => setModalOpen(true)}
        className="bg-[#B01C5B] p-3 rounded-full hover:scale-105 transition cursor-pointer"
        aria-label="Kontakta oss">
      <MailIcon className="text-white w-5 h-5" />
      </button>
      <span><strong>   sm_pal_2025@info.se</strong></span></li>

      {/* contact form efter tryck mailIcon */}
          <ContactForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
     </ul>
    </div>
  );
}