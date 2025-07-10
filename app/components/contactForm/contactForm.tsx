'use client';

import { useState } from 'react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose(); // Stäng efter skickat
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[url('/images/sky1.jpg')] bg-center bg-no-repeat bg-cover bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#101828] text-white rounded-xl w-full max-w-2xl p-6 relative shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition">
          &times;
        </button>

        <h2 className="text-sm font-semibold text-center text-gray-400">KONTAKTA OSS</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">skriv till oss nedan</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1 block">Ämnet</label>
              <input
                type="text"
                name="category"
                placeholder="t.ex. Returnera produkten-category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1D2939] border border-[#344054] rounded-md text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">För- & Efternamn <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="t.ex. Suzi Majd"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1D2939] border border-[#344054] rounded-md text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-1 block">Telefonnummer <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                placeholder="t.ex. 076-198 16 11"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1D2939] border border-[#344054] rounded-md text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">E-post <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="t.ex. sm_pal_2025@info.se"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#1D2939] border border-[#344054] rounded-md text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">Meddelande</label>
            <textarea
              name="message"
              placeholder="Meddelande"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#1D2939] border border-[#344054] rounded-md text-white placeholder-gray-400"
            />
          </div>

          <p className="text-sm text-gray-400">
            Kom ihåg att inte uppge några känsliga personuppgifter som t.ex. personnummer eller lösenord m.m. 
            För mer information se vår <a href="#" className="font-semibold underline">integritetspolicy</a>.
          </p>

          <button
            type="submit"
            className="mt-4 bg-[#06304d] hover:bg-[#1a8cd8] w-full py-3 rounded-md font-semibold text-white"
          >
           <strong> SKICKA </strong>
          </button>
        </form>
      </div>
    </div>
  );
}